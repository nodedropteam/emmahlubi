"use client";

import { useState, useEffect } from "react";

function useScrollThreshold(threshold = 100) {
    const [hasScrolledPast, setHasScrolledPast] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolledPast(window.scrollY > threshold);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Run on mount in case the user is already scrolled

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [threshold]);

    return hasScrolledPast;
}

export default useScrollThreshold;
