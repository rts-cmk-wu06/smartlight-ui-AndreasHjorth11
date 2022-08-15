import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Bed from "./Pages/Bed";
import Footer from "./Components/Footer";
import { motion } from "framer-motion"
import LivingRoom from "./Pages/LivingRoom";
import Kitchen from "./Pages/Kitchen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bed-room" element={<Bed />} />
          <Route path="/living-room" element={<LivingRoom />} />
          <Route path="/kitchen" element={<Kitchen />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
