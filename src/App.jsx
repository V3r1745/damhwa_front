import { React } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./app/Header";
import Intro from "./app/Intro";
import Pro from "./app/Pro";
import Main from "./app/Main";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<Main />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/pro" element={<Pro />} />
      </Route>
    </Routes>
  );
};

export default App;
