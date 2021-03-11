import React, {useState} from 'react'
import {connect} from 'react-redux'
import {loginUser} from '../redux/userReducer'
import axios from 'axios'


const  AccountDetails = (props) => {
    const [userInfo, setUserInfo] = useState({
        newEmail: '',
        newUsername: ''
    })
    const [updateActive, setUpdateActive] = useState(false)
    const {username, email} = props.userReducer.user

    const toggleUpdate = () => {
        setUpdateActive(!updateActive)
    }

    const update = async (e) => {
        e.preventDefault();
        const updatedUser = await axios.put('/auth/update', {newEmail: userInfo.newEmail, newUsername: userInfo.newUsername, email})
        props.loginUser(updatedUser.data)
        toggleUpdate()
    }

    
    
    return (
        <div className="Auth">
            {!updateActive? 
            <div>
                <h1>{username}</h1>
                <h1>{email}</h1>
                <button>Change Password</button>
                <button onClick={() => toggleUpdate()}>Update Username and Email</button>
            </div>
            :
            <div>
                <form onSubmit={update}>
                    <h1>Update Info</h1>
                    <input
                        type='text'
                        placeholder='new email'
                        name='newEmail'
                        value={userInfo.newEmail}
                        onChange={(e) => setUserInfo({...userInfo, newEmail: e.target.value})}
                    />
                    <input
                        type='text'
                        placeholder='new username'
                        name='newUsername'
                        value={userInfo.newUsername}
                        onChange={(e) => setUserInfo({...userInfo, newUsername: e.target.value})}
                    />
                    <button type='submit'>Submit</button>
                </form>
                <button onClick={() => toggleUpdate()}>Cancel</button>
            </div>
            }
        </div>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps, {loginUser})(AccountDetails)