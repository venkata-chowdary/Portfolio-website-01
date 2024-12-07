"use client";;
import { cn } from "@/utils/ui";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
    items,
    className
}) => {
    let [hoveredIndex, setHoveredIndex] = useState(null);

    return (

        (<div
            className={cn("grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-4 ", className)}>
            {items.map((item, idx) => (
                <Link
                    href={item?.title}
                    key={item?.imageUrl}
                    className="relative group block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}>
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }} />
                        )}
                    </AnimatePresence>
                    <Card className="flex justify-center items-center text-center z-0">
                        <div className="w-16 h-16 lg:w-24 lg:h-24 relative lg:my-4">
                            <Image src={item.imageUrl}
                                alt="Venkata Chowdary Immanni"
                                objectFit="auto"
                                layout='fill'
                            />
                        </div>
                        <CardTitle className='text-sm lg:text-base'>{item.title}</CardTitle>
                    </Card>

                </Link>
            ))
            }
        </div >)
    );
};

export const Card = ({
    className,
    children
}) => {
    return (
        (<div
            className={cn(
                "rounded-2xl h-full w-full overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
                className
            )}>
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>)
    );
};
export const CardTitle = ({
    className,
    children
}) => {
    return (
        (<h4 className={cn("text-zinc-100 font-bold tracking-wide text-lg", className)}>
            {children}
        </h4>)
    );
};

