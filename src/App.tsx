import { useEffect, useState } from "react";
import Category from "./components/Category";
import { Chef } from "./components/Chef";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Order from "./components/Order";
import Special from "./components/Special";
import Up from "./assets/img/up.png";

function App() {
  const [displayScrollTop, setDisplayScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setDisplayScrollTop(true);
      } else {
        setDisplayScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <Header />
      <Intro />
      <Special />
      <Chef />
      <Category />
      <Order />
      <Footer />
      {displayScrollTop && (
        <div
          id="scrollTop"
          className="z-50 h-12 w-12 p-2 fixed bottom-20 right-10 hover:bg-gray-100 bg-white rounded-full border-2 border-black shadow-lg cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={Up} loading="lazy" alt="Scroll to top" />
        </div>
      )}
    </div>
  );
}

export default App;
