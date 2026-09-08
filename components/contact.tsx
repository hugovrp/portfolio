import Link from "next/link";
import Image from "next/image";
import { LinkProps } from "@/app/page";
import { contact, social } from "@/data/contact";

export default function Contact({ id }: LinkProps) {
  return (
    <div id={id} className="container mx-auto px-6 pb-12 pt-8 sm:pt-0">
      <h2 className="flex flex-col gap-2 uppercase tracking-widest font-bold mb-6 text-[18px]">
        Contato
        <span className="content-[''] block h-[2px] w-[32px] bottom-0 left-0 bg-accent-hover"/>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="md:border-r md:border-light-gray/80 md:pr-6">
          <h3 
            className="text-[32px] font-[600]"
          >
            Vamos construir algo <span className="text-accent">Incrível</span> juntos?
          </h3>
          <p
            className="text-[20px] leading-relaxed"
          >
            Estou disponível para novos projetos e oportunidades.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            {contact.map( (cont, contIndex) => (
              <Link
                href={cont.link}
                className="inline-flex gap-4 items-center px-6 py-3 text-dark-background bg-white-font rounded-lg w-fit
                          duration-300 transition-all hover:opacity-80 hover:gap-6 hover:-translate-y-[1.5px] shrink-0"
                key={contIndex}
              >
                <span className="inline-flex gap-2 items-center">
                  <Image src={cont.icon} alt={cont.name} width={30} height={30} loading="eager"/>
                  <p>{cont.description}</p>  
                </span>
                <span className="font-bold">→</span>
              </Link>
            ))}
          </div>
        </div>
      
        <div className="pt-10 md:pt-0 md:px-10 lg:px-16">
          <h3 
            className="text-[18px] font-[600] pb-6"
          >
            Redes Sociais
          </h3>
          <div className="flex flex-wrap gap-6">
            {social.map( (soc, socIndex) => (
              <Link
                href={soc.link}
                className="hover:opacity-80 hover:-translate-y-[1.5px] shrink-0 duration-300 transition-all"  
                key={socIndex}
              >
                <Image src={soc.icon} alt={soc.name} width={60} height={60} loading="eager"/>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <p className="text-center sm:text-left px-4 md:px-0 mt-10 text-white-font break-words">@ 2026 Hugo Rodrigues. Todos os direitos reservados.</p>
    </div>
  );
}