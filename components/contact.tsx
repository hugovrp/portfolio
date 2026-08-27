import Link from "next/link";
import { LinkProps } from "@/app/page";

export default function Contact({ id }: LinkProps) {
  return (
    <div className="">
      <div className="flex justify-between">
        <h1>Vamos construir algo <span className="text-accent">incrível</span> juntos?</h1>

        <div>
          <p>Estou disponível para novos projetos e oportunidades.</p>
          <Link 
            href={""}
            className=""
          >
            Vamos conversar
          </Link>
        </div>

        <div>
          <h3>CONTATO</h3>
        </div>
      </div>
    </div>
  );
}