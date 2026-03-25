"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

const ONLINE_WINDOW_MS = 5 * 60 * 1000;
const POLL_INTERVAL_MS = 30 * 1000;

type StatusResponse = {
  lastSeen: number;
};

type WakatimeResponse = {
  total?: string;
};

function formatCodingHours(total?: string) {
  if (!total) return "0 mins Coding";

  const hourMatch = total.match(/(\d+)\s*hr/);
  const minMatch = total.match(/(\d+)\s*min/);
  const hours = hourMatch ? Number(hourMatch[1]) : 0;
  const minutes = minMatch ? Number(minMatch[1]) : 0;
  const totalHours = hours + minutes / 60;

  if (totalHours <= 0) return "0 mins Coding";
  if (hours === 0 && minutes > 0) {
    return `${minutes} min${minutes === 1 ? "" : "s"} Coding`;
  }
  const rounded = Math.round(totalHours * 10) / 10;
  return `${rounded} hrs Coding`;
}

export function OnlineStatus() {
  const [lastSeen, setLastSeen] = useState<number | null>(null);
  const [codingLabel, setCodingLabel] = useState("0 mins Coding");
  const [isLoading, setIsLoading] = useState(true);

  const loadStatus = useCallback(async () => {
    let nextLastSeen = 0;

    try {
      const response = await fetch("/api/status", {
        method: "GET",
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Unable to fetch status");
      }

      const data = (await response.json()) as StatusResponse;
      nextLastSeen = typeof data.lastSeen === "number" ? data.lastSeen : 0;
    } catch {
      nextLastSeen = 0;
    }

    try {
      const response = await fetch("/api/wakatime", {
        method: "GET",
        cache: "no-store",
      });

      if (!response.ok) {
        setCodingLabel("0 mins Coding");
      } else {
        const data = (await response.json()) as WakatimeResponse;
        setCodingLabel(formatCodingHours(data.total));
      }
    } catch {
      setCodingLabel("0 mins Coding");
    } finally {
      setLastSeen(nextLastSeen);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadStatus();
    const interval = setInterval(() => {
      void loadStatus();
    }, POLL_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [loadStatus]);

  const view = useMemo(() => {
    if (isLoading) {
      return {
        isOnline: false,
        minutesAgo: 0,
        label: "Checking status...",
      };
    }

    const safeLastSeen = lastSeen ?? 0;
    const diffMs = Math.max(0, Date.now() - safeLastSeen);
    const minutesAgo = Math.floor(diffMs / 60000);
    const isOnline = safeLastSeen > 0 && diffMs < ONLINE_WINDOW_MS;

    return {
      isOnline,
      minutesAgo,
      label: isOnline ? "Online" : "Offline",
    };
  }, [isLoading, lastSeen]);

  const isOnlineActive = !isLoading && view.isOnline;

  return (
    <div
      className={`relative inline-flex items-center gap-2.5 overflow-hidden rounded-full border px-3 py-1.5 text-zinc-300 backdrop-blur transition-all duration-300 ${
        isOnlineActive
          ? "bg-zinc-900/85 border-zinc-700 shadow-[0_0_18px_rgba(16,185,129,0.12)]"
          : "bg-zinc-900/80 border-zinc-800"
      }`}
    >
      {isOnlineActive && (
        <>
          <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-emerald-200/20 to-transparent animate-[shimmer_3.6s_linear_infinite]" />
        </>
      )}
      {isLoading ? (
        <p className="text-xs text-zinc-400">{view.label}</p>
      ) : view.isOnline ? (
        <>
          <span className="relative flex h-3 w-3 items-center justify-center">
            <span className="absolute h-4 w-4 rounded-full bg-emerald-400/35 blur-[2px] animate-pulse" />
            <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-sm font-medium">Online</span>
          <span className="text-xs text-zinc-400">{codingLabel}</span>
          <span className="hidden sm:inline text-xs text-zinc-400">
            Last active {view.minutesAgo}m ago
          </span>
        </>
      ) : (
        <>
          <span className="h-2 w-2 rounded-full bg-zinc-500" />
          <span className="text-sm font-medium text-zinc-400">Offline</span>
          <span className="text-xs text-zinc-400">{codingLabel}</span>
        </>
      )}
    </div>
  );
}
