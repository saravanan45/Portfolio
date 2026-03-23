import { useEffect, useState } from "react";

import { PROFILE } from "../common/constants";

const useIOHook = () => {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, {
            root: null,
            rootMargin: "100px 0px 0px 0px",
            threshold: 0.2,
        });

        PROFILE.HEADER_SECTIONS.forEach((section) => {
            const el = document.getElementById(section);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return { activeSection };
};

export default useIOHook;