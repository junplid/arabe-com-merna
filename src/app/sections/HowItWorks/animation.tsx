"use client";

import { AnimationOnScroll } from "react-animation-on-scroll";

interface PropsAnimationSessionHowItWorksComponent_I {
  children: JSX.Element;
  i: number;
}

export default function AnimationSessionHowItWorksComponent(
  props: PropsAnimationSessionHowItWorksComponent_I
): JSX.Element {
  return (
    <AnimationOnScroll animateOnce animateIn="animate__fadeInUp">
      {props.children}
    </AnimationOnScroll>
  );
}
