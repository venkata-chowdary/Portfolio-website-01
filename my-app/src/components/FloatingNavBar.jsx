import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandX,
    IconHome,
    IconBrandLinkedin,
    IconMail,
    IconBrandLeetcode,
} from "@tabler/icons-react";

export function FloatingNavBar() {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.linkedin.com/in/venkata-chowdary-immanni-95527723a",
        },
        {
            title: "Leetcode",
            icon: (<IconBrandLeetcode className="h-full w-full text-neutral-500 dark:text-neutral-300" />),
            href: "https://leetcode.com/u/chowdaryimmanni/"
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/venkata-chowdary/",
        },
        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://x.com/venkat2k4",
        },
        {
            title: "Contact",
            icon: (<IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />),
            href: "#contact"
        },

    ];
    return (
        (<div className="flex items-center justify-center w-full fixed bottom-8 lg:bottom-8 z-50 shadow-lg">
            <FloatingDock items={links} />
        </div>)
    );
}
