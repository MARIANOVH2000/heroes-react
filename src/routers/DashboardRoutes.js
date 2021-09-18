import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { DcScreen } from "../dc/DcScreen";
import { HeroScreen } from "../heroes/HeroScreen";
import { MarvelScren } from "../marvel/MarvelScren";
import { SearchScreen } from "../search/SearchScreen";
import { Navbar } from "../ui/Navbar";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <Switch>
          <Route exact path="/marvel" component={MarvelScren} />
          <Route exact path="/hero/:heroeId" component={HeroScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/search" component={SearchScreen} />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};
