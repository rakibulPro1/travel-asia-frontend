import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Tourses from "./components/Tourses/Tourses";
import NotFound from "./components/NotFound/NotFound";
import AddTours from "./components/AddTours/AddTours";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./components/Login/Login";
import PlaceBooking from "./components/PlaceBooking/PlaceBooking";
import MyBookings from "./components/MyBookings/MyBookings";
import ManageBookings from "./components/ManageBookings/ManageBookings";

const App = () => {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/tourses">
            <Tourses></Tourses>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/tours/:id">
            <PlaceBooking></PlaceBooking>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/my-bookings">
            <MyBookings></MyBookings>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/add-tours">
            <AddTours></AddTours>
          </Route>
          <Route path="/manage-bookings">
            <ManageBookings></ManageBookings>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
};

export default App;
