import { React } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./app/Header";
import Intro from "./app/Intro";
import Pro from "./app/Pro";
import Bot from "./app/bot/Bot";
import MainPage from "./app/mainPage/Main";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/pro" element={<Pro />} />
        <Route path="/bot" element={<Bot />} />
      </Route>
    </Routes>
  );
};

export default App;
