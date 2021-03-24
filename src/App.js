import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";

import Wrapper from "./components/Wrapper";
import genPassword from "./components/pages/GenPassword";


function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/genPassword" component={genPassword}/>
        </Wrapper>
        <br></br><br></br><br></br><br></br>
       
      </div>
    </Router>
    
  );
}

export default App;
