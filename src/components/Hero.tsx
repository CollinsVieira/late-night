export function Hero() {
  return (
    <>
      <section className="relative overflow-hidden bg-black py-4 px-6 flex flex-col justify-center items-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-[-10%] left-[20%] w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-10%] right-[20%] w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 w-full max-w-4xl text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Encuentra{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#D4AF37] to-[#F3E5AB]">
                el personaje que buscas
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Busca el personaje que buscas en un solo lugar.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
