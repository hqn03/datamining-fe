import { Routes, Route, Router, Link } from "react-router-dom";
import "./App.css";
import Pattern1 from "./pages/Pattern1";

const links = [
  { label: "Pattern1", to: "/pattern1" },
  { label: "Pattern2", to: "/pattern2" },
  { label: "Pattern3", to: "/pattern3" },
  { label: "Pattern4", to: "/pattern4" },
  { label: "Pattern5", to: "/pattern5" },
];

export default function App() {
  return (
    <div className="grid grid-cols-6 h-screen">
      <div className="col-span-1 bg-gray-800 text-white">
        <div className="p-4 text-4xl text-center font-semibold">NO HOPE</div>
        <div className="flex flex-col">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="px-8 py-4 text-xl hover:bg-gray-100 hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="col-span-5">
        <Routes>
          <Route path="/dashboard" element={<h1>Dash board</h1>} />
          <Route path="/pattern1" element={<Pattern1 />} />
          <Route path="/pattern2" element={<h1>pattern2</h1>} />
          <Route path="/pattern3" element={<h1>pattern3</h1>} />
          <Route path="/pattern4" element={<h1>pattern4</h1>} />
          <Route path="*" element={<h1>Error: 404 Not Found</h1>} />
        </Routes>
      </div>
    </div>
  );
}
