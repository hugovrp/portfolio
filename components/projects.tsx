import Link from "next/link";
import Image from "next/image";
import { LinkProps } from "@/app/page";
import { projects } from "@/data/projects";

export default function Projects({ id }: LinkProps) {
  return (
    <section id={id} className="container mx-auto px-6 py-8">
      <h2 className="flex flex-col gap-2 uppercase tracking-widest font-bold mb-8 text-[18px]">
        Projetos
        <span className="content-[''] block h-[2px] w-[32px] bottom-0 left-0 bg-accent-hover"/>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {projects.map( (project, index) => (
          <div
            key={index}
            className="flex flex-col h-full border border-light-gray/80 rounded-xl overflow-hidden transition-all duration-300"
          >
            <div className="relative h-[220px]">
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="220px"
                className="object-cover"
              />

              {project.isFinished ? (
                <span className="absolute left-2 top-2 font-bold text-[20px] text-[#008000] border border-[#008000] bg-[#80EF80] rounded-full py-.5 px-1.5 shadow">
                  ☑
                </span>
              ) : (
                <span className="absolute left-2 top-2 font-bold text-[20px] text-[#777700] border border-[#777700] bg-[#FFFF70] rounded-full py-.5 px-1.5 shadow">
                  ☐
                </span>
              )}
            </div>

            <div className="p-6 flex flex-col flex-1">
              <div className="flex flex-wrap gap-2 pb-4">
                {project.topics.map( (topic, topicIndex) => (
                  <p
                    key={topicIndex}
                    className="text-[14px] bg-light-gray/20 py-1 px-2 rounded-md"
                  >
                    {topic}
                  </p>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold mb-3">
                {project.name}
              </h3>

              <p className="leading-relaxed line-clamp-3 mb-6">
                {project.description}
              </p>

              <Link
                href={project.link}
                target="_blank" rel="noopener noreferrer"
                className="
                  mt-auto inline-flex items-center justify-center gap-2 
                  font-semibold text-dark-background
                  px-4 py-2 rounded-lg w-fit bg-white-font
                  duration-300 transition-all 
                  hover:opacity-80 hover:gap-3 hover:-translate-y-[1.5px]"
              >
                Visitar projeto
                <span>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}