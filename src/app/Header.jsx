import React from "react";
import { Outlet, Link } from "react-router-dom";
import ChatBot from "./bot/ChatBot";

class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <Link to="/intro">소개</Link>
          <Link to="/pro">상점</Link>
          <Link to="/">
            <img src="./src/img/logo/logo.svg" alt="logo" />
          </Link>
          <Link to="/event">행사</Link>
          <Link to="/faq">FAQ</Link>
        </header>
        <div className="login-tag">
          <Link to="/login" className="link-none">
            Login
          </Link>
        </div>
        <Outlet />
        <ChatBot />
      </>
    );
  }
}

export default Header;
