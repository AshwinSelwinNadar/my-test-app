import React from 'react';
import "../css/AppElement.css";

function AppElement({appTitle, serialNo}) {

    let label = "";
    if(serialNo === 1) {
        label = <span className="appElement__label">Apps: </span>;
    }

    return (
        <div className="appElement">
            {label}
            <span className="appElement__title">{appTitle}</span>
        </div>
    )
}

export default AppElement;
