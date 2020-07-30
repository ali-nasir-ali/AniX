import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Anime from "./pages/Anime";
import TopAnimes from "./pages/TopAnimes";
import RecentAnimes from "./pages/RecentAnimes";
import SearchResults from "./pages/SearchResults";

// components
import Navbar from "./components/Navbar";
import BottomTab from "./components/BottomTab";

export default () => (
  <Router>
    <Navbar />
    <BottomTab />
    <Switch>
      <Route path="/search/:term" component={SearchResults} />
      <Route path="/:collection/:slug" component={Anime} />
      <Route path="/topanimes" component={TopAnimes} />
      <Route path="/recentanimes" component={RecentAnimes} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);
