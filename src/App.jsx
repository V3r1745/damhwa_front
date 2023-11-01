import { React } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./app/Header";
import Index from "./app/Index";
import Intro from "./app/Intro";
import Pro from "./app/Pro";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<Index />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/pro" element={<Pro />} />
      </Route>
    </Routes>
  );
};

export default App;
