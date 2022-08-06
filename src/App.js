import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Sidebar from "./page/Sidebar";
import MovieInfo from "./page/MovieInfo"
import './App.css'
import MovieFeed from "./page/MovieFeed";
import Main from "./page/Main";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:input" element={<Home />} />
          <Route path="/:input/:imdbID" element={<MovieInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
