import React from "react";
import { Route, Switch } from "react-router-dom";

import AppliedRoute from "./appliedRoute";

import NotFound from "../webpages/notFound";

import Home from "../webpages/home";
import Login from "../webpages/login";
import SignUp from "../webpages/signUp";
import Profile from "../webpages/profile";
import ProfileEdit from "../webpages/profileEdit";
import Projects from "../webpages/projects";
import SearchPage from "../webpages/searchPage";

export default function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute path="/" exact component={Home} appProps={appProps} />
      <AppliedRoute path="/login" exact component={Login} appProps={appProps} />
      <AppliedRoute path="/signup" exact component={SignUp} appProps={appProps} />
      <AppliedRoute path="/profile" exact component={Profile} appProps={appProps} />
      <AppliedRoute path="/profile/edit" exact component={ProfileEdit} appProps={appProps} />
      <AppliedRoute path="/projects" exact component={Projects} appProps={appProps} />
      <AppliedRoute path="/browse" exact component = {SearchPage} appProps={appProps} />
      <Route component={NotFound} />
    </Switch>
  );
}