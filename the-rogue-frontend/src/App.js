import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Story from "./pages/Story/Story";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/story" element={<Story/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
