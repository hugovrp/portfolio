import Link from "next/link";
import { LinkProps } from "@/app/page";

export default function About({ id }: LinkProps) {
  return (
    <section id={id}>
      <div>
        <p>SOBRE MIM</p>
        <h2>Desenvolvedor Web</h2>
        <p>Texto</p>
        
        <Link href={""}>Link A</Link>
      </div>

      <div>
        <p>cards</p>
      </div>
    </section>
  );
}