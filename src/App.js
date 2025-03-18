import "./App.css";
import Filter from "./Filter";

// import If from "./If";
// import IfElse from "./IfElse";
// import LogicalAndOp from "./LogicalAndOp";
// import UserGreeting from "./MultipleRender";
// import UserDashboard from "./Nested";
// import Notification from "./SwitchCase";
// import TernaryOp from "./TernaryOp";
// import Dashboard from "./Dashboard";
// import Lists from "./Lists";
import MyButton from "./Ref";
// import withAuth from "./withAuth";

// const ProtectedDashboard = withAuth(Dashboard);

function App() {
  return (
    <div>
      {/* <If isLoggedIn={true} username="Naana" />
      <IfElse isLoggedIn={false} username="Naana" />
      <TernaryOp isLoggedIn={true} username="Shifah" />
      <LogicalAndOp isLoggedIn={true} username="Ham" />
      <Notification isLoggedIn={false} username="Yunus" />
      <UserGreeting isLoggedIn={true} username="Yunus" isAdmin={false} />
      <UserDashboard status="guest" username="Shanurah" />
      <ProtectedDashboard isLoggedIn={false} username="Mawi"/> */}
      {/* <Lists /> */}
      {/* <Filter/> */}
      <MyButton/>
    </div>
  );
}

export default App;
