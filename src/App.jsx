import { Outlet } from "react-router-dom";
import HeaderAs from "./Component/HeaderAs/HeaderAs";
import SideBar from "./Component/SideBar/SideBar";

function App() {
  return (
    <>
      <HeaderAs />
      <SideBar />
      <Outlet />
    </>
  );
}

// Trong tệp Routes.js hoặc App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SelectionForm from './SelectionForm';
import InfoForm from './InfoForm';
import CutForm from './CutForm';
import SummaryPage from './SummaryPage';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SelectionForm} />
        <Route path="/info" component={InfoForm} />
        <Route path="/cut" component={CutForm} />
        <Route path="/summary" component={SummaryPage} />
      </Switch>
    </Router>
  );
}

export default Routes;
