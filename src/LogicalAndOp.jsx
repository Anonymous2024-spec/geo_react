

import React from "react";

function LogicalAndOp({ isLoggedIn, username }) {
    return (
        isLoggedIn && (
            <div>
                <h2>Welcome, {username}</h2>
            </div>
        )
    );
}

export default LogicalAndOp;
