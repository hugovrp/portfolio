import Image from "next/image";
import { LinkProps } from "@/app/page";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { technologies } from "@/data/technologies";

export default function Experience({ id }: LinkProps) {
  return (
    <div id={id} className="container mx-auto px-6 py-4">
      <section className="grid grid-cols-1 gap-12 mb-12 lg:grid-cols-2">
        <div>
          <h2 className="flex flex-col gap-2 uppercase tracking-widest font-bold mb-6 text-[18px]">
            Experiência
            <span className="content-[''] block h-[2px] w-[32px] bottom-0 left-0 bg-accent-hover"/>
          </h2>

          {experience.map( (exp, expIndex) => (
            <div 
              key={expIndex}
              className="flex gap-3 items-start"
            >
              <div>
                <span className="content-[''] block w-[8px] h-[8px] rounded-full bg-accent shrink-0 mt-2"/>
              </div>

              <div>
                <h4 className="inline-flex gap-3 items-center font-bold">
                  {exp.role}
                  <span className="content-[''] block w-[4px] h-[4px] bg-light-gray/90"/>
                  <span className="text-light-gray/90">
                    {exp.enterprise}
                  </span>
                </h4>

                <p className="text-[14px] mt-1">
                  {exp.period}
                </p>

                <p className="pt-4 max-w-xl leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}

        </div>
        
        <div>
          <h2 className="flex flex-col gap-2 uppercase tracking-widest font-bold mb-6 text-[18px]">
            Formação
            <span className="content-[''] block h-[2px] w-[32px] bottom-0 left-0 bg-accent-hover"/>
          </h2>

          <div className="flex flex-col gap-6">
            {education.map( (edu, eduIndex) => (
              <div className="flex gap-6 p-4 border border-light-gray/80 rounded-lg items-center">
                <div className="inline-block bg-accent p-2 rounded-full h-full">
                  <Image src={edu.icon} alt={edu.class} width={50} height={50} loading="eager"/>
                </div>

                <div className="flex flex-col gap-1">
                  <h4 className="text-[18px] font-bold pb-2">
                    {edu.class}
                  </h4>

                  <p className="text-[16px]">
                    {edu.institution}
                  </p>

                  <p className="text-[15px]">
                    {edu.period}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="flex flex-col gap-2 uppercase tracking-widest font-bold mb-8">
          Tecnologias
          <span className="content-[''] block h-[2px] w-[32px] bottom-0 left-0 bg-accent-hover"/>
        </h2>

        <div className="flex gap-6 flex-wrap md:justify-center">
          {technologies.map( (tec, tecIndex) => (
            <div
              className="text-center p-4 flex flex-col gap-4 items-center w-[120px]"
              key={tecIndex}
            >
              <Image src={tec.image} alt={tec.name} width={50} height={50} loading="eager"/>
              <p className="font-bold tracking-wide">{tec.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}