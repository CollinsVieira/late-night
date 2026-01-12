import { useId } from "react";

export function SearchForm({
  onSearch,
  onTextFilter,
  textToFilter,
}: {
  onSearch: (filters: any) => any;
  onTextFilter: (text: any) => any;
  textToFilter: string;
}) {
  const idsearch = useId();
  const idEspecie = useId();
  const idOrigen = useId();
  const idGenero = useId();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as any);
    const filters = {
      search: formData.get(idsearch),
      specie: formData.get(idEspecie),
      origin: formData.get(idOrigen),
      gender: formData.get(idGenero),
    };

    onSearch(filters);
  };

  const handleTextChange = (event: any) => {
    const text = event.target.value;
    onTextFilter(text);
  };
  return (
    <>
      <section className="relative overflow-hidden bg-black flex flex-col justify-center items-center  mb-8">
        <form
          onChange={handleSubmit}
          id="empleos-search-form"
          role="search"
          className="w-full  gap-4"
        >
          <div className="max-w-2xl flex flex-row items-center gap-4 pb-4">
            <div className="relative group flex-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-gray-500 group-focus-within:text-[#D4AF37] transition-colors duration-300"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                  <path d="M21 21l-6 -6" />
                </svg>
              </div>
              <input
                name={idsearch}
                type="text"
                className="block w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-12 text-white placeholder-gray-500 focus:border-[#D4AF37]/50 focus:bg-white/10 focus:ring-1 focus:ring-[#D4AF37]/50 focus:outline-none transition-all duration-300 sm:text-sm md:text-base shadow-lg shadow-black/50"
                placeholder="Buscar"
                defaultValue={textToFilter}
                onChange={handleTextChange}
              />
              <button
                type="reset"
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-white cursor-pointer transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              {
                name: "Especie",
                label: "Especie",
                options: ["Human", "Alien", "Robot", "Humanoid"],
                id: idEspecie,
              },
              {
                name: "Origen",
                label: "Origen",
                options: ["Earth (C-500A)", "Earth (C-137)"],
                id: idOrigen,
              },
              {
                name: "Género",
                label: "Género",
                options: ["Male", "Female", "Genderless", "Unknown"],
                id: idGenero,
              },
            ].map((filter) => (
              <div key={filter.name} className="relative">
                <select
                  name={filter.id}
                  className="appearance-none bg-[#111] border border-white/10 text-gray-300 rounded-lg py-2.5 pl-4 pr-10 hover:border-[#D4AF37]/50 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all cursor-pointer text-sm font-medium"
                >
                  <option value="">{filter.label}</option>
                  {filter.options.map((opt) => (
                    <option
                      key={opt}
                      value={opt.toLowerCase().replace(/\./g, "")}
                    >
                      {opt}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </form>
      </section>
    </>
  );
}
