import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Bed from "./Pages/Bed";
import Footer from "./Components/Footer";
import { motion } from "framer-motion"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bedroom" element={<Bed />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
