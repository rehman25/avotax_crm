import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import AddMember from '../pages/AddMember';
import ClientInfo from '../pages/ClientInfo'

function Routing() {
  return (
    <>
          <Router>
              <Routes>
                  <Route path="/" Component={Login}/>
                  <Route path="/Home" Component={Home}/>
          <Route path="/AddMember" Component={AddMember} />
          <Route path="/ClientInfo" Component={ClientInfo} />
              </Routes>
          </Router>
    </>
  )
}

export default Routing