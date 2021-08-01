import axios from 'axios'

const API_URL = 'http://localhost:8080'

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

class AuthenticationService {

    executeBasicAuthenticationService(username, password) {
        return axios.get(`${API_URL}/basicauth`,
            { headers: { authorization: this.createBasicAuthToken(username, password) } })
    }


    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password)
    }

    registerSuccessfulLogin(username, password) {
        localStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, true)
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password))
    }


    logout() {
        localStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, false)
    }

    isUserLoggedIn() {
        if (localStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME) === "true") { return true; }
        else { return false; }
    }

    setupAxiosInterceptors(token) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }
}

export default new AuthenticationService()
