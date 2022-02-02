import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
