import React from 'react';
import "../css/User.css";

function User({username}) {
    return (
        <div className="user">
            {username}
        </div>
    )
}

export default User;
