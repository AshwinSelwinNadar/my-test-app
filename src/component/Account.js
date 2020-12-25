import React from 'react';
import "../css/Account.css";

function Account({accountId}) {
    return (
        <div className="account">
            <span className="account__label">Acc no: </span>
            <span className="account__value">{accountId}</span>
        </div>
    )
}

export default Account;
