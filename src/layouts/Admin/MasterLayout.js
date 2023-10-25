import React, { Component} from "react";
import Footer from "./Footer";
import Aside from "./Aside";
import Navbar from "./Navbar";
import ErrorPage from "../../components/ErrorPage";
import "../../assets/admin/css/styles.css";
import "../../assets/admin/js/scripts";
import Dashboard from "../../components/backend/Dashboard";
import {Route, Switch } from "react-router-dom";
import Classes from "../../components/backend/Classes/Classes";
import AddClasses from "../../components/backend/Classes/AddClassses";
import ViewClasses from "../../components/backend/Classes/ViewClasses";
import EditClasses from "../../components/backend/Classes/EditClasses";
import Filieres from "../../components/backend/Filieres/Filieres";
import AddFilieres from "../../components/backend/Filieres/AddFilieres";
import ViewFilieres from "../../components/backend/Filieres/ViewFilieres";
import EditFilieres from "../../components/backend/Filieres/EditFilieres";
import Etudiants from "../../components/backend/Etudiants/Etudiants";
import AddEtudiants from "../../components/backend/Etudiants/AddEtudiants";
import ViewEtudiants from "../../components/backend/Etudiants/ViewEtudiants";
import EditEtudiants from "../../components/backend/Etudiants/EditEtudiants";
import Historiques from "../../components/backend/Historique/Historiques";
import ViewHistoriques from "../../components/backend/Historique/ViewHistoriques";
import AddHistoriques from "../../components/backend/Historique/AddHistoriques";
import EditHistoriques from "../../components/backend/Historique/EditHistoriques";
import Users from "../../components/backend/Utilisateurs/Users";
import AddUsers from "../../components/backend/Utilisateurs/AddUsers";
import ViewUsers from "../../components/backend/Utilisateurs/ViewUsers";
import EditUsers from "../../components/backend/Utilisateurs/EditUsers";
import Departement from "../../components/backend/Departement/Departement";
import AddDepartement from "../../components/backend/Departement/AddDepartement";
import ViewDepartement from "../../components/backend/Departement/ViewDepartement";
import EditDepartement from "../../components/backend/Departement/EditDepartement";
import PreSelecton from "../../components/backend/preSelection/preSelection";
class MasterLayout extends Component{
  render(){
    return (
      <>
      <Navbar/>
      <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
              <Aside/>
          </div>
          <div id="layoutSidenav_content"  style={{backgroundColor:'#ccc'}}>
              <main>
                  <div class="container-fluid">
                      <Switch>
                          <Route exact path="/admin/dashboard" component={Dashboard} />
                          <Route component={ErrorPage}/>
                      </Switch>
                  </div>
              </main>
          <Footer/>
          </div>
      </div>
  </>
    );
  }
}

export default MasterLayout;