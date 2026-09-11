"use client"

import Link from "next/link";
import Carousel from "./carousel";
import { useState, useEffect } from "react";
import { ProjectProps } from "@/data/projects";

interface ModalProps {
  project: ProjectProps;
  onClose: () => void;
}

export default function ProjectModal( {project, onClose}: ModalProps ) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (isOpen) 
      document.body.style.overflow = "hidden";
    else 
      document.body.style.overflow = "";
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <section 
      onClick={() => {
        onClose();
        setIsOpen(false);
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
    >
      <div 
        data-aos="fade-right" data-aos-once="true"
        onClick={(e) => e.stopPropagation()}
        className="grid grid-cols-1 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg bg-dark-background px-4 py-2 md:px-6 md:py-3 h-[900px] border border-white-font"
      >
        <div 
          data-aos="fade-down" data-aos-once="true"
          className="relative min-w-0"
        >
          <div className="flex justify-between items-center">
            <h6 className="text-[0.75rem] bg-light-gray/20 py-0.5 px-2 rounded-md font-bold">
              {project.name}
            </h6>

            <button
              onClick={onClose}
              className="text-3xl font-bold text-white-font hover:text-red-500 cursor-pointer"
            >
              ×
            </button>
          </div>

          <Carousel
            images={project.gallery}
            name={project.name}
          />
        </div>
          
        <div 
          data-aos="fade-up" data-aos-once="true"
          className="flex flex-col gap-2 pt-4"
        >
          <h2 className="text-[1.5rem] font-bold tracking-wide">{project.name}</h2>

          <div className="flex flex-wrap gap-2 pb-4">
            {project.topics.map( (topic, topicIndex) => (
              <p
                key={topicIndex}
                className="text-[0.875rem] bg-light-gray/20 py-0.5 px-1.5 rounded-md"
              >
                {topic}
              </p>
            ))}
          </div>

          <p className="pb-6 leading-relaxed border-b border-light-gray/20">
            {project.modalDescription}
          </p>

          <h4 className="text-[1.25rem] font-[600] pt-3 inline-flex gap-1 items-center">
            <span className="shrink-0">✦</span>
            Destaques
          </h4>

          <div className="flex flex-col gap-0.5 pb-4">
            {project.highlights.map( (highlight, highIndex) => (
              <span
                key={highIndex}
                className="inline-flex gap-2 items-center pl-2 sm:pl-5 text-[0.875rem]"
              >
                <span className="content-[''] block w-[4px] h-[4px] bg-white-font rounded-full shrink-0"/>
                {highlight}
              </span>
            ))}
          </div>
          
          <Link
            href={project.link}
            target="_blank" rel="noopener noreferrer"
            className="
              mt-auto inline-flex items-center justify-center gap-2 mb-2
              font-semibold text-dark-background
              px-4 py-2 rounded-lg w-fit bg-white-font
              duration-300 transition-all 
              hover:opacity-80 hover:gap-3 hover:-translate-y-[1.5px]"
          >
            {project.link.startsWith('https://github') ? 'Acessar repositório' : 'Acessar projeto'}
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}