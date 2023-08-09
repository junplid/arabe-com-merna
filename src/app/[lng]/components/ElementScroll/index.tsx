"use client";
import { Element } from "react-scroll";

interface PropsComponentElementScroll_I {
  children: JSX.Element;
  name: string;
}

export default function ComponentElementScroll(
  props: PropsComponentElementScroll_I
): JSX.Element {
  return <Element name={props.name}>{props.children}</Element>;
}
