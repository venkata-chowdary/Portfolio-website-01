import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function EducationTimeLine() {
    const data = [
        {
            title: "Dec 2021 - April 2025",
            content: (
                <div className="flex flex-col space-y-2 lg:space-y-3">
                    <div>
                        <h2 className="text-2xl lg:text-4xl font-bold mb-1">
                            Bachelor Of Technology, Information Technology
                        </h2>
                        <h3 className="text-xs lg:text-base font-medium text-neutral-500">
                            G M R Institute Of Technology, <span>Rajam, India</span>
                        </h3>
                    </div>
                    <ul className="list-disc leading-loose ml-5 text-sm lg:text-base text-gray-300 space-y-2">
                         {/* Optional: Add description or coursework if available, for now leaving empty or adding placeholder if desired. User just gave title/dates. */}
                    </ul>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}
