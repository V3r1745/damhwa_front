import { React } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./app/Header";
import Index from "./app/Index";
import Intro from "./app/Intro";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<Index />} />
        <Route path="/intro" element={<Intro />} />
      </Route>
    </Routes>
  );
};

export default App;
