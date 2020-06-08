import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router';

import Logo from "../../../static/assets/images/logo/journalLogo.png"

const NavigationContainer = props => {

    return (
        <div className="nav-wrapper">
            <div className="logo">
                <NavLink to='/'>
                    <img src={Logo}/>
                </NavLink>
            </div>
                {props.loggedInStatus === 'Logged_In' ? (
                        <div>
                            <div className='nav-link'>
                                <NavLink to="/entries" activeClassName='nav-link-active'>
                                    Entries
                                </NavLink>
                            </div>
                            <div className='nav-link'>
                                <NavLink to="/new-entry" activeClassName='nav-link-active'>
                                    New
                                </NavLink>
                            </div>
                        </div>
                ): null}

            <div className="right-side">
                <div className='nav-link'>
                    <NavLink to="/auth" activeClassName='nav-link-active'>
                        Sign in
                    </NavLink>
                </div>
                <div className='nav-link'>
                    <NavLink to="/register" activeClassName='nav-link-active'>
                        Sign up
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default withRouter(NavigationContainer);