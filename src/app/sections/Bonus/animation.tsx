"use client";

import { AnimationOnScroll } from "react-animation-on-scroll";

interface PropsAnimationSessionBonusComponent_I {
  children: JSX.Element;
  i: number;
}

export default function AnimationSessionBonusComponent(
  props: PropsAnimationSessionBonusComponent_I
): JSX.Element {
  return (
    <AnimationOnScroll
      style={{
        backgroundImage: `url('/images/section-8/bg-bonus.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="p-5 shadow-md shadow-gray rounded-xl"
      animateOnce
      animateIn="animate__fadeInUp"
      delay={props.i * 70}
    >
      {props.children}
    </AnimationOnScroll>
  );
}
