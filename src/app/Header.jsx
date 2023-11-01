import React from "react";
import { Outlet } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <>
        <Outlet />
      </>
    );
  }
}

export default Header;
