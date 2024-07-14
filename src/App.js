// src/App.js

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import All from "./components/All";
import Fullstack from "./components/FullStack";
import Datascience from "./components/DataScience";
import Career from "./components/Career";
import CyberSecurity from "./components/CyberSecurity";
import "./App.css";
import data from "./data";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<All data={data} />} />
          <Route path="/fullstack" element={<Fullstack data={data} />} />
          <Route path="/datascience" element={<Datascience data={data} />} />
          <Route path="/cybersecurity" element={<CyberSecurity data={data} />} />
          <Route path="/career" element={<Career data={data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
