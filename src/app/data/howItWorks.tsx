import IconTalk from "../../../public/icons/talk.png";
import IconLive from "../../../public/icons/live.png";
import IconUsers from "../../../public/icons/users.png";
import IconEdit from "../../../public/icons/edit.png";
import IconBox from "../../../public/icons/box.png";
import IconCertification from "../../../public/icons/certification.png";
import IconWhatsapp from "../../../public/icons/whatsapp.png";
import IconBooks from "../../../public/icons/books.png";

export const data_how_it_works = [
  {
    key: "1",
    label: (
      <span>
        Metodologia focada na{" "}
        <strong className="font-semibold text-primary">conversação</strong>
      </span>
    ),
    Icon: IconTalk,
  },
  {
    key: "2",
    label: (
      <span>
        Aulas <strong className="font-semibold text-primary">ao vivo</strong> e
        gravadas
      </span>
    ),
    Icon: IconLive,
  },
  {
    key: "3",
    label: (
      <span>
        <strong className="font-semibold text-primary">Materiais</strong> e{" "}
        <strong className="font-semibold text-primary">
          conteúdo de apoio
        </strong>
      </span>
    ),
    Icon: IconBooks,
  },
  {
    key: "4",
    label: (
      <span>
        <strong className="font-semibold text-primary">Acompanhamento</strong>{" "}
        do aluno
      </span>
    ),
    Icon: IconUsers,
  },
  {
    key: "5",
    label: (
      <span>
        <strong className="font-semibold text-primary">
          Correção detalhada
        </strong>{" "}
        de exercícios
      </span>
    ),
    Icon: IconEdit,
  },
  {
    key: "6",
    label: (
      <span>
        <strong className="font-semibold text-primary">
          Grupo no WhatsApp
        </strong>{" "}
        para dúvidas
      </span>
    ),
    Icon: IconWhatsapp,
  },
  {
    key: "7",
    label: (
      <span>
        Método descomplicado, do{" "}
        <strong className="font-semibold text-primary">básico</strong> ao{" "}
        <strong className="font-semibold text-primary">avançado</strong>
      </span>
    ),
    Icon: IconBox,
  },
  {
    key: "8",
    label: (
      <span>
        <strong className="font-semibold text-primary">Certificados</strong> de
        conclusão{" "}
        <strong className="font-semibold text-primary">garantidos</strong>
      </span>
    ),
    Icon: IconCertification,
  },
];
