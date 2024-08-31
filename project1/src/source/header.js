import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate(); // Hook for programmatic navigation

    function Logout() {
        localStorage.clear(); // Clear local storage
        navigate('/'); // Redirect to homepage using navigate
    }

    const isLoggedIn = localStorage.getItem('mydata') !== null;

    return (
        <>
            <header id="site-header" className="fixed-top">
                <div className="container">
                    <nav className="navbar navbar-expand-lg stroke">
                        <h1>
                            <Link className="navbar-brand mr-lg-5" to="/">
                                Traversal
                            </Link>
                        </h1>
                        <button className="navbar-toggler collapsed bg-gradient" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
                            <span className="navbar-toggler-icon fa icon-close fa-times"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/destination">Destinations</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact</Link>
                                </li>
                                {isLoggedIn && (
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/adddestination">Add Destination</Link>
                                    </li>
                                )}
                            </ul>
                        </div>

                        <div className="d-lg-block d-none">
                            {!isLoggedIn ? (
                                <Link className="btn btn-style btn-secondary" to="/login">Login</Link>
                            ) : (
                                <button type="button" onClick={Logout} className="btn btn-style btn-secondary">Logout</button>
                            )}
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;
