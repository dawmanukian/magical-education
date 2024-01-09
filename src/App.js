import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/auth-page/AuthPage";
import DashboardPage from "./pages/dashboard-page/DashboardPage";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [authUser, setAuthUser] = useState(true);

  if (authUser) {
    return (
      <Router>
        <Routes>
          <Route path={"/"} element={<DashboardPage onExit={() => setAuthUser(false)}/>} />
        </Routes>
      </Router>
    );
  }
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AuthPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
