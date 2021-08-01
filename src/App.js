import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListNewsComp from "./components/ListNewsComp";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import createNewsComp from "./components/CreateNewsComp";
import ViewNewsComp from "./components/ViewNewsComp";
import LoginComponent from './components/LoginComponent';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import LogoutComponent from "./components/LogoutComponent";
import ProfileComponent from "./components/ProfileComponent";

function App() {


  return (
    <div>
      <Router>
        <div className="container">
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path="/" exact component={ListNewsComp}></Route>
              <Route path="/add-news/:id" component={createNewsComp}></Route>
              <Route path="/view-news/:id" component={ViewNewsComp}></Route>
              <Route path="/" exact component={LoginComponent} />
              <Route path="/login" exact component={LoginComponent} />
              <AuthenticatedRoute path="/news" exact component={ListNewsComp} />
              <Route path="/logout" exact component={LogoutComponent} />
              <Route path="/profile" exact component={ProfileComponent} />
            </Switch>
          </div>
          <FooterComponent />
        </div>
      </Router>
    </div >
  );
}

export default App;
