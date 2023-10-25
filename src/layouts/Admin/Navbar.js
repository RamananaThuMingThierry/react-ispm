import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts';

import axios from "axios";
import swal from "sweetalert";
import ToggleBodyClass from "../../components/backend/constant";
const Navbar = () =>{

    const history = useHistory();

    
    const Logout = (e) =>{
        const thisClicked = e.currentTarget;
        swal({
            title: "Vous êtes sûr?",
            text: "Voulez-vous vraiment se déconnecter ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then((willDelete) => {
            if (willDelete) {
                axios.post(`api/logout`).then(res =>{
                    if(res.data.status === 200){
                        localStorage.removeItem('auth_token');
                        localStorage.removeItem('auth_name');
                        history.push('/');
                        swal("Success", res.data.message, "success"); 
                    }else if(res.data.status === 404){
                        swal("Error", res.data.message, "error");
                        thisClicked.innerHTML = "<i class=\"fas fa-save\"></i>";
                    }
                });
            } else {
                swal("La suppression a été annulé!");
            }
            });

    }

    return (
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-success">
      <Link className="navbar-brand ps-3 roboto-font" to="/admin/dashboard"><i className="text-center fas fa-university text-white"></i>&nbsp;&nbsp;&nbsp;I.S.P.M</Link>
      <button className="btn text-white btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" onClick={ToggleBodyClass} id="sidebarToggle"><i className="fas fa-bars"></i></button>
      <ul className="navbar-nav d-flex d-md-inline-block rounded-0 form-inline ms-auto  me-lg-4">
          <li className="nav-item dropdown rounded-0">
              <Link className="nav-link dropdown-toggle" id="navbarDropdown" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-solid"></i></Link>
              <ul className="dropdown-menu rounded-0 dropdown-menu-end" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="">Paramètre</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><button onClick={Logout} type="button" className="dropdown-item roboto-font">Déconnecter</button></li>
              </ul>
          </li>
      </ul>
  </nav>
    );
}

export default Navbar;