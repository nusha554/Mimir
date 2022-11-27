import "./App.css";
import { BrowserRouter as Router, Routes, Route as Path} from "react-router-dom";
import Home from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Path path='/' element={<Home />} exact />
        <Path path='/login' element={<LoginPage />} exact />
      </Routes>
    </Router>
  );
}

export default App;
