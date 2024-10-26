import { Routes, Route, Router, Link } from "react-router-dom";
import "./App.css";
import Chart from "./Chart";

export default function App() {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="logo">NO HOPE</div>
        <Link to={"pattern1"} className="nav-link">
          pattern1
        </Link>
        <Link to={"pattern2"} className="nav-link">
          pattern2
        </Link>
        <Link to={"pattern3"} className="nav-link">
          pattern3
        </Link>
        <Link to={"pattern4"} className="nav-link">
          pattern4
        </Link>
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Chart />} />
          <Route path="/pattern1" element={<h1>pattern1</h1>} />
          <Route path="/pattern2" element={<h1>pattern2</h1>} />
          <Route path="/pattern3" element={<h1>pattern3</h1>} />
          <Route path="/pattern4" element={<h1>pattern4</h1>} />
          <Route path="*" element={<h1>Error: 404 Not Found</h1>} />
        </Routes>
      </div>
    </div>
  );
}
