import React, { useRef, useEffect } from "react";
import { Tilt } from "react-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

import profilePhoto from "../assets/animated profile.png";
import paintbrushStroke from "../assets/paintbrush-stroke.png";

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

const DownloadButton = () => {
  const buttonRef = useRef(null);

  useGsap(buttonRef, {
    from: { opacity: 0, y: 50, scale: 0.9 },
    to: { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
  });

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/RahilShahCV.pdf";
    link.download = "RahilShahCV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Tilt>
      <div ref={buttonRef} className="w-full max-w-xs green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <button
          onClick={handleDownload}
          className="w-full bg-tertiary rounded-[20px] py-5 px-12 flex justify-center items-center flex-col text-white text-[20px] font-bold text-center hover:bg-opacity-90 transition-all"
        >
          Explore my CV
        </button>
      </div>
    </Tilt>
  );
};

const LinkedInButton = () => {
  const buttonRef = useRef(null);

  useGsap(buttonRef, {
    from: { opacity: 0, y: 50, scale: 0.9 },
    to: { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
  }, 0.2); // Slight delay to stagger the animation

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/rahil-shah2399", "_blank");
  };

  return (
    <Tilt>
      <div ref={buttonRef} className="w-full max-w-xs green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <button
          onClick={handleLinkedInClick}
          className="w-full bg-tertiary rounded-[20px] py-5 px-12 flex justify-center items-center flex-col text-white text-[20px] font-bold text-center hover:bg-opacity-90 transition-all"
        >
          Connect on LinkedIn
        </button>
      </div>
    </Tilt>
  );
};

const About = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const photoRef = useRef(null);
  const buttonsRef = useRef(null);

  useGsap(headingRef, {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
  });

  useGsap(paragraphRef, {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
  }, 0.3);

  useGsap(photoRef, {
    from: { opacity: 0, scale: 0.8 },
    to: { opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
  }, 0.5);

  useGsap(buttonsRef, {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
  }, 0.7);

  return (
    <>
      <div ref={headingRef}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

      <div className="mt-4 flex flex-col md:flex-row items-start gap-8 md:gap-6">
        {/* Left side on desktop: Text and Buttons */}
        <div className="flex-1 flex flex-col gap-6 order-2 md:order-1">
          {/* Text */}
          <div className="order-2">
            <p ref={paragraphRef} className="text-secondary text-[17px] max-w-3xl leading-[30px]">
              I’m a passionate software engineer with expertise in C#.Net, JavaScript, Java, Python, Web Tech and SQL, having built user-focused solutions in the tech industry. 
              As a quick learner and observant innovator, I thrive at solving complex challenges and enhancing usability. 
              With a Master’s in Engineering Management, I’m excited to transition into product management, creating scalable, impactful products that deliver value. 
              My experience collaborating with cross-functional teams has honed my ability to bridge technical and business needs, ensuring seamless project delivery. 
              Let’s build something amazing together!
            </p>
          </div>

          {/* Buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row justify-start gap-5 order-3">
            <DownloadButton />
            <LinkedInButton />
          </div>
        </div>

        {/* Right side on desktop: Photo with Paintbrush Strokes */}
        <div ref={photoRef} className="w-[250px] xs:w-[280px] md:w-[300px] relative flex justify-center order-1 md:order-2">
          {/* Paintbrush Stroke */}
          <div className="absolute -z-10 w-[120%] h-[120%] -left-[10%] -top-[10%]">
            <div
              className="w-full h-full green-pink-gradient"
              style={{
                WebkitMaskImage: `url(${paintbrushStroke})`,
                maskImage: `url(${paintbrushStroke})`,
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskPosition: "center",
                maskPosition: "center",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
              }}
            />
          </div>
          <img
            src={profilePhoto}
            alt="Rahil Shah"
            className="w-full h-auto rounded-lg object-cover transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-[0_0_20px_rgba(0,196,180,0.5)]"
          />
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");