import React from 'react';
import {Link} from "react-router-dom";


const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a className="brand-logo">Todo</a>
                <ul className="right hide-on-med-and-down">
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;