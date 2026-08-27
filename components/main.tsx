import Link from "next/link";
import { LinkProps } from "@/app/page";

export default function Main({ id }: LinkProps) {
  return (
    <main id={id} className="container mx-auto">
        <div>
          <p>Olá! Eu sou</p>
          <h1>Hugo Vinícius</h1>
          <p>Desenvolvedor Web</p>
          <p>TEXTO EXPLICATIVO</p>

          <nav>
            <Link href="">Link A</Link>
            <Link href={""}>Link B</Link>
          </nav>
        </div>

        <div>

        </div>
      </main>
  );
}