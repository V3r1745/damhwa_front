import React from "react";
import { Outlet, Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <Link to="/소개">소개</Link>
          <Link to="/상점">상점</Link>
          <Link to="/">
            <img src="" alt="" />
          </Link>
          <Link to="/행사">행사</Link>
          <Link to="/FAQ">FAQ</Link>
        </header>
        <Outlet />
      </>
    );
  }
}

export default Header;
