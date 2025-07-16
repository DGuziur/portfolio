import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

export default function PugIsCute() {
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
          ease: "power1.out",
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
    <div className="w-full">
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
