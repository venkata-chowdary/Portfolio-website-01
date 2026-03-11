import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const WAKATIME_URL =
    "https://wakatime.com/api/v1/users/current/summaries?range=today";

export async function GET() {
    const apiKey = process.env.WAKATIME_API_KEY;

    if (!apiKey) {
        return NextResponse.json(
            { error: "Missing WAKATIME_API_KEY environment variable" },
            { status: 500 }
        );
    }

    try {
        const basicAuth = Buffer.from(`${apiKey}:`).toString("base64");

        const response = await fetch(WAKATIME_URL, {
            method: "GET",
            cache: "no-store",
            headers: {
                Authorization: `Basic ${basicAuth}`,
                Accept: "application/json",
            },
        });

        if (!response.ok) {
            return NextResponse.json(
                { error: "Failed to fetch WakaTime data" },
                { status: response.status }
            );
        }

        const payload = await response.json();
        const today = payload?.data?.[0];
        const totalSeconds = today?.grand_total?.total_seconds || 0;
        const total = today?.grand_total?.text || "0 mins";
        const languages = Array.isArray(today?.languages) ? today.languages : [];

        const topLanguages = languages
            .sort(
                (a: { percent?: number }, b: { percent?: number }) =>
                    (b.percent || 0) - (a.percent || 0)
            )
            .slice(0, 3)
            .map((lang: { name?: string; percent?: number }) => ({
                name: lang.name || "Unknown",
                percent: Math.round((lang.percent || 0) * 10) / 10,
            }));

        return NextResponse.json(
            {
                hasActivity: totalSeconds > 0,
                total,
                topLanguages,
            },
            {
                headers: {
                    "Cache-Control": "no-store, max-age=0",
                },
            }
        );
    } catch {
        return NextResponse.json(
            { error: "Unable to read WakaTime data right now" },
            { status: 500 }
        );
    }
}
