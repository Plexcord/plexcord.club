import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Download from "./pages/Download";
import Plugins from "./pages/Plugins";
import Faq from "./pages/Faq";
import Custom404 from "./errors/Custom404";
import Footer from "./components/Footer";
import Source from "./pages/Source";
import Cloud from "./pages/Cloud";

function DiscordRedirect() {
  useEffect(() => {
    window.location.href = "https://discord.gg/5backnRhY9";
  }, []);

  return null;
}
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<Download />} />
        <Route path="/plugins" element={<Plugins />} />
        <Route path="/plugins/:plugin" element={<Plugins />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/discord" element={<DiscordRedirect />} />
        <Route path="/source" element={<Source />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="*" element={<Custom404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
