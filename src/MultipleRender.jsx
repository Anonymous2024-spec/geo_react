function UserGreeting({ isLoggedIn, isAdmin, username }) {
    if (!isLoggedIn) {
        return <h2>Please login</h2>;
    }
    if (isAdmin) {
        return <h2>Welcome Admin, {username}!</h2>;
    }
    return <h2>Hello, {username}!</h2>;
}

export default UserGreeting;
