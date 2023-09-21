import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import AddMember from '../pages/AddMember';

function Routing() {
  return (
    <>
          <Router>
              <Routes>
                  <Route path="/" Component={Home}/>
                  <Route path="/AddMember" Component={AddMember}/>
              </Routes>
          </Router>
    </>
  )
}

export default Routing