import { React } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "./app/Index";
import Header from "./app/Header";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route Index element={<Index />} />
      </Route>
    </Routes>
  );
};

export default App;
