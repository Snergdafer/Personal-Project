import React from 'react'
import {connect} from 'react-redux'



const  AccountDetails = (props) => {
    console.log(props)
    const {username, email} = props.userReducer.user
    return (
        <div className="Auth">
            <h1>{username}</h1>
            <h1>{email}</h1>
            <button>Change Password</button>
        </div>
    )
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(AccountDetails)