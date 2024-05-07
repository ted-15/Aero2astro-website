import React, { useState } from "react";
import logo from "../Images/Transparent-01.png";
import "../CSS/Navbar.css";

function Navbar() {
    const [activeLink, setActiveLink] = useState("");
    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light nav-prop">
            <a className="navbar-brand" href="/">
                <img src={logo} alt="logo" className="Navlogo" />
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div
                className="collapse navbar-collapse navbar-set"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav mr-auto">
                    <li>
                        <a className="nav-link" href="/" >
                            About Us<span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li
                        className={`nav-item $ {
                activeLink==='explore'? 'active' : ''
            }

            `}
                    >
                        {" "}
                        <a
                            className="nav-link"
                            href="/"
                            onClick={() => handleLinkClick("explore")}
                        >
                            Explore<span className="sr-only">(current)</span>
                        </a>{" "}
                    </li>{" "}
                    <li className="nav-item dropdown">
                        {" "}
                        <a className="nav-link dropdown-toggle"
                            href="/"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            {" "}
                            Missions{" "}
                        </a>{" "}
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {" "}
                            <a
                                className="dropdown-item"
                                href="/"
                                onClick={() => handleLinkClick("mission-space")}
                            >
                                Mission Space
                            </a>{" "}
                            <div className="dropdown-divider"></div>{" "}
                            <a
                                className="dropdown-item"
                                href="/"
                                onClick={() => handleLinkClick("mission-tech")}
                            >
                                Mission Tech
                            </a>{" "}
                        </div>{" "}
                    </li>
                    <li
                        className={`nav-item $ {
                activeLink==='career'? 'active' : ''
            }

            `}
                    >
                        {" "}
                        <a
                            className="nav-link"
                            href="/"
                            onClick={() => handleLinkClick("career")}
                        >
                            Career<span className="sr-only">(current)</span>
                        </a>{" "}
                    </li>{" "}
                    <li
                        className={`nav-item $ {
                activeLink==='contact'? 'active' : ''
            }

            `}
                    >
                        {" "}
                        <a
                            className="nav-link"
                            href="/"
                            onClick={() => handleLinkClick("contact")}
                        >
                            Contact us<span className="sr-only">(current)</span>
                        </a>{" "}
                    </li>{" "}
                </ul>{" "}
            </div>{" "}
        </nav>
    );
}

export default Navbar;
