"use client";

import { AnimatePresence } from "framer-motion";
import React from "react";

export default function PageTransition({children}: {children: React.ReactNode}) {
    return (
        <AnimatePresence mode="wait">
            {children}
        </AnimatePresence>
    );
}