import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './components/Pages/Main';
import Products from './components/Pages/Products';
import Login from './components/Pages/Login';

const baseName = process.env.REACT_APP_ENV === 'production' ? '/test-shopping/' : '/';

function App() {
  return (
    <div className="App">
      <Router basename={baseName}>
        <Switch>
          <Route exact path="/">
            <Layout>
              <MainPage />
            </Layout>
          </Route>
          <Route path="/man">
            <Layout>
              <Products />
            </Layout>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
