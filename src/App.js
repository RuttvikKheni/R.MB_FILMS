import React from 'react'
import Navbar from './Navbar'
import Home from './Component/Home/Home'
import About from "./Component/About/About"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";


class App extends React.Component {
  render() {
    return <>
      <Router>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/Photography" component="Photography" />
        <Route exact path="/clients" component="Clients" />
        <Route exact path="/contactus" component="Contact" />
        <Redirect path="/" />
      </Router>
    </>
  }
}

export default App;
