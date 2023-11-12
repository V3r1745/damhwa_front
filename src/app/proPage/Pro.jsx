import { React, useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";

const Pro = (props) => {
  const location = useLocation();
  const splitUrl = location.pathname.split("/");
  const Index = parseInt(splitUrl[splitUrl.length - 1]);
  const navigate = useNavigate();
  let tempIndex = 0;
  const prevPage = () => {
    if (Index > 1) {
      tempIndex = Index - 1;
      navigate(location.pathname.replace(/\/\d$/, `/${tempIndex}`));
    }
  };
  const nextPage = () => {
    if (Index < 3) {
      tempIndex = Index + 1;
      navigate(location.pathname.replace(/\/\d$/, `/${tempIndex}`));
    }
  };
  return (
    <>
      <main className="pro-main">
        <aside>
          <div className="pro-category">
            <i className="xi-list" />
            <p>카테고리</p>
          </div>
          <div className="pro-category-box">
            <Link
              style={{
                color: /kitchen/.test(location.pathname) ? "#9CB2FF" : "#fff",
              }}
              to="/pro/kitchen/1"
            >
              주방용품
            </Link>
            <Link
              style={{
                color: /living/.test(location.pathname) ? "#9CB2FF" : "#fff",
              }}
              to="/pro/living/1"
            >
              생활용품
            </Link>
            <Link
              style={{
                color: /bathroom/.test(location.pathname) ? "#9CB2FF" : "#fff",
              }}
              to="/pro/bathroom/1"
            >
              욕실용품
            </Link>
            <Link
              style={{
                color: /storage/.test(location.pathname) ? "#9CB2FF" : "#fff",
              }}
              to="/pro/storage/1"
            >
              수납용품
            </Link>
            <Link
              style={{
                color: /clean/.test(location.pathname) ? "#9CB2FF" : "#fff",
              }}
              to="/pro/camping/1"
            >
              캠핑용품
            </Link>
          </div>
        </aside>
        <article>
          <Outlet context={{ location: location.pathname }} />
          <div
            className="page-box"
            style={{
              display:
                "/pro" == location.pathname ||
                  /\/pro\/[a-z]+\/[0-9]+\/[0-9]+/.test(location.pathname)
                  ? "none"
                  : "flex",
            }}
          >
            <i
              id="left_btn"
              onClick={prevPage}
              className="fa-solid fa-chevron-left"
            ></i>
            <Link
              style={{ color: Index === 1 ? "#aaa" : "#333" }}
              to={`/pro/${splitUrl[2]}/1`}
            >
              1
            </Link>
            <Link
              style={{ color: Index === 2 ? "#aaa" : "#333" }}
              to={`/pro/${splitUrl[2]}/2`}
            >
              2
            </Link>
            <Link
              style={{ color: Index === 3 ? "#aaa" : "#333" }}
              to={`/pro/${splitUrl[2]}/3`}
            >
              3
            </Link>
            <i
              id="right_btn"
              onClick={nextPage}
              className="fa-solid fa-chevron-right"
            ></i>
          </div>
        </article>
      </main>
      {props.children}
    </>
  );
};

export default Pro;
