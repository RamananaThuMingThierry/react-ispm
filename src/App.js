import axios from "axios";
import './App.css';
import React from "react";
import { Switch } from "react-router-dom";
import AdminPrivateRoute from "./AdminPrivateRoute";
import PublicRoute from "./PublicRoute";
import BASE_URL from "./baseURL";
axios.defaults.baseURL = BASE_URL;
// axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function(config){
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : ``;
  return config;
});

function App (){
    return (
      <div className="App">
          <Switch>
            {/* <Route  path="/admin" name="Admin" render={() => <MasterLayout/>}/> */}
            <AdminPrivateRoute path="/admin" name="Admin"/>
            <PublicRoute path="/" name="Home"/>
          </Switch>
      </div>
    );
  }

export default App;
