import React, { Fragment } from "react";

const Dashboard = () =>{
    return (
        <Fragment>
           <div className="bg-white mt-2 d-flex justify-content-center align-items-center" style={{height: '87vh'}}>
                <div className="text-center">
                    <h1 className="roboto-font" style={{fontSize:'75px'}}>I<span className="text-success">.</span>S<span className="text-success">.</span>P<span className="text-success">.</span>M</h1>
                    <h2 className="text-muted roboto-font"><span className="text-success">I</span>nstitut <span className="text-success">S</span>upérieur <span className="text-success">P</span>olytechnique de <span className="text-success">M</span>adagascar</h2>        
                </div>    
            </div>
        </Fragment>
    );
}

export default Dashboard;