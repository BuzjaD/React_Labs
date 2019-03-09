import React from "react";
import MasterLayout from "../components/MasterLayout";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import StudentsPage from "../features/students-page";
import CompaniesPage from "../features/companies-page";

export default () => {
  return (
    <Router>
      <Route
        path="/"
        render={() => (
          <MasterLayout>
            <Switch>
              <Route path="/students" component={StudentsPage} />
              <Route path="/companies" component={CompaniesPage} />
              <Route path="/events" component={() => <div>events</div>} />
              <Route path="/contacts" component={() => <div>contacts</div>} />
              <Redirect exact from="/" to="/students" />
            </Switch>
          </MasterLayout>
        )}
      />
    </Router>
  );
};
