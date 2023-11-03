import { React } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./app/Header";
import Intro from "./app/Intro";
import Pro from "./app/proPage/Pro";
import ProDetail from "./app/proPage/ProDetail";
import Bot from "./app/bot/Bot";
import MainPage from "./app/mainPage/Main";
import EventPage from "./app/eventPage/Event";
import EventAllPage from "./app/eventPage/EventAll";
import ProKitchen from "./app/proPage/proCategory/Kitchen";
import ProLiving from "./app/proPage/proCategory/Living";
import ProBathroom from "./app/proPage/proCategory/Bathroom";
import ProStorage from "./app/proPage/proCategory/Storage";
import ProClean from "./app/proPage/proCategory/Clean";
import ProWashing from "./app/proPage/proCategory/Washing";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/intro" element={<Intro />}>
          {/* <Route path="/intro/bot" element={<Bot />} /> */}
        </Route>
        <Route path="/pro" element={<Pro />}>
          <Route path="/pro/kitchen" element={<ProKitchen />} />
          <Route path="/pro/living" element={<ProLiving />} />
          <Route path="/pro/bathroom" element={<ProBathroom />} />
          <Route path="/pro/storage" element={<ProStorage />} />
          <Route path="/pro/clean" element={<ProClean />} />
          <Route path="/pro/washing" element={<ProWashing />} />
        </Route>
        {/* <Route path="/pro/bot" element={<Pro><Bot /></Pro>} /> */}
        <Route path="/proDetail" element={<ProDetail />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/eventAll" element={<EventAllPage />} />
        {/* <Route path="/bot" element={<Bot />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
//<Route path="/bot" element={<Bot />} />
