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

// create an application that has a public route and protected route
// u can use an object and use it to check on whether u logggedin or not, so that ony loggedin users are the only one who can access protected routes
