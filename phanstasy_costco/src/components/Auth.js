import React, {useState} from 'react'
import {connect} from 'react-redux'
import {loginUser} from '../redux/userReducer'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Auth = (props) => {
    const [email, changeEmail] = useState('')
    const [password, changePassword] = useState('')

    const login = async (e) => {
        e.preventDefault();
        const user = await axios.post('/auth/login', {email, password})
        props.loginUser(user.data)
        props.history.push('/store')
    }



    return (
        <div className="Auth">
            <div className='inputs'>
                <form onSubmit={login}>
                    <h2>Login</h2>
                    <input
                    type='text'
                    placeholder='email'
                    name='email'
                    value={email}
                    onChange={(e) => changeEmail(e.target.value)}
                    />
                    <input
                    type='password'
                    placeholder='password'
                    name='password'
                    value={password}
                    onChange={e => changePassword(e.target.value)}
                    />
                    <button type='submit'>Login</button>
                </form>
                <Link to='/register'>
                    <button className='byooton'>Register</button>
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps, {loginUser})(Auth)