import { Header } from "./components/Header.tsx";
import { Footer } from "./components/Footer.tsx";
import { Search } from "./pages/search.tsx";
import { Home } from "./pages/home.tsx";
import { useRouter } from "./hooks/useRouter";

function App() {
  const { currentPath } = useRouter();

  let page = null;

  if (currentPath === "/") {
    page = <Home />;
  } else if (currentPath === "/search") {
    page = <Search />;
  }

  return (
    <>
      <section className="relative overflow-hidden bg-black py-24 px-6 min-h-dvh flex flex-col justify-center items-center">
        <Header />
        {page}
        <Footer />
      </section>
    </>
  );
}

export default App;
