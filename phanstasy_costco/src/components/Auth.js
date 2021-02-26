import React from 'react'
import {connect} from 'react-redux'
import {loginUser} from '../redux/userReducer'
import axios from 'axios'

const Auth = () => {
    return (
        <div className="Auth">
            <h1>Auth Component</h1>
        </div>
    )
}

export default Auth