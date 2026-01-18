import React from "react";
import { Link, Outlet } from "react-router-dom";
import { DataProvider } from "./Allwork";
import { useContext } from "react";
import Button from 'react-bootstrap/Button';






const Navbar = () => {

  const {dispatch,state:{inpVal}} = useContext(DataProvider)




  


  
  
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-success" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/student">
                  Student
                </Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link" to="/studentDetail">
                  studentDetail
                </Link>
              </li>
            
            
            </ul>
            <div className="mx-3">
        
             
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 bg-white text-dark"
                type="search"
                placeholder="Search"
                aria-label="Search" 
                onChange={(e)=> dispatch({type:"input" , payload:e.target.value})}
          
              />
              <button
                className="btn btn-outline-info"
                type="button"
                onClick={()=> dispatch({type:"search" ,payload:inpVal})}
               
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Outlet/>
    </>
  );
};

export default Navbar;
