import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';

function Routing() {
  return (
    <>
          <Router>
              <Routes>
                  <Route path="/Home" Component={Home}/>
                  <Route path="/" Component={Login}/>
              </Routes>
          </Router>
    </>
  )
}

export default Routing