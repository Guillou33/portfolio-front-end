import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Login from './components/admin/Login';
import Dashboard from './components/admin/Dashboard';
import history from './history';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={Profile} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route path="/admin/auth" component={Login} />
            <Route path="/admin" component={Dashboard} />
          </Switch>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
