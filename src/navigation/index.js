import React from "react";
import MasterLayout from "../components/MasterLayout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StudentsPage from "../features/students-page";

export default () => {
  return (
    <Router>
      <Route
        path="/"
        render={() => (
          <MasterLayout>
            <Switch>
              <Route path="/students" component={StudentsPage} />
              <Route path="/companies" component={() => <div>companies</div>} />
              <Route path="/events" component={() => <div>events</div>} />
              <Route path="/contacts" component={() => <div>contacts</div>} />
            </Switch>
          </MasterLayout>
        )}
      />
    </Router>
  );
};
