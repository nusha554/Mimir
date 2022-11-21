import "./App.css";
import { BrowserRouter as Router, Routes, Route as Path} from "react-router-dom";
import Home from "./Pages/HomePage";
import SignInPage from "./Pages/HomePage/signin";

function App() {
  return (
    <Router>
      <Routes>
        <Path path='/' element={<Home />} exact />
        <Path path='/signin' element={<SignInPage />} exact />
      </Routes>
    </Router>
  );
}

export default App;
