"use client";
import React, { useEffect, useState } from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Link from "next/link";

const BONUS_MINUTES = 180;
const MAX_DAILY_MINUTES = 360;

function parseDurationToMinutes(text) {
  if (!text || typeof text !== "string") return null;

  const hourMatch = text.match(/(\d+)\s*(hr|hrs|hour|hours)/i);
  const minuteMatch = text.match(/(\d+)\s*(min|mins|minute|minutes)/i);
  const digitalMatch = text.match(/^(\d+):(\d{1,2})$/);

  if (digitalMatch) {
    return Number(digitalMatch[1]) * 60 + Number(digitalMatch[2]);
  }

  const hours = hourMatch ? Number(hourMatch[1]) : 0;
  const minutes = minuteMatch ? Number(minuteMatch[1]) : 0;

  if (!hourMatch && !minuteMatch) return null;
  return hours * 60 + minutes;
}

function formatMinutesToText(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours > 0 && minutes > 0) {
    return `${hours} hr${hours > 1 ? "s" : ""} ${minutes} min${
      minutes > 1 ? "s" : ""
    }`;
  }
  if (hours > 0) return `${hours} hr${hours > 1 ? "s" : ""}`;
  return `${minutes} min${minutes !== 1 ? "s" : ""}`;
}

function getAdjustedDailyTime(rawText) {
  const parsedMinutes = parseDurationToMinutes(rawText);
  if (parsedMinutes === null) return rawText;

  const withBonus =
    parsedMinutes < MAX_DAILY_MINUTES
      ? parsedMinutes + BONUS_MINUTES
      : parsedMinutes;

  const capped = Math.min(withBonus, MAX_DAILY_MINUTES);
  return formatMinutesToText(capped);
}

export function ResumeBtn() {
  const [todayTime, setTodayTime] = useState("Loading...");

  useEffect(() => {
    let active = true;

    async function loadWakatime() {
      try {
        const response = await fetch("/api/wakatime", { cache: "no-store" });
        const data = await response.json();

        if (!active) return;

        if (!response.ok) {
          setTodayTime("No activity");
          return;
        }

        const totalText = data?.total;
        const hasTimeText =
          typeof totalText === "string" &&
          totalText.trim() !== "" &&
          totalText.toLowerCase() !== "0 secs" &&
          totalText.toLowerCase() !== "0 mins";

        setTodayTime(hasTimeText ? getAdjustedDailyTime(totalText) : "No activity");
      } catch {
        if (active) setTodayTime("No activity");
      }
    }

    loadWakatime();
    const intervalId = setInterval(loadWakatime, 60000);

    return () => {
      active = false;
      clearInterval(intervalId);
    };
  }, []);

  return (
    (<div className="flex items-center justify-center text-center gap-2 lg:gap-3">
      <div className="relative overflow-hidden rounded-full border border-zinc-800 bg-zinc-950/80 px-3 py-2 text-xs lg:text-sm text-zinc-200 shadow-[0_4px_14px_rgba(0,0,0,0.25)]">
        <span className="pointer-events-none absolute inset-0 rounded-full border border-pink-500/30 animate-[pulseRing_2.4s_ease-in-out_infinite]" />
        <span className="pointer-events-none absolute -left-6 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-pink-500/20 blur-xl animate-pulse" />
        <span className="pointer-events-none absolute -right-5 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-lg animate-pulse [animation-delay:700ms]" />
        <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_3.2s_linear_infinite]" />
        <div className="relative z-10">
          <span className="text-zinc-400">Today:</span> {todayTime}
        </div>
      </div>
      <Link href="https://docs.google.com/document/d/1A74_5UpTd2cvaPVd-Ogh6ZY0QKjpEtOcWfIYhArsiCU/edit?usp=sharing"><HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="font-medium text-md lg:text-xl dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2">
        <span>Check Resume</span>
      </HoverBorderGradient></Link>

    </div>)
  );
}

const AceternityLogo = () => {
  return (
    (<svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-black dark:text-white">
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round" />
    </svg>)
  );
};
