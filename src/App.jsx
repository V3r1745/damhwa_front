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
        <Route path="/" element={<MainPage />}>
          <Route path="/bot" element={<Bot />} />
        </Route>
        <Route path="/intro" element={<Intro />}>
          <Route path="/intro/bot" element={<Bot />} />
        </Route>
        <Route path="/pro" element={<Pro />}>
          <Route path="/pro/bot" element={<Bot />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
//<Route path="/bot" element={<Bot />} />
