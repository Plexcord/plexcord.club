import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Download from "./pages/Download";
import Plugins from "./pages/Plugins";
import Faq from "./pages/Faq";
import Custom404 from "./errors/Custom404";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<Download />} />
        <Route path="/plugins" element={<Plugins />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/discord" element={() => {
            window.location.href = "https://discord.gg/5backnRhY9";
            return null;
          }}
        />
        <Route path="*" element={<Custom404 />} />
      </Routes>
    </Router>
  );
}

export default App;
