import { Outlet } from "react-router-dom";
import Element from "./MainElement";

const MainPage = () => {
  return <>
    <main className="main-main">
      <Element />
    </main>
    <Outlet />
  </>
}

export default MainPage;