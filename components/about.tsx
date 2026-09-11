import Link from "next/link";
import Image from "next/image";
import { LinkProps } from "@/app/page";

export default function About({ id }: LinkProps) {
  return (
    <main id={id} className="container mx-auto px-6 pt-4 flex items-center">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
       <div
        data-aos="fade-right" data-aos-once="true"
       >
          <p className="md:text-[1.125rem] tracking-wide">
            Olá! Eu sou
          </p>

          <h1 className="text-[2rem] lg:text-[3rem] font-bold tracking-wider">
            Hugo 
            <span className="text-accent"> Rodrigues</span>
          </h1>

          <p className="md:text-[1.125rem] flex items-center gap-2 font-medium tracking-wide">
            Desenvolvedor Web
            <span className="block w-8 h-[2px] bg-accent"></span>
          </p>
          <p className="pt-6 max-w-xl leading-relaxed">
            Focado na criação de aplicações modernas, responsivas e intuitivas. 
            Busco unir funcionalidade, desempenho e boa experiência do usuário para transformar ideias em soluções digitais eficientes. 
            Estou sempre aprendendo, evoluindo e buscando novos desafios para crescer profissionalmente.
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

        <div 
          data-aos="fade-up" data-aos-once="true"
          className="hidden lg:block relative h-[450px] w-full flex items-center justify-center"
        >
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
              d="M931.5,947Q297,199,811.5,400Q-87,800,12,410Q190,0,300.5,11Q547,25,600.5,119Q917,790,604.5,917Z"
            />

            <rect x="320" y="110" width="260" height="330" fill="url(#dotPattern)" />
            <rect x="100" y="290" width="180" height="200" fill="url(#dotPattern)" />
          </svg>

          <Image
            src="/main.png"
            alt="Hugo"
            loading="eager"
            width={600}
            height={800}
            data-aos="fade-up" data-aos-once="true"
            className="xl:ml-4 relative z-10 h-full w-auto object-cover object-bottom"
          />
        </div>
      </div>
    </main>
  );
}