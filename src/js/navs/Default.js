import React from "react";
import { NavLink } from 'react-router-dom';

const Default = () => (
  <div>
    <h1>
      <NavLink to="/" activeClassName="active">
        <div class="logo"></div>
        Friends of the Windsor and Royal Borough Museum
      </NavLink>
    </h1>
    <div>
      <ul>
        <li>
          <NavLink
            to="/about-us"
            activeClassName="active"
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/join-us"
            activeClassName="active"
          >
            Join Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/the-museum"
            activeClassName="active"
          >
            The Museum
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/newsletters"
            activeClassName="active"
          >
            Newsletters
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/events"
            activeClassName="active"
          >
            Events
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact-us"
            activeClassName="active"
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
);

export default Default;