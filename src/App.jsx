import { React } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./app/Header";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
      </Route>
    </Routes>
  );
};

export default App;
