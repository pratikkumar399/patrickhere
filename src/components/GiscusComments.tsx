"use client";

import { useEffect, useRef } from "react";

export default function GiscusComments() {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const script = document.createElement("script");
        script.src = "https://giscus.app/client.js";
        script.setAttribute("data-repo", "pratikkumar399/patrickhere");
        script.setAttribute("data-repo-id", "R_kgDONjm46Q");
        script.setAttribute("data-category-id", "DIC_kwDONjm46c4CtLL7");
        script.setAttribute("data-mapping", "pathname");
        script.setAttribute("data-strict", "0");
        script.setAttribute("data-reactions-enabled", "1");
        script.setAttribute("data-emit-metadata", "0");
        script.setAttribute("data-input-position", "bottom");
        script.setAttribute("data-theme", "preferred_color_scheme");
        script.setAttribute("data-lang", "en");
        script.setAttribute("data-loading", "lazy");
        script.setAttribute("crossorigin", "anonymous");
        script.async = true;

        ref.current.appendChild(script);
    }, []);

    return <div ref={ref} />;
}
