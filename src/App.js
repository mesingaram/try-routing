import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Blog from './Blog';
import Business_Solutions from './Business_Solutions';
import Careers from './Careers';
import New_Patient from './New_Patient';
import Therapy_Services from './Therapy_Services';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/therapy" component={Therapy_Services} />
          <Route path="/new" component={New_Patient} />
          <Route path="/business" component={Business_Solutions} />
          <Route path="/careers" component={Careers} />
          <Route path="/blog" component={Blog} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;
