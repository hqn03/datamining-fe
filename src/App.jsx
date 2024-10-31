import { Routes, Route, Router, Link, NavLink } from "react-router-dom";
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
    <div className="flex">
      <div className="basis-60 bg-gray-900 text-white">
        <div className="sticky top-0 left-0 h-screen">
          <div className="py-4 text-4xl text-center font-semibold">LOGO</div>
          <div className="flex flex-col">
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className="px-2 py-4 rounded-md text-xl hover:bg-slate-700"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1">
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
