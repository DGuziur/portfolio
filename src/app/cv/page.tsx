"use client";
import { useRef } from "react";
import { MouseEvent } from "react";
import gsap from "gsap";
import cvStyles from "./cv.module.css";

const fragments = [
  "fragment1",
  "fragment2",
  "fragment3",
  "fragment4",
  "fragment5",
  "fragment6",
];

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export default function CvPage() {
  const cvFragmentsContainerRef = useRef<HTMLDivElement>(null);
  const cvFragmentsRef = useRef<HTMLDivElement[]>([]);

  const destroy = () => {
    cvFragmentsRef.current.forEach((fragment) => {
      gsap.to(fragment, {
        x: getRandomInt(-400, 400),
        y: getRandomInt(-400, 400),
        scale: 0.5,
        rotate: getRandomInt(-180, 180),
        duration: 1,
        ease: "power1.inOut",
      });
    });
  };

  const repair = () => {
    cvFragmentsRef.current.forEach((fragment) => {
      gsap.to(fragment, {
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        duration: 1,
        ease: "power1.inOut",
      });
    });
  };

  const showcase = () => {
    gsap.set(cvFragmentsContainerRef.current, {
      transformStyle: "preserve-3d",
    });
    gsap.to(cvFragmentsContainerRef.current, {
      scale: 1.1,
      boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = cvFragmentsContainerRef.current!.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    gsap.to(cvFragmentsContainerRef.current, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.1,
      ease: "power1.out",
    });
  };

  const reset = () => {
    gsap.to(cvFragmentsContainerRef.current, {
      scale: 1,
      rotateX: 0,
      boxShadow: "none",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <>
      <button
        className="p-3 m-3 cursor-pointer bg-black hover:bg-amber-800 text-amber-50 rounded-2xl"
        onClick={destroy}
      >
        Destroy
      </button>
      <button
        className="p-3 cursor-pointer bg-black hover:bg-amber-800 text-amber-50 rounded-xl"
        onClick={repair}
      >
        Repair
      </button>
      <div className="h-[100vh] w-[100vw] flex justify-center ">
        <div
          ref={cvFragmentsContainerRef}
          className="absolute h-[595px] max-w-[80%] max-h-[80%] aspect-595/842"
          onMouseOver={showcase}
          onMouseLeave={reset}
          onMouseMove={handleMouseMove}
        >
          {fragments.map((fragment, index) => {
            return (
              <div
                key={fragment}
                ref={(node) => {
                  if (node) cvFragmentsRef.current[index] = node;
                }}
                className={`${cvStyles.cvFragment} ${cvStyles[fragment]}`}
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
}
