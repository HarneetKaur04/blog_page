import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar"
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Favorite from "./pages/Favorite";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/post' element={<Single/>}/>
          <Route path='/write' element={<Write/>}/>
          <Route path='/favorite' element={<Favorite/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
