import { Outlet } from "react-router-dom";
import Element from "./MainElement";
import ElementM from "./mainPageM/MainM";

const MainPage = () => {
  return <>  
    {window.innerWidth < 750 ? <ElementM/> : <main className="main-main"><Element /></main>}
    <Outlet />
  </>
}

export default MainPage;