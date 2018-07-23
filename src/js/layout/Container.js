import React from "react";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Navigation from "./Navigation";

import routes from "../routes";
import pageRoutes from "../pages/routes";

export default class Layout extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <Router>
          <section id="Layout-Container">
            <Navigation />
            <div>
              {
                routes.map((route, index) => {
                  const pageRoute = pageRoutes[route.path];
                  const pageRouteIsFunction = typeof pageRoute === 'function';

                  return (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      component={pageRouteIsFunction ? pageRoute : undefined}
                      render={pageRouteIsFunction ? undefined : (props) => (
                        <pageRoute.component
                          {...props}
                          {...pageRoute.props}
                        />
                      )}
                    />
                  )
                })
              }
            </div>
          </section>
        </Router>
      </React.StrictMode>
    );
  }
}