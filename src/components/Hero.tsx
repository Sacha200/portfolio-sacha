"use client";

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-20 sm:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="pl-14 ">
        <p className="text-sm text-zinc-400 mb-2 whitespace-nowrap overflow-hidden text-ellipsis">Bonjour à tous. Je suis</p>
        <h1 className="text-[44px] leading-[1.1] sm:text-[64px] lg:text-[72px] font-retina tracking-tight">
          Sacha Nahmani
        </h1>
        <p className="mt-3 text-[20px] sm:text-[22px] text-indigo-500 whitespace-nowrap overflow-hidden text-ellipsis">&gt; Développeur Full-Stack</p>

        <div className="mt-10 text-sm text-zinc-400 space-y-1 pr-2">
          <p className="whitespace-nowrap">// trouvez mon profil sur Github:</p>
          <p className="whitespace-nowrap">
            const <span className="text-teal-400">githubLink</span> =
            <span className="ml-2 bg-foreground/5 rounded px-2 py-1 text-pink-300">"https://github.com/Sacha200"</span>
          </p>
        </div>
      </div>

    
    </section>
  );
}


