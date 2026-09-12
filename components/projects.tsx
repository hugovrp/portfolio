"use client"

import Image from "next/image";
import { useState } from "react";
import { LinkProps } from "@/app/page";
import ProjectModal from "./projectModal";
import { projects, ProjectProps } from "@/data/projects";

export default function Projects({ id }: LinkProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);

  return (
    <section 
      id={id} 
      className="container mx-auto px-6 py-8"
    >
      <h2 
        data-aos="fade-up" data-aos-once="true"
        className="flex flex-col gap-2 uppercase tracking-widest font-bold mb-8 text-[1.125rem]"
      >
        Projetos
        <span className="content-[''] block h-[2px] w-[32px] bottom-0 left-0 bg-accent-hover"/>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {projects.map( (project, index) => (
          <div
            key={index}
            data-aos="fade-up" data-aos-once="true"
            className="flex flex-col h-full border border-light-gray/80 rounded-xl overflow-hidden transition-all duration-300"
          >
            <div className="relative h-[220px]">
              <Image
                src={project.gallery[0]}
                alt={project.name}
                fill
                quality={90}
                fetchPriority="high"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <div className="flex flex-wrap gap-2 pb-4">
                {project.topics.map( (topic, topicIndex) => (
                  <p
                    key={topicIndex}
                    className="text-[0.875rem] bg-light-gray/20 py-1 px-2 rounded-md"
                  >
                    {topic}
                  </p>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold mb-3">
                {project.name}
              </h3>

              <p className="leading-relaxed line-clamp-2 mb-6">
                {project.description}
              </p>

              <button
                onClick={() => setSelectedProject(project)}
                className="
                  mt-auto inline-flex items-center justify-center gap-2 
                  font-semibold text-dark-background
                  px-4 py-2 rounded-lg w-fit bg-white-font
                  duration-300 transition-all 
                  hover:opacity-80 hover:gap-3 hover:-translate-y-[1.5px]"
              >
                Ver projeto
                <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}