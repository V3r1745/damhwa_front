import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import ChatBot from "./bot/ChatBot";
import Bot from "./bot/Bot";

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
          <Link to="/intro">소개</Link>
          <Link to="/pro">상점</Link>
          <Link to="/">
            <img src="/src/img/logo/logo.svg" alt="logo" />
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
        <ChatBot headerThis={this} />
        <Bot
          bot={this.state.bot}
          single={this.state.single}
          headerThis={this}
        />
      </>
    );
  }
}

export default Header;
