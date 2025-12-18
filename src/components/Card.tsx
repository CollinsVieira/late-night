export function Card({ data }: { data: any }) {
  return (
    <article className="group relative w-full max-w-sm rounded-2xl bg-[#0a0a0a] border border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.15)]">
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent z-10 opacity-60" />

        <img
          src={data.image}
          alt={data.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>

      <div className="relative p-6 -mt-12 z-20">
        <div className="bg-[#111] rounded-xl p-5 border border-white/5 shadow-xl shadow-black/50">
          <h1 className="text-center text-xl font-bold text-white mb-3 tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300">
            {data.name}
          </h1>
        </div>
      </div>
    </article>
  );
}
