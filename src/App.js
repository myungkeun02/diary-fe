import { Route, Routes } from "react-router-dom";
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import Login from "./pages/Login";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Diary" element={<Diary />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
