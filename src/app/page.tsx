"use client"

import About from "@/components/About";
import Contact from "@/components/Contact";
import Heros from "@/components/Heros";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Aos from "aos";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";


export default function Home() {
  useEffect(()=>{
    Aos.init({
      easing:"ease-in-out",
      duration:1200,
      delay : 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset:160,

    });
    AOS.refresh();
  },[])
  return (
    <main>
      <Heros />
      <Projects />
      <Skills />
      <Contact />
      <About />
    </main>
  );
}
