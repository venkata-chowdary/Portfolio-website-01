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
import Image from "next/image";

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
            href: "#",
        },
        {
            title: "Leetcode",
            icon: (<IconBrandLeetcode className="h-full w-full text-neutral-500 dark:text-neutral-300" />),
            href: "#"
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Contact",
            icon: (<IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />),
            href: "#"
        },

    ];
    return (
        (<div className="flex items-center justify-center w-full fixed bottom-12 lg:bottom-8">
            <FloatingDock items={links} />
        </div>)
    );
}
