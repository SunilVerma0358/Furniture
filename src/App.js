import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from "./views/HomePage";
import AboutPage from "./views/AboutPage";
import ShopPage from "./views/ShopPage";
import ContactPage from "./views/ContactPage";
import Preloader from "./components/Preloader";
import { useEffect, useState } from "react";

function App() {
  const [Loader, setLorder] = useState(false);
  useEffect(() => {
    setLorder(true);
    setTimeout(() => {
      setLorder(false);
    }, 3000);
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <>
      <div>
        {" "}
        {Loader ? (
          <div>
            {" "}
            <Preloader />{" "}
          </div>
        ) : (
          <div>
            {" "}
            <BrowserRouter>
              {" "}
              <Routes>
                <Route path="/" element={<HomePage />} />{" "}
                <Route path="/About" element={<AboutPage />} />{" "}
                <Route path="/Shop" element={<ShopPage />} />{" "}
                <Route path="/Contact" element={<ContactPage />} />{" "}
              </Routes>{" "}
            </BrowserRouter>{" "}
          </div>
        )}{" "}
      </div>{" "}
    </>
  );
}
export default App;
