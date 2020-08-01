import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Layout from './components/Layout';
import MainPage from './components/Pages/Main';
import Products from './components/Pages/Products';
import Login from './components/Pages/Login';

function App() {
  const [cookie] = useCookies();
  useEffect(() => {
    console.log('cookie deishdi', cookie.token);
  }, [cookie]);
  return (
    <div className="App">
      <Router>
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
