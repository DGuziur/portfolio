"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import PugIsCute from "./_components/pug-is-cute";
import TechFightHorizontalScroll from "./_components/tech-fight-hscroll";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);

export default function Home() {
  return (
    <div className="grid items-center h-[100vh] w-[100vw]">
      <PugIsCute></PugIsCute>
      <TechFightHorizontalScroll></TechFightHorizontalScroll>
    </div>
  );
}
