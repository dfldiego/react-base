import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Navbar from "../components/Navbar";

const AppRouter = () => {
  return (
    <Fragment>
      <Router>
        <div>
          <Navbar />
          <div className="container mt-5 mb-5">
            <Switch>
              <Route exact path="/" component={Home} />

              {/* redireccionar al home, si ponemos mal un endpoint */}
              {/* <Redirect to="/" /> */}
            </Switch>
          </div>
        </div>
      </Router>
    </Fragment>
  );
};

export default AppRouter;
