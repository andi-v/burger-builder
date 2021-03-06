import axios from 'axios'
import * as actionTypes from './actionTypes'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (idToken, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken,
        userId
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => ({
    type: actionTypes.AUTH_LOGOUT
})

export const checkAuthTimeout = (expirationTime) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime * 1000)
    }
}

export const auth = (email, password, isSignup) => {
    return (dispatch) => {
        dispatch(authStart())
        const authData = {
            email,
            password,
            returnSecureToken: true
        }

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCjDH1a4YOSwAbxknuRyNdzS2hGH3SQ0mc'
        if (!isSignup) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCjDH1a4YOSwAbxknuRyNdzS2hGH3SQ0mc'
        }
        
        axios.post(url, authData)
        .then(response => {
            console.log(response)
            dispatch(authSuccess(response.data.idToken, response.data.localId))
            dispatch(checkAuthTimeout(response.data.expiresIn))
        })
        .catch(err => {
            console.log(err)
            dispatch(authFail(err.response.data.error))
        })
    }
}

export const setAuthRedirectPath = (path) => ({
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path
})