import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import PageDetails from "pages/PageDetails";
import CheckoutPage from "pages/Checkout";
import BrowsePage from "pages/Browseby"
import Example from "pages/Example";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/properties/:id" component={PageDetails}></Route>
        <Route exact path="/checkout" component={CheckoutPage}></Route>
        <Route exact path="/browse-by" component={BrowsePage}></Route>
        <Route exact path="/example" component={Example}></Route>
      </Router>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
