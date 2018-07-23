import React from "react";
import { Route } from 'react-router-dom';
import routes from "../routes";
import navRoutes from "../navs/routes";

export default class extends React.Component {
  render() {
    return (
      <nav id="Layout-Sidebar">
        {
          routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={navRoutes[route.path]()}
            />
          ))
        }
        <div id="External-Links">
          <p>
            Registered charity
            {' '}
            <a href="http://beta.charitycommission.gov.uk/charity-details/?subid=0&amp;regid=1115540">
              1115540
            </a>.
            {' '}
            Find us on
            {' '}
            <a href="https://www.facebook.com/Friends-of-the-Windsor-Royal-Borough-Museum-288011475106/">
              Facebook
            </a>
            {' '}
            and
            {' '}
            <a href="https://twitter.com/FriendsofWRBM">
              Twitter
            </a>.
          </p>
        </div>
      </nav>
    );
  }
}