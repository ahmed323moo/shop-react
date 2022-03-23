import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo"></CrwnLogo>
        </Link>{" "}
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/sign-in">
            SignIn
          </Link>
        </div>
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Navigation;
