import React, {useState} from 'react'
import {connect} from 'react-redux'
import {loginUser} from '../redux/userReducer'
import axios from 'axios'

const Auth = () => {
    const [email, changeEmail] = useState('')
    const [password, changePassword] = useState()

    login = async (e) => {
        e.preventDefault();
        const {email, password} = this.state;
        try {
            const user = await axios.post('/auth/login', {email, password})
            this.props.loginUser(user.data)
            this.props.history.push('/main')
        } 
        catch {
            alert('failed login attempt')
        }
    }

    

    emailHandler = e => {
        changeEmail(e.target.value)
    }

    passwordHandler = e => {
        changePassword(e.target.value)
    }

    return (
        <div className="Auth">
            <h1>Auth Component</h1>
            <form onSubmit={this.login}>
                <h2>Login</h2>
                <input
                type='text'
                placeholder='email'
                name='email'
                value={email}
                onChange={this.emailHandler}
                />
                <input
                type='password'
                placeholder='password'
                name='password'
                value={password}
                onChange={this.passwordHandler}
                />
                <input
                type="submit"
                value="Login"
                />
            </form>
        </div>
    )
}

export default Auth