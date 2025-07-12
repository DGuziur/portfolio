"use client";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);

export default function Home() {
  const textRef = useRef(null);
  const [test, setTest] = useState(true);

  useGSAP(() => {
    const paramX = { x: 100 };
    const paramY = { y: 100 };
    SplitText.create(textRef.current, {
      type: "words, chars",
      onSplit(self) {
        gsap.from(self.chars, {
          duration: 1,
          ease: "power1.inOut",
          ...(test ? paramX : paramY),
          autoAlpha: 0,
          stagger: 0.05,
        });
      },
    });
    setTimeout(() => {
      setTest(false);
    }, 3000);
  }, [test]);

  return (
    <div className="grid items-center h-[100vh] w-[100vw]">
      {test ? (
        <h1
          className="text-center text-5xl text-zinc-700 font-medium"
          ref={textRef}
        >
          Mopsik jest
        </h1>
      ) : (
        <h1
          className="text-center text-5xl text-pink-400 font-medium"
          ref={textRef}
        >
          słodki
        </h1>
      )}
    </div>
  );
}
