import "./App.css";
import Home from "./routes/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./routes/navbar/navbar";
import Portfolio from "./routes/portfolio/portfolio";
import ScrollToTop from "./components/scroll-top/scroll-top";
import UiDesign from "./components/scroll-top/uidesign/ui-design";
import WebDev from "./components/web-dev/web-dev";
import Photography from "./components/photography-projects/photography";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/work" element={<Portfolio />} />
          <Route path="/work/uidesign" element={<UiDesign />} />
          <Route path="/work/web-development" element={<WebDev />} />
          <Route path="/work/photography" element={<Photography />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
