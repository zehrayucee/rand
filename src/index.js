import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Router } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "../src/assets/css/randcss.css"; //paper-kit
import "assets/demo/demo.css?v=1.3.0";

import Index from "views/Index.js";
//layout
import Layouthome from "components/layout/layouthome.js";
import Layoutpage from "components/layout/layoutpage.js";

// pages
import Randone from "components/Pages/randone.js";
import Customercreate from "components/Pages/Customercreate.js";
import Passwordnew from "components/Pages/Passwordnew.js";
import Customerhomepage from "components/Pages/Customerhomepage.js";
import Customerid from "components/Pages/Customerid.js";
import Customerpassword from "components/Pages/Customerpassword.js";
import Customercontact from "components/Pages/Customercontact.js";
import Customerdate from "components/Pages/customerdate.js";
import Customerlogin from "components/Pages/Customerlogin.js";
import Deneme from "components/Pages/Deneme.js";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route
        path="/layouthome"
        render={(props) => <Layouthome {...props} />}
      />
      <Route
        path="/Customerlogin"
        render={(props) => <Customerlogin {...props} />}
      />
      <Route
        path="/layoutpage"
        render={(props) => <Layoutpage {...props} />}
      />
      <Route
        path="/randone"
        render={(props) => <Randone {...props} />}
      />
      <Route path='companystaff/:company_id' component={Randone} />

      <Route
        path="/Customercreate"
        render={(props) => <Customercreate {...props} />}
      />
      <Route
        path="/Passwordnew"
        render={(props) => <Passwordnew {...props} />}
      />
      <Route
        path="/Customerhomepage"
        render={(props) => <Customerhomepage {...props} />}
      />
      <Route
        path="/Customerid"
        render={(props) => <Customerid {...props} />}
      />
      <Route
        path="/Customerpassword"
        render={(props) => <Customerpassword {...props} />}
      />
      <Route
        path="/Customercontact"
        render={(props) => <Customercontact {...props} />}
      />
      <Route
        path="/customerdate"
        render={(props) => <Customerdate {...props} />}
      />
      <Route
        path="/Deneme"
        render={(props) => <Deneme {...props} />}
      />


      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
