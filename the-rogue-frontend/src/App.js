import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import News from "./pages/News/News";
import Team from "./pages/Team/Team";
import SimpleMap from "./components/GoogleMap/SimpleMap";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/services" element={<Services/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/simple" element={<SimpleMap />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
