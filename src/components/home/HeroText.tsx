"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function AnimatedHeroHeadline() {
    const [step, setStep] = useState<"intro" | "create">("intro");

    useEffect(() => {
        const t = setTimeout(() => setStep("create"), 2000); // delay before switch
        return () => clearTimeout(t);
    }, []);

    const accentSpan =
        "pb-[0.2em] -mb-[0.2em] pr-[0.2em] -mr-[0.2em] " +
        "relative inline-block font-[Georgia] text-default-gradient font-normal italic uppercase tracking-[-1.6px]";

    const baseH1 =
        "text-5xl md:text-6xl lg:text-7xl font-medium text-center tracking-[-3.2px] leading-none";

    return (
        <div className="relative">
            <AnimatePresence mode="wait">
                {step === "intro" ? (
                    <motion.h1
                        key="intro"
                        className={baseH1}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0}}
                        exit={{ opacity: 0, y: -12, filter: "blur(50px)" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        Hi, my name <br /> is{" "}
                        <span className={accentSpan}>Shelly</span>
                    </motion.h1>
                ) : (
                    <motion.h1
                        key="create"
                        className={baseH1}
                        initial={{ opacity: 0, y: 12, filter: "blur(50px)" }}
                        animate={{ opacity: 1, y: 0, filter:"none" }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}

                    >
                        I create <span className={accentSpan}>UNIQUE</span>
                        <br />
                        experiences
                    </motion.h1>
                )}
            </AnimatePresence>
        </div>
    );
}