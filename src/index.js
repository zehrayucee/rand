import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "../src/assets/css/randcss.css"; //paper-kit
import "assets/demo/demo.css?v=1.3.0";
//import "assets/scss/paper-kit.scss?v=1.3.0";

import Index from "views/Index.js";
//layout
import Layouthome from "components/layout/layouthome.js";
import Layoutlogin from "components/layout/layoutlogin.js";
import Layoutpage from "components/layout/layoutpage.js";

// pages
import Randone from "components/Pages/randone.js";
import Customercreate from "components/Pages/customercreate.js";
import Passwordnew from "components/Pages/passwordnew.js";
import Customerhomepage from "components/Pages/customerhomepage.js";



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route
        path="/layouthome"
        render={(props) => <Layouthome {...props} />}
      />
      <Route
        path="/layoutlogin"
        render={(props) => <Layoutlogin {...props}  />}
      />
      <Route
      path="/layoutpage"
      render={(props) => <Layoutpage {...props}  />}
       />
      <Route
        path="/randone"
        render={(props) => <Randone {...props} />}
      />
      <Route
        path="/customercreate"
        render={(props) => <Customercreate {...props} />}
      />
      <Route
        path="/passwordnew"
        render={(props) => <Passwordnew {...props} />}
      />
      <Route
      path="/customerhomepage"
      render={(props) => <Customerhomepage {...props} />}
       />
     
     
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
