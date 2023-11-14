import MainProElement from "./MainProM";
import MainEventElement from "./MainEventM";
import { Outlet } from "react-router-dom";

const MainPageM = () => {
  const proElement = MainProElement();
  const eventElement = MainEventElement();
  return <>
    <main className="main-main-M">
      <article>
        <section className="top-section">
          {proElement}
        </section>
        <section className="bot-section">
          {eventElement}
        </section>
      </article>
    </main>
    <Outlet />
  </>
}

export default MainPageM;