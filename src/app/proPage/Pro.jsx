import { React } from 'react';
import { Outlet, Link } from "react-router-dom";

const Pro = () => {
  return <>
    <main className="pro-main">
      <aside>
        <p>카테고리</p>
        <Link to="/pro/kitchen/1">주방용품</Link>
        <Link to="/pro/living/1">생활용품</Link>
        <Link to="/pro/bathroom/1">욕실용품</Link>
        <Link to="/pro/storage/1">수납/정리용품</Link>
        <Link to="/pro/clean/1">청소용품</Link>
        <Link to="/pro/washing/1">세탁용품</Link>
      </aside>
      <article>
        <section>
          <Outlet />
        </section>
      </article>
    </main>
  </>;
};

export default Pro;
