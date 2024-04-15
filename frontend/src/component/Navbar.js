import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import "../css/navbar.css";
export default function Navbar(props) {
    let location = useLocation();
    const navigate = useNavigate();
    const Logout = () => {
        localStorage.removeItem('token');
        navigate("/Login")
    }
    return (
        <div className="basicNav">
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid ">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navbarcollapse " id="navbarTogglerDemo02">
                        <div className='container-fluid justify-content-center'>
                            <div className='flex-grow-0'>
                        <ul className="navbar-nav text-center me-auto mb-2 mb-lg-0">
                        {localStorage.getItem('token')?
                                <>
                                    <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/Profile" ? "active" : ""}`} to="/Profile">
                                    Profile
                                </Link> </li>
                                <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/Business" ? "active" : ""}`} to="/Business">
                                    {props.navSection1}
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/Organisation" ? "active" : ""}`} to="/Organisation">
                                    {props.navSection2}
                                </Link>

                            </li>
                        
                   
                                </>:<>
                                <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">
                                    {props.home}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/SpotLight" ? "active" : ""}`} to="/SpotLight">
                                SpotLight
                                </Link>
                            </li>
                                </>}
                           
                                        </ul>
                                        </div>
                                        </div>
                                <ul className='navbar-nav ms-auto'>
                            {!localStorage.getItem('token') ?
                                <>
                                    <li className="nav-item">
                                        <Link className={`nav-link ${location.pathname === "/Login" ? "active" : ""} loginstyle`} to="/Login">
                                            Login
                                        </Link>  </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link ${location.pathname === "/SignUp" ? "active" : ""} loginstyle`} to="/SignUp">
                                            SignUp
                                        </Link>  </li>
                                </>
                                :
                                <>
                                     <div >
                    <button type="button" className="logoutstyle" onClick={Logout}>
                    Logout
                    </button>
                </div>
                                </>}
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string
};

Navbar.defaultProps = {
    home: "Home",
    navSection1: "Business",
    navSection2: "Institutes",
    navSection3: "Saved",
    navSection4: "Notifications"
}


