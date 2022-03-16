// Client entry point, imports all client code

// Default Code
import "/imports/startup/client";
import "/imports/startup/both";

// communitypackages:autoform-bootstrap4
import "meteor/aldeed:autoform/static";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css"; // optional, default theme
import "@fortawesome/fontawesome-free/js/all.js"; // optional, is using FA5
import popper from "popper.js";
global.Popper = popper;

// import { AutoFormPlainTheme } from "meteor/communitypackages:autoform-plain/static";
// AutoFormPlainTheme.load();
// AutoForm.setDefaultTemplate("plain");

import { AutoFormThemeBootstrap4 } from "meteor/communitypackages:autoform-bootstrap4/static";
AutoFormThemeBootstrap4.load();
AutoForm.setDefaultTemplate("bootstrap4");
