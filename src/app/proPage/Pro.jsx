import { React } from 'react';
import { Outlet, Link } from "react-router-dom";

const Pro = (props) => {
  return <>
    <main className="pro-main">
      <aside>
        <p>카테고리</p>
        <Link to="/pro/kitchen">주방용품</Link>
        <Link to="/pro/living">생활용품</Link>
        <Link to="/pro/bathroom">욕실용품</Link>
        <Link to="/pro/storage">수납/정리용품</Link>
        <Link to="/pro/clean">청소용품</Link>
        <Link to="/pro/washing">세탁용품</Link>
      </aside>
      <article>
        <section>
          <Outlet />
        </section>
      </article>
    </main>
    {props.children}
  </>;
};

export default Pro;
