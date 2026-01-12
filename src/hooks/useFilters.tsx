import { useEffect, useState } from "react";
import { useRouter } from "./useRouter";

export function useFilters() {
  const { navigateTo } = useRouter();
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [textToFilter, setTextToFilter] = useState(() => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("name") || "";
  });
  const [currentPage, setCurrentPage] = useState(() => {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get("page") || "1");
  });
  const [filters, setFilters] = useState(() => {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      specie: urlParams.get("species") || "",
      origin: urlParams.get("origin") || "",
      gender: urlParams.get("gender") || "",
    };
  });

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        const params = new URLSearchParams();
        if (textToFilter) params.append("name", textToFilter);
        if (filters.specie) params.append("species", filters.specie);
        if (filters.origin) params.append("origin", filters.origin);
        if (filters.gender) params.append("gender", filters.gender);
        params.append("page", currentPage.toString());
        const queryParams = params.toString();
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?${queryParams}`
        );
        const data = await response.json();
        setData(data.results);
        data.info.pages ? setTotalPages(data.info.pages) : setTotalPages(1);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [filters, textToFilter, currentPage]);

  //Efecto para actualizar la URL
  useEffect(() => {
    const params = new URLSearchParams();
    if (textToFilter) params.append("name", textToFilter);
    if (filters.specie) params.append("species", filters.specie);
    if (filters.origin) params.append("origin", filters.origin);
    if (filters.gender) params.append("gender", filters.gender);

    if (currentPage > 1) {
      params.append("page", currentPage.toString());
    }
    const newURL = params.toString
      ? `${window.location.pathname}?${params.toString()}`
      : window.location.pathname;
    navigateTo(newURL);
  }, [filters, currentPage, textToFilter, navigateTo]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (filters: any) => {
    setCurrentPage(1);
    setFilters(filters);
  };
  const handleTextFilter = (newTextToFilter: string) => {
    setTextToFilter(newTextToFilter);
    setCurrentPage(1);
  };

  return {
    data,
    loading,
    filters,
    textToFilter,
    currentPage,
    totalPages,
    handlePageChange,
    handleSearch,
    handleTextFilter,
  };
}
