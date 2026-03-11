"use client";

import { useEffect, useState } from "react";

type TopLanguage = {
    name: string;
    percent: number;
};

type WakatimeResponse = {
    hasActivity: boolean;
    total: string;
    topLanguages: TopLanguage[];
    error?: string;
};

export function WakatimeToday() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<WakatimeResponse | null>(null);

    useEffect(() => {
        let active = true;

        async function loadToday() {
            try {
                const response = await fetch("/api/wakatime", {
                    cache: "no-store",
                });
                const result = (await response.json()) as WakatimeResponse;

                if (!active) return;

                if (!response.ok) {
                    setData({
                        hasActivity: false,
                        total: "0 mins",
                        topLanguages: [],
                        error: result?.error || "Unable to load activity",
                    });
                    return;
                }

                setData(result);
            } catch {
                if (!active) return;
                setData({
                    hasActivity: false,
                    total: "0 mins",
                    topLanguages: [],
                    error: "Unable to load activity",
                });
            } finally {
                if (active) setLoading(false);
            }
        }

        loadToday();
        return () => {
            active = false;
        };
    }, []);

    return (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 shadow-[0_8px_24px_rgba(0,0,0,0.28)] sm:p-6">
            <h3 className="text-xl font-semibold text-zinc-100 sm:text-2xl">
                Coding Today
            </h3>

            {loading ? (
                <div className="mt-4 space-y-3 animate-pulse">
                    <div className="h-8 w-36 rounded bg-zinc-800" />
                    <div className="h-4 w-40 rounded bg-zinc-800" />
                    <div className="h-4 w-32 rounded bg-zinc-800" />
                    <div className="h-4 w-28 rounded bg-zinc-800" />
                </div>
            ) : !data?.hasActivity ? (
                <p className="mt-4 text-sm text-zinc-400">
                    No coding activity today
                </p>
            ) : (
                <div className="mt-4">
                    <p className="text-2xl font-bold text-zinc-100 sm:text-3xl">
                        {data.total}
                    </p>

                    <ul className="mt-4 space-y-2 text-sm sm:text-base">
                        {data.topLanguages.map((language) => (
                            <li
                                key={language.name}
                                className="flex items-center justify-between text-zinc-300"
                            >
                                <span>{language.name}</span>
                                <span className="font-medium text-zinc-200">
                                    {language.percent}%
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
