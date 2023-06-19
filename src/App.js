import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import OurService from "./components/OurService";
import Blog from "./components/Blog";

function App() {
  return (
    <div className="App"  >
      <Navbar />
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/AboutUS" element={<AboutUs />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/OurService" element={<OurService/>} />
      </Routes>
    </div>
  );
}

export default App;
