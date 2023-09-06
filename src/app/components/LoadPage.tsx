"use client";

import { LogoComponent } from "@/components/Logo";
import { ReactNode, useEffect, useState } from "react";

interface PropsComponentLoadPage_I {
  children: ReactNode;
}

export default function ComponentLoadPage(
  props: PropsComponentLoadPage_I
): JSX.Element {
  const [load, setLoad] = useState<boolean>(false as boolean);

  useEffect(() => {
    setLoad(true);
  }, []);

  return (
    <div>
      {!load && (
        <div
          style={{ zIndex: 9999 }}
          className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-slate-50"
        >
          <LogoComponent />
        </div>
      )}
      {props.children}
    </div>
  );
}
