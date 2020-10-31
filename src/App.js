import React from 'react'
import Navbar from './Navbar'
import Home from './Component/Home/Home'
import About from "./Component/About/About"
import Photography from "./Component/Photography/Photography"
import Grids from "./Component/Photography/Grids"
import Clients from "./Component/Clients/Clients"
import Contact from "./Component/Contact/Contact"
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/about',
    component: About,
    exact: true,
  },
  {
    path: '/Photography/:type',
    component: Grids,
    exact: true,
  },
  {
    path: '/Photography',
    component: Photography,
    exact: true,
  },
  {
    path: '/clients',
    component: Clients,
    exact: true,
  },
  {
    path: '/contactus',
    component: Contact,
    exact: true,
  }
];


class App extends React.Component {
  render() {
    return <>
      <Router>
        <Navbar />
        <Switch>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Switch>
        {/* <Redirect path="/" /> */}
      </Router>
    </>
  }
}

export default App;
