import { Header } from "./components/Header.tsx";
import { Footer } from "./components/Footer.tsx";
import { Pagination } from "./components/Pagination.tsx";
import { SearchForm } from "./components/SearchForm.tsx";
import { Hero } from "./components/Hero.tsx";
import { CardList } from "./components/CardList.tsx";
import { useFilters } from "./hooks/useFilters.tsx";

function App() {
  const {
    loading,
    data,
    currentPage,
    totalPages,
    handlePageChange,
    handleSearch,
    handleTextFilter,
  } = useFilters();

  return (
    <>
      <section className="relative overflow-hidden bg-black py-24 px-6 min-h-dvh flex flex-col justify-center items-center">
        <Header />
        <Hero />
        <SearchForm onSearch={handleSearch} onTextFilter={handleTextFilter} />
        <CardList data={data} loading={loading} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        <Footer />
      </section>
    </>
  );
}

export default App;
