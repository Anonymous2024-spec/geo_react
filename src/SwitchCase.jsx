function SwitchCase({ isLoggedIn, username }) {
  switch (isLoggedIn) {
    case true:
      return <h2>Welcome, {username}</h2>;
    case false:
      return <h2>Please, Login to continue</h2>;
    default:
      return null;
  }
}
export default SwitchCase;
