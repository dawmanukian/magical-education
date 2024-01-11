import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/auth-page/AuthPage";
import DashboardPage from "./pages/dashboard-page/DashboardPage";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import SettingsPage from "./pages/settings-page/SettingsPage";

function App() {
  const [authUser, setAuthUser] = useState(true);

  if (authUser) {
    return (
      <>
        <Router>
        <Navbar />
          <Routes>
            <Route path={"/*"} element={<DashboardPage />} />
            <Route path={"/settings"} element={<SettingsPage />} />
          </Routes>
        </Router>
      </>
    );
  }
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/*"
            element={<AuthPage onSubmit={() => setAuthUser(true)} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
