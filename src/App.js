import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import User from "./containers/Users";

import AsyncComponent from "./hoc/AsyncComponent/AsyncComponent";

const pizza = AsyncComponent(() => import("./containers/Pizza"));

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">Users</Link> |<Link to="/pizza">Pizza</Link>
        </div>
        <div>
          <Route path="/" exact component={User} />
          <Route path="/pizza" component={pizza} />
        </div>
      </div>
    );
  }
}

export default App;
