export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-[#D4AF37]/30 shadow-lg shadow-black/50">
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo Area */}
        <a href="/" className="group flex items-center gap-2">
          <div className="w-10 h-10 border-2 border-[#D4AF37] flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-500">
            <span className="text-[#D4AF37] text-xl font-bold -rotate-45 group-hover:rotate-0 transition-transform duration-500">
              API
            </span>
          </div>
          <span className="text-2xl font-bold tracking-[0.2em] text-white uppercase group-hover:text-[#D4AF37] transition-colors duration-300">
            No lo sé <span className="text-[#D4AF37]">Rick</span>
          </span>
        </a>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center gap-10">
          {[{ name: "Inicio", href: "/" }].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-xs font-semibold text-gray-300 uppercase tracking-widest hover:text-[#D4AF37] transition-colors duration-300 py-2 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA & Actions */}
        <div className="flex items-center gap-6">
          {/* Mobile Menu Icon */}
          <button className="md:hidden text-[#D4AF37] hover:text-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
