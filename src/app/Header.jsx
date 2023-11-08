import React from "react";
import { Outlet, Link } from "react-router-dom";
import ChatBot from "./bot/ChatBot";
import Bot from "./bot/Bot";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bot: false, single: false };
  }
  render() {
    console.log(this.props);
    return (
      <>
        <header>
          <div className="logo-box">
            <Link to="/">
              <img src="/src/img/logo/logo.svg" alt="logo" />
            </Link>
          </div>
          <div className="banner-box">
            <Link to="/intro">소개</Link>
            <i className="xi-recording" />
            <Link to="/pro">상점</Link>
            <i className="xi-recording" />
            <Link to="/event">행사</Link>
            <i className="xi-recording" />
            <Link to="/faq">FAQ</Link>
            <i className="xi-recording" />
            <Link to="/login">로그인</Link>
            <Link to="/cart">
              <i className="xi-cart" />
            </Link>
          </div>
        </header>
        <Outlet />
        <ChatBot headerThis={this} />
        <Bot
          bot={this.state.bot}
          single={this.state.single}
          headerThis={this}
        />
        <NotificationContainer />
      </>
    );
  }
}

export default Header;
