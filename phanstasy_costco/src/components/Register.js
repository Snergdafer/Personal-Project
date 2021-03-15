import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Register = (props) => {
    const [email, changeEmail] = useState('')
    const [username, changeUsername] = useState('')
    const [password, changePassword] = useState('')

    const register = async (e) => {
        e.preventDefault();
        await axios.post('/auth/register', {email, username, password})
        props.history.push('/')
    }

    return(
        <div className='Register'>
            <form onSubmit={register}>
                <h2>Register</h2>
                <input
                type='text'
                placeholder='email'
                name='email'
                value={email}
                onChange={(e) => changeEmail(e.target.value)}
                />
                <input
                type='text'
                placeholder='username'
                name='username'
                value={username}
                onChange={(e) => changeUsername(e.target.value)}
                />
                <input
                type='password'
                placeholder='password'
                name='password'
                value={password}
                onChange={e => changePassword(e.target.value)}
                />
                <button type='submit'>Register</button>
            </form>
            <Link to='/'>
                <button>Return to login</button>
            </Link>
        </div>
    )
}

export default Register