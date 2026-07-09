import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import HealthySnacks from "./Pages/HealthySnacks";
import HomemadePodi from "./Pages/HomemadePodi";
import ComboPacks from "./Pages/ComboPacks";
import ReturnGifts from "./Pages/ReturnGifts";
import WhatsAppFloat from "./components/WhatsAppFloat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/healthy-snacks" element={<HealthySnacks />} />
        <Route path="/homemade-podi" element={<HomemadePodi />} />
        <Route path="/combo-packs" element={<ComboPacks />} />
        <Route path="/return-gifts" element={<ReturnGifts />} />
      </Routes>
      <WhatsAppFloat />
    </BrowserRouter>
  );
}

export default App;