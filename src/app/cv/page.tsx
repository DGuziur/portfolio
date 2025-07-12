"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import styles from "./cv.module.css";
import gsap from "gsap";

const fragments = [1, 2, 3, 4, 5, 6];

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export default function CvPage() {
  const cvFragmentsRef = useRef<HTMLDivElement[]>([]);

  // useGSAP(() => {
  //   cvFragmentsRef.current.forEach((fragment) => {
  //     gsap.to(fragment, {
  //       x: getRandomInt(-400, 400),
  //       y: getRandomInt(-400, 400),
  //       scale: 0.5,
  //       rotate: getRandomInt(-180, 180),
  //       duration: 1,
  //       ease: "power1.inOut",
  //     });
  //   });
  // });

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

  return (
    <>
      <button
        className="p-3 m-3 bg-black hover:bg-amber-800 text-amber-50 rounded-2xl"
        onClick={destroy}
      >
        Destroy
      </button>
      <button
        className="p-3 bg-black hover:bg-amber-800 text-amber-50 rounded-2xl"
        onClick={repair}
      >
        Repair
      </button>
      <div className="h-[100vh] w-[100vw] grid place-items-center">
        <div className="absolute w-[600px] h-[900px]">
          {fragments.map((fragment, index) => {
            return (
              <div
                key={fragment}
                ref={(node) => {
                  if (node) cvFragmentsRef.current[index] = node;
                }}
                className={`cv-fragment fragment-${fragment}`}
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
}
