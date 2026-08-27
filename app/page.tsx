import Link from "next/link";
import Main from "@/components/main";
import About from "@/components/about";
import Contact from "@/components/contact";
import Projects from "@/components/projects";
import Experience from "@/components/experience";

export interface LinkProps {
  id: string; 
}

const links = [
  {name: 'Início', sectionRoute: '#main-sec'},
  {name: 'Sobre', sectionRoute: '#about-sec'},
  {name: 'Projetos', sectionRoute: '#projects-sec'},
  {name: 'Experiência', sectionRoute: '#experience-sec'},
  {name: 'Contato', sectionRoute: '#contact-sec'}
];

export default function Home() {
  return (
    <div>
      <div className="flex justify-between container mx-auto py-4">
        <div className="cursor-pointer text-accent font-bold">
          <Link href={"#technologies-sec"}>HV.</Link>
        </div>

        <ul className="flex gap-4">
          {links.map( (l, index) => (
            <Link 
              href={l.sectionRoute}
              key={index}
            >
              {l.name}
            </Link>
          ))}
        </ul>

        <Link 
          href={""}
          className=""
        >
          Vamos conversar
        </Link>
      </div>

      <div className="bg-dark-background text-white-font">
        <div className="bg-white-background text-black-font">
          <Main id="main-sec"/>
        </div>
       
        <div className="container mx-auto">
          <About id="about-sec"/>
          <Projects id="project-sec"/>
          <Experience id="experience-sec"/>
          <Contact id="contact-sec"/>

          <p className="">@ 2026 Hugo Vinícius. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
}