import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";

gsap.registerPlugin(ScrollTrigger);

const useGsap = (elementRef, animation, delay = 0) => {
    useEffect(() => {
        if (elementRef.current) {
            gsap.fromTo(
                elementRef.current,
                animation.from,
                {
                    ...animation.to,
                    delay,
                    scrollTrigger: {
                        trigger: elementRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }
    }, [elementRef, animation, delay]);
};

const EducationCard = ({
    index,
    courseName,
    year,
    university,
    grade,
    icon,
}) => {
    const cardRef = useRef(null);
    useGsap(cardRef, {
        from: { opacity: 0, y: 100, scale: 0.8 },
        to: { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
    }, index * 0.2);

    return (
        <div className="w-full h-full">
            <div ref={cardRef} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
                <div className="bg-tertiary rounded-[20px] py-6 px-8 flex flex-col items-center gap-4 min-h-[300px]">
                    <img
                        src={icon}
                        alt={`${courseName}-icon`}
                        className="w-16 h-16 object-contain"
                    />
                    <div className="text-center flex-1 flex flex-col justify-center">
                        <h3 className="text-white text-[20px] font-bold">{courseName}</h3>
                        <p className="text-secondary text-[16px] mt-2 break-words">{university}</p>
                        <p className="text-secondary text-[14px] mt-1">{year}</p>
                        <p className="text-secondary text-[14px] mt-1">Grade: {grade}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Education = () => {
    const headingRef = useRef(null);
    const paragraphRef = useRef(null);

    useGsap(headingRef, {
        from: { opacity: 0, x: -50 },
        to: { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
    });

    useGsap(paragraphRef, {
        from: { opacity: 0, y: 50 },
        to: { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
    }, 0.3);

    return (
        <>
            <div ref={headingRef}>
                <p className={styles.sectionSubText}>My Academic Journey</p>
                <h2 className={styles.sectionHeadText}>Education</h2>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 justify-items-center gap-10">
                {education.map((edu, index) => (
                    <EducationCard
                        key={edu.courseName}
                        index={index}
                        {...edu}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Education, "education");