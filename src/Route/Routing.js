import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';

function Routing() {
  return (
    <>
          <Router>
              <Routes>
                  <Route path="/" Component={Home}/>
              </Routes>
          </Router>
    </>
  )
}

export default Routing