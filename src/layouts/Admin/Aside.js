import React from "react";
import { Link } from "react-router-dom";

const Aside = () =>{

  const toggleBodyClass = (e) => {
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
     e.preventDefault();
    document.body.classList.toggle('sb-sidenav-toggled');
    localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
    }
};

   return (
    <nav className="sb-sidenav accordion elevation-2 sb-sidenav-dark bg-success" id="sidenavAccordion">
      <div className="sb-sidenav-menu">
        <div className="nav">
            <div className="sb-sidenav-menu-heading text-white">Accueil</div>
            <Link to="/admin/dashboard" className="nav-link roboto-font">
                <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                Tableau de bord
              </Link>
          </div>
          <div className="nav">
            <div className="sb-sidenav-menu-heading  text-white">Pré-séléctions</div>
              <Link to="/admin/membres" className="nav-link roboto-font">
                <div className="sb-nav-link-icon"><i className="fas fa-edit text-white"></i></div>
                Pré-séléctionner
              </Link>
          </div>
          <div className="nav">
            <div className="sb-sidenav-menu-heading  text-white">Corps</div>
              <Link to="/admin/membres" className="nav-link roboto-font">
                <div className="sb-nav-link-icon"><i className="fas fa-solid fa-home text-white"></i></div>
                Classes
              </Link>
              <Link to="/admin/liste-non-adhere" className="nav-link roboto-font">
                <div className="sb-nav-link-icon"><i className="fas fa-file text-white"></i></div>
                Filières
              </Link>
              <Link to="/admin/listes-electeurs-membres" className="nav-link roboto-font">
                <div className="sb-nav-link-icon"><i className="fas fa-list text-white"></i></div>
                Départements
              </Link>
              <Link to="/admin/listes-electeurs-membres" className="nav-link roboto-font">
                <div className="sb-nav-link-icon"><i className="fas fa-list text-white"></i></div>
                Etudiants
              </Link>
          </div>
          <div className="nav">
            <div className="sb-sidenav-menu-heading  text-white">Historiques</div>
              <Link to="/admin/membres" className="nav-link roboto-font">
                <div className="sb-nav-link-icon"><i className="fas fa-solid fa-refresh text-white"></i></div>
                Historiques
              </Link>
          </div>
      </div>
    </nav>
   );
}

export default Aside;