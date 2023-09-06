"use client";
import Main from "@/../public/images/section-1/main.json";
import Lottie from "lottie-react";

interface PropsAnimationMainSection1Component_I {}

export default function AnimationMainSection1Component(
  props: PropsAnimationMainSection1Component_I
): JSX.Element {
  return (
    <Lottie
      style={{
        minWidth: 200,
      }}
      loop={false}
      animationData={Main}
    />
  );
}
