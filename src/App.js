import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase"
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads
    
    auth.onAuthStateChanged( authUser =>{
      console.log('the user is >>> ', authUser);
      if (authUser) {
        //the user just logged in /the user was logged in
        dispatch({
          type: 'SET_USER',
          user:authUser
        })

      }else{
        //the user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })

  },[])
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/Login">
            <Login/>
          </Route>
          <Route path="/Checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/Payment">
            <Header />
            <Payment />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
