import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './store/actions/authActions';
import { Store } from './store';

import './App.css';
import Footer from './components/partials/Footer';
import Navbar from './components/partials/Navbar';

import Landing from './components/pages/Landing';
import Contact from './components/pages/Contact';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import PrivateRoute from './components/auth/PrivateRoute';
import Dashboard from './components/pages/Dashboard';
import Resume from './components/pages/Resume';
import SearchBar from './components/pages/SearchBar';
import Project from './components/pages/Project';
import Sample from './components/pages/Sample';

const App = () => {
  const { dispatch } = useContext(Store);

  useEffect(() => {
    if (localStorage.jwtToken) {
      const token = localStorage.jwtToken;
      const decoded = jwt_decode(token);
      const currentTime = Date.now() / 1000;

      setAuthToken(token);

      dispatch(setCurrentUser(decoded));

      if (decoded.exp < currentTime) {
        dispatch(logoutUser());
        window.location.href = './login';
      }
    }
  }, [ dispatch ]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/sample" component={Sample} />
        <Route exact path="/contact" component={Contact} />

        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/resume" component={Resume} />
          <PrivateRoute exact path="/searchBar" component={SearchBar} />
       
        </Switch>
      <Footer/>
      </div>
    </Router>
  );
};

export default App;
