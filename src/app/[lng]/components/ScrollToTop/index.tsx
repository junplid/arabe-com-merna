"use client";
import ScrollToTop from "react-scroll-to-top";

interface PropsComponentScrollToTop_I {}

export default function ComponentScrollToTop(
  props: PropsComponentScrollToTop_I
): JSX.Element {
  return (
    <ScrollToTop
      smooth
      className="flex items-center justify-center p-2 shadow-md"
      color="#0C6746"
    />
  );
}
