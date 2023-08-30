import { FaWhatsapp } from "react-icons/fa";

interface FloatingWhatsAppPropsComponent_I {}

export default function FloatingWhatsAppComponent(
  props: FloatingWhatsAppPropsComponent_I
): JSX.Element {
  return (
    <a
      href={`https://wa.me/558197120224?text=${encodeURI(
        "Gostaria de saber mais informações sobre o curso do Árabe"
      )}`}
      target="_blank"
      className="fixed bottom-0 right-0 z-50 p-3 -translate-y-24 rounded-full shadow-md -translate-x-7"
      style={{
        background: "#3c9a33",
      }}
    >
      <FaWhatsapp size={40} color="#fff" />
    </a>
  );
}
