function UserDashboard({ status, username }) {
  switch (status) {
    case "guest":
      return <h2>Welcome, Guest! Please login.</h2>;
    case "user":
      return <h2>Hello, {username}!</h2>;
    case "admin":
      return <h2>Welcome Admin, {username}!</h2>;
    default:
      return <h2>Unknown status</h2>;
  }
}

export default UserDashboard;
