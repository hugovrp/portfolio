import About from "@/components/about";
import Header from "@/components/Header";
import Contact from "@/components/contact";
import Projects from "@/components/projects";
import Experience from "@/components/experience";

export interface LinkProps {
  id: string; 
}

export const links = [
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
        <About id="about-sec"/>
      </div>

      <div className="bg-dark-background text-white-font" data-aos="fade-up" data-aos-once="true">
        <Projects id="projects-sec"/>
        <Experience id="experience-sec"/>
        <Contact id="contact-sec"/>
      </div> 
    </div>
  );
}