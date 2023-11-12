import { React } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./app/Header";
import Intro from "./app/Intro";
import Pro from "./app/proPage/Pro";
import ProHome from "./app/proPage/ProHome";
import ProDetail from "./app/proPage/ProDetail";
// import Bot from "./app/bot/Bot";
import MainPage from "./app/mainPage/Main";
import Login from "./app/loginPage/Login";
import EventPage from "./app/eventPage/Event";
import EventAllPage from "./app/eventPage/EventAll";
import ProKitchen from "./app/proPage/proCategory/Kitchen";
import ProLiving from "./app/proPage/proCategory/Living";
import ProBathroom from "./app/proPage/proCategory/Bathroom";
import ProStorage from "./app/proPage/proCategory/Storage";
import ProCamping from "./app/proPage/proCategory/Clean";
import Cart from "./app/cartPage/Cart"
// import ProWashing from "./app/proPage/proCategory/Washing";
import JoinMembership from "./app/loginPage/JoinMembership";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/intro" element={<Intro />}>
          {/* <Route path="/intro/bot" element={<Bot />} /> */}
        </Route>
        <Route path="/pro" element={<Pro />}>
          <Route path="/pro" element={<ProHome />} />
          <Route path="/pro/kitchen/:page" element={<ProKitchen />} />
          <Route path="/pro/living/:page" element={<ProLiving />} />
          <Route path="/pro/bathroom/:page" element={<ProBathroom />} />
          <Route path="/pro/storage/:page" element={<ProStorage />} />
          <Route path="/pro/camping/:page" element={<ProCamping />} />
          <Route path="/pro/:category/:page/:id" element={<ProDetail />} />
        </Route>
        {/* <Route path="/pro/bot" element={<Pro><Bot /></Pro>} /> */}
        <Route path="/proDetail" element={<ProDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/eventAll" element={<EventAllPage />} />
        {/* <Route path="/bot" element={<Bot />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/membership" element={<JoinMembership />} />
      </Route>
    </Routes>
  );
};

export default App;
//<Route path="/bot" element={<Bot />} />
