import { React } from 'react';
import ProElement from './ProElement';
import { Outlet } from 'react-router-dom';

const Pro = () => {
  const Element = (ProElement());
  return <>
    <main className="pro-main">
      <aside>
        <p>카테고리</p>
        {Element[0]}
      </aside>
      <section>
        <article>
          {Element[1]}
        </article>
      </section>
      <div className="pro-list-wrap">
        <i id="left_btn" className="fa-solid fa-chevron-left" />
        {Element[2]}
        <i id="right_btn" className="fa-solid fa-chevron-right" />
      </div>
    </main>
    <Outlet />
  </>;
};

export default Pro;
