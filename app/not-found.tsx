import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="
        relative min-h-screen flex items-center justify-center 
        text-black-font overflow-hidden bg-not-found-background
      "
    >
      <div
        className="text-center px-6 max-w-lg"
        data-aos="fade-up"
        data-aos-once="true"
      >
        <p className="md:text-[1.125rem] tracking-wide">Ops!</p>

        <h1 className="text-[4rem] lg:text-[6rem] font-bold tracking-wider leading-none">
          4<span className="text-accent">0</span>4
        </h1>

        <p className="md:text-[1.125rem] flex items-center justify-center gap-2 font-medium tracking-wide">
          <span className="block w-8 h-[2px] bg-accent"></span>
          Página não encontrada
          <span className="block w-8 h-[2px] bg-accent"></span>
        </p>

        <p className="pt-6 leading-relaxed">
          A página que você está procurando não existe, foi movida ou o
          endereço foi digitado incorretamente.
        </p>

        <div className="flex flex-wrap justify-center gap-4 py-8">
          <Link
            href="/"
            className="
              inline-flex gap-2 items-center py-3 px-6 
              bg-accent 
              font-bold text-white-font 
              border-2 border-accent 
              rounded-md transition-all duration-300
              hover:gap-3 hover:bg-white-background hover:text-accent hover:-translate-y-[1.5px]"
          >
            Voltar para o início
            <span className="font-bolder">→</span>
          </Link>

          <Link
            href="/#contact-sec"
            className="
              py-3 px-6 
              text-dark-background font-bold 
              border-2 border-dark-background  
              transition-all rounded-md duration-300
              hover:bg-dark-background hover:text-white-font hover:-translate-y-[1.5px]"
          >
            Falar comigo
          </Link>
        </div>
      </div>
    </main>
  );
}