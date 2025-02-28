import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Download from "./pages/Download";
import Plugins from "./pages/Plugins";
import Faq from "./pages/Faq";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download" element={ <Download /> } />
        <Route path="/plugins" element={ <Plugins /> } />
        <Route path="/faq" element={ <Faq /> } />
        <Route path="*" element={ <h1>Not Found</h1> } />
      </Routes>
    </Router>
  );
}

export default App;
