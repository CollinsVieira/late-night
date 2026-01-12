import { useFilters } from "../hooks/useFilters";
import { CardList } from "../components/CardList";
import { Hero } from "../components/Hero";
import { Pagination } from "../components/Pagination";
import { SearchForm } from "../components/SearchForm";

export function Search() {
  const {
    data,
    loading,
    currentPage,
    totalPages,
    handlePageChange,
    handleSearch,
    handleTextFilter,
    textToFilter,
  } = useFilters();
  return (
    <>
      <section className="relative overflow-hidden bg-black py-24 px-6 min-h-dvh flex flex-col justify-center items-center">
        <Hero />
        <SearchForm
          textToFilter={textToFilter}
          onSearch={handleSearch}
          onTextFilter={handleTextFilter}
        />
        <CardList data={data} loading={loading} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
    </>
  );
}
