import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Events from "./Events";
import Home from "./Home";
import JoinUs from "./JoinUs";
import Newsletters from "./Newsletters";
import TheMuseum from "./TheMuseum";

const routes = {
  '/': {
    component: Home
  },
  '/about-us': {
    component: AboutUs
  },
  '/join-us': {
    component: JoinUs
  },
  '/the-museum': {
    component: TheMuseum
  },
  '/newsletters': {
    component: Newsletters
  },
  '/events': {
    component: Events
  },
  '/contact-us': {
    component: ContactUs
  }
}

export default routes;