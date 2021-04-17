import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link
                className="navbar-brand"
                activeClassName="active"
                exact
                to="/"
              >
                Home
              </Link>
              {/* <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/dc"
              >
                Heroes DC
              </NavLink> */}
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="buscar"
              placeholder="Buscar por:"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Buscar
            </button>
          </form>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
