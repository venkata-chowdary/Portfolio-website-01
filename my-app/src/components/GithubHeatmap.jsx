"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

const DARK_THEME = {
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

export function GithubHeatmap({ username = "venkata-chowdary" }) {
    const [mounted, setMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setMounted(true);
        const onResize = () => setIsMobile(window.innerWidth < 768);
        onResize();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return (
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 shadow-[0_8px_24px_rgba(0,0,0,0.28)] sm:p-6">
            <h3 className="text-xl font-semibold text-zinc-100 sm:text-2xl">
                GitHub Activity
            </h3>
            <p className="mt-1 text-sm text-zinc-400">
                Contributions by @{username}
            </p>

            <div className="mt-5 overflow-hidden">
                {!mounted ? (
                    <div className="h-28 w-full animate-pulse rounded-xl bg-zinc-900/70" />
                ) : (
                    <div className="w-full scale-[0.82] origin-top-left md:scale-100">
                        <GitHubCalendar
                            username={username}
                            colorScheme="dark"
                            theme={DARK_THEME}
                            blockSize={isMobile ? 9 : 14}
                            blockMargin={isMobile ? 3 : 5}
                            fontSize={isMobile ? 11 : 14}
                            showWeekdayLabels={!isMobile}
                            hideMonthLabels={isMobile}
                            hideColorLegend={isMobile}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
