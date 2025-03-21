import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
