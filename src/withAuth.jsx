import React from "react";

const withAuth = (WrappedComponent) => {
    return (props) => {
        if (!props.isLoggedIn) {
            return <h2>Please log in to access this page.</h2>;
        }
        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
