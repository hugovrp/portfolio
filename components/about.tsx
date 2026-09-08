import Link from "next/link";
import Image from "next/image";
import { LinkProps } from "@/app/page";

export default function About({ id }: LinkProps) {
  return (
    <main id={id} className="container mx-auto px-6 pt-4 flex items-center">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">

       <div className="">
          <p className="text-[18px] tracking-wide">
            Olá! Eu sou
          </p>

          <h1 className="text-[32px] lg:text-[48px] font-bold tracking-wider">
            Hugo 
            <span className="text-accent"> Vinícius</span>
          </h1>

          <p className="text-[18px] flex items-center gap-2 font-medium tracking-wide">
            Desenvolvedor Web
            <span className="block w-8 h-[2px] bg-accent"></span>
          </p>
          <p className="pt-6 max-w-xl leading-relaxed">
            Desenvolvo aplicações modernas, responsivas e escaláveis,
            com foco em experiência do usuário, performance e
            boas práticas de desenvolvimento.
          </p>

          <div className="flex flex-wrap gap-4 py-8">
            <Link 
              href="#projects-sec"
              className="
                inline-flex gap-2 items-center py-3 px-6 
                bg-accent 
                font-bold text-white-font 
                border-2 border-accent 
                rounded-md transition-all duration-300
                hover:gap-3 hover:bg-white-background hover:text-accent hover:-translate-y-[1.5px]" 
            >
              Ver projetos
              <span className="font-bolder">→</span>
            </Link>

            <Link 
              href="#contact-sec"
              className="
                py-3 px-6 
                text-dark-background font-bold 
                border-2 border-dark-background  
                transition-all rounded-md duration-300
                hover:bg-dark-background hover:text-white-font hover:-translate-y-[1.5px]"
            >
              Entre em contato
            </Link>
          </div>
        </div>

        <div className="hidden lg:block relative h-[400px] w-full flex items-center justify-center">
          <svg
            className="absolute right-0 top-0 w-full h-full"
            viewBox="0 0 600 500"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <pattern
                id="dotPattern"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="2" fill="#d97757" />
              </pattern>
            </defs>

            <path
              fill="#f5cca8"
              d="M434.5,447Q297,914,751.5,900Q-6,700,18,430Q90,0,400.5,29Q547,20,610.5,209Q747,590,604.5,617Z"
            />

            <rect x="320" y="100" width="240" height="330" fill="url(#dotPattern)" />
            <rect x="100" y="280" width="180" height="200" fill="url(#dotPattern)" />
          </svg>

          <Image
            src="/main.png"
            alt="Hugo"
            loading="eager"
            width={600}
            height={800}
            className="xl:ml-4 relative z-10 h-full w-auto object-cover object-bottom"
          />
        </div>
      </div>
    </main>
  );
}