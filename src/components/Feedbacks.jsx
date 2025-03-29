import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { testimonials } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const FeedbackCard = ({ testimonial, name, designation, company, image, index, activeReadMore, setActiveReadMore, swiperRef }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const charLimit = 150;
  const cardRef = useRef(null);
  const detailsRef = useRef(null);

  const truncatedText =
    testimonial.length > charLimit && !isExpanded
      ? testimonial.substring(0, charLimit) + "..."
      : testimonial;

  const handleReadMore = (event) => {
    event.stopPropagation();

    if (isExpanded) {
      setIsExpanded(false);
      setActiveReadMore(null);
      if (swiperRef.current) {
        setTimeout(() => { // Added timeout
          swiperRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 10);
      }
    } else {
      setActiveReadMore(index);
      setIsExpanded(true);
      setTimeout(() => {
        if (detailsRef.current) {
          detailsRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
        }
      }, 0);
    }
  };

  useEffect(() => {
    if (activeReadMore !== index && isExpanded) {
      setIsExpanded(false);
      if (swiperRef.current) {
        setTimeout(() => { // Added timeout
          swiperRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 10);
      }
    }
  }, [activeReadMore, index, swiperRef]);

  return (
    <div ref={cardRef} className="bg-black-200 p-10 rounded-3xl w-full">
      <p className="text-white font-black text-[48px]">"</p>

      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">
          {truncatedText}
        </p>
        {testimonial.length > charLimit && (
          <div className="flex justify-end">
            <button
              className="text-[#915eef] mt-2 cursor-pointer"
              onClick={handleReadMore}
              data-readmore="true"
            >
              {isExpanded ? "Read less" : "Read more"}
            </button>
          </div>
        )}

        <div ref={detailsRef} className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const Feedbacks = () => {
  const swiperRef = useRef(null);
  const [activeReadMore, setActiveReadMore] = useState(null);

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;
    if (swiperInstance) {
      ScrollTrigger.create({
        trigger: swiperRef.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          if (swiperInstance.autoplay) {
            swiperInstance.autoplay.start();
          }
        },
        onLeave: () => {
          if (swiperInstance.autoplay) {
            swiperInstance.autoplay.stop();
          }
        },
        onEnterBack: () => {
          if (swiperInstance.autoplay) {
            swiperInstance.autoplay.start();
          }
        },
        onLeaveBack: () => {
          if (swiperInstance.autoplay) {
            swiperInstance.autoplay.stop();
          }
        },
      });

      const closeReadMore = (event) => {
        if (event && event.target) {
          if (!event.target.closest("[data-readmore='true']")) {
            setTimeout(() => {
              setActiveReadMore(null);
              if (swiperRef.current) {
                setTimeout(() => { // Added timeout
                  swiperRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 10);
              }
            }, 0);
          } else if (event.target.closest("[data-readmore='true']") && activeReadMore !== null) {
            if (activeReadMore !== parseInt(event.target.closest(".swiper-slide").dataset.swiperSlideIndex)) {
              setTimeout(() => {
                setActiveReadMore(null);
                if (swiperRef.current) {
                  setTimeout(() => { // Added timeout
                    swiperRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
                  }, 10);
                }
              }, 0);
            }
          }
        }
      };

      const handleSlideChange = () => {
        if (swiperRef.current) {
          setTimeout(() => { // Added timeout
            swiperRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 10);
        }
      };

      swiperInstance.on("slideChange", closeReadMore);
      swiperInstance.on("slideChange", handleSlideChange);
      swiperInstance.on("touchStart", closeReadMore);
      swiperInstance.on("dragMove", closeReadMore);
      swiperInstance.on("click", closeReadMore);
      swiperInstance.on("transitionEnd", closeReadMore);
    }

    const prevButton = document.querySelector(".swiper-button-prev");
    const nextButton = document.querySelector(".swiper-button-next");

    const scrollIntoView = () => {
      if (swiperRef.current) {
        setTimeout(() => { // Added timeout
          swiperRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 10);
      }
    };

    if (prevButton) {
      prevButton.addEventListener("click", () => {
        setActiveReadMore(null);
        scrollIntoView();
      });
    }
    if (nextButton) {
      nextButton.addEventListener("click", () => {
        setActiveReadMore(null);
        scrollIntoView();
      });
    }

    return () => {
      if (prevButton) {
        prevButton.removeEventListener("click", scrollIntoView);
      }
      if (nextButton) {
        nextButton.removeEventListener("click", scrollIntoView);
      }
    };
  }, []);

  return (
    <div ref={swiperRef} className={`mt-12 bg-black-100 rounded-[20px] swiper swiper-container swiper-initialized swiper-horizontal swiper-backface-hidden`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <div>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX}`}>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination, Navigation]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="swiper-container"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.name} data-swiper-slide-index={index}>
              <FeedbackCard {...testimonial} index={index} activeReadMore={activeReadMore} setActiveReadMore={setActiveReadMore} swiperRef={swiperRef} />
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev text-[#915eef]"></div>
          <div className="swiper-button-next text-[#915eef]"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");