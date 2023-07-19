import Image from "next/image";
import SVGLogo from "../../../public/logo-light.svg";

export function LogoComponent() {
  return (
    <div>
      <Image
        priority
        src={SVGLogo}
        width={100.3}
        height={48.47}
        alt="Logo Árabe com Merna"
      />
    </div>
  );
}
