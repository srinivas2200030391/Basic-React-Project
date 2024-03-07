// import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import MainNavBar from "./main/MainNavBar";
import AdminNavBar from "./admin/AdminNavBar";
function App() {
  return (
    <div className="App">
      <h3 align="center">Online Job Portal</h3>
      <Router>
        <MainNavBar />
        {/* <AdminNavBar /> */}
      </Router>
    </div>
  );
}

export default App;
