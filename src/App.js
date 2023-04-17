import { Route, Routes } from "react-router-dom";
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Blog from "./pages/Blog";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Diary" element={<Diary />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default App;
