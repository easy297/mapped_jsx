import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signUp/SignUp";
import Front from "./pages/welcome/Front";
import Index from "./pages/profile/Index";
import Login from "./components/login/Login";
import City from "./pages/city/City";
import PlanetThree from "./pages/planets/PlanetThree";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/index" element={ <Index /> } />
        <Route path="/city" element={<City />} />
        <Route path="/planets" element={<PlanetThree />} />
        
      </Routes>
    </Router>
  );
};

export default App;
