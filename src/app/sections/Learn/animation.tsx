"use client";

import { AnimationOnScroll } from "react-animation-on-scroll";

interface PropsAnimationSessionLearnComponent_I {
  children: JSX.Element;
  i: number;
}

export default function AnimationSessionLearnComponent(
  props: PropsAnimationSessionLearnComponent_I
): JSX.Element {
  return (
    <AnimationOnScroll
      style={{ background: "#fff" }}
      className="shadow-lg p-7 rounded-3xl text-primary"
      animateOnce
      animateIn="animate__fadeInUp"
      delay={props.i * 70}
    >
      {props.children}
    </AnimationOnScroll>
  );
}
