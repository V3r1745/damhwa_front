import { React } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./app/Header";
import Pro from "./app/Pro";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<Pro />} />
      </Route>
    </Routes>
  );
};

export default App;
