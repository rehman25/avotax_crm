import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import AddMember from '../pages/AddMember';
import ClientInfo from '../pages/ClientInfo';
import Job from '../pages/Job'
import AddJob from '../components/modal/AddJob';
import ClientType from '../components/modal/ClientType';
import CreateRole from '../components/modal/CreateRole';

function Routing() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/Home" Component={Home} />
          <Route path="/AddMember" Component={AddMember} />
          <Route path="/ClientInfo" Component={ClientInfo} />
          <Route path="/Job" Component={Job} />
          <Route path="/ClientType" Component={ClientType}/>
          <Route path="/CreateRole" Component={CreateRole}/>
        </Routes>
      </Router>
    </>
  )
}

export default Routing