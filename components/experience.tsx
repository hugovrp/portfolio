import { LinkProps } from "@/app/page";

export default function Experience({ id }: LinkProps) {
  return (
    <div id={id}>
      <section>
        <div>
          <h2>Experiência</h2>
        </div>
        
        <div>
          <h2>Formação</h2>
        </div>
      </section>
      
      <section>
        <h2>Tecnologias</h2>
      </section>
    </div>
  );
}