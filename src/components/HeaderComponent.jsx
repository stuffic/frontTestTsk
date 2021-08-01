import React, { Component } from 'react';

import AuthenticationService from '../services/AuthenticationService';
import { Link, withRouter } from 'react-router-dom'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {


        }
    }



    render() {

        const isUser = AuthenticationService.isUserLoggedIn();


        return (

            <div>
                <header>
                    <nav className="navbar navbar-expend-md navbar-dark bg-dark">
                        <div className="navbar-brand">News App
                            <ul className="navbar-nav navbar-collapse justify-content-end">
                                {isUser && <li><Link className="nav-link" to="/login">Login</Link></li>}
                                {isUser && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                                {<li><Link className="nav-link" to="/profile">Profile</Link></li>}
                            </ul>

                        </div>
                    </nav>
                </header>
            </div >
        );
    }
}

export default HeaderComponent;