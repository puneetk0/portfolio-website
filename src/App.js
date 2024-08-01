import "./App.css";
import Home from "./routes/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./routes/navbar/navbar";
import Portfolio from "./routes/portfolio/portfolio";
import ScrollToTop from "./components/scroll-top/scroll-top";
import About from "./routes/about/about";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/work" element={<Portfolio />} />
          <Route path="/about" element={<About/>} />
        </Route>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
