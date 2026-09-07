import Main from "@/components/main";
import About from "@/components/about";
import Header from "@/components/Header";
import Contact from "@/components/contact";
import Projects from "@/components/projects";
import Experience from "@/components/experience";

export interface LinkProps {
  id: string; 
}

export const links = [
  {name: 'Início', sectionRoute: '#main-sec'},
  {name: 'Sobre', sectionRoute: '#about-sec'},
  {name: 'Projetos', sectionRoute: '#projects-sec'},
  {name: 'Experiência', sectionRoute: '#experience-sec'},
  {name: 'Contato', sectionRoute: '#contact-sec'}
];

export default function Home() {
  return (
    <div>
      <Header/>

      <div className="bg-white-background text-black-font">
        <Main id="main-sec"/>
      </div>

      <div className="bg-dark-background text-white-font">
        <About id="about-sec"/>
        <Projects id="project-sec"/>
        <Experience id="experience-sec"/>
        <Contact id="contact-sec"/>

        <p className="container mx-auto py-4 text-white-font">@ 2026 Hugo Vinícius. Todos os direitos reservados.</p>
      </div>
    </div>
  );
}