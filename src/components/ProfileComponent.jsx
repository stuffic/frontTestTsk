import React, { Component } from 'react'
import AuthenticationService from '../services/AuthenticationService';

class ProfileComponent extends Component {
    render() {

        var isUserLoggedIn = AuthenticationService.isUserLoggedIn();

        return (
            <>
                {isUserLoggedIn && <h1>Здесь будет профиль пользователя</h1>}
            </>
        )
    }
}

export default ProfileComponent