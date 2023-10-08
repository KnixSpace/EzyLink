import DHome from "./pages/dashboard/dhome/DHome";
import Analytics from "./pages/dashboard/analytics/Analytics";
import ULink from "./pages/dashboard/links/ULink";
import About from "./pages/about/About";
import Dashboard from "./pages/dashboard/Dashboard";
import Navigation from "./pages/Navigation/Navigation";
import Login from "./pages/login-signup/Login";
import Home from "./pages/home/Home";
import { AnimatePresence } from "framer-motion";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
function App() {
  const [user, setUser] = useState(null);
  const { isOpen } = useSelector((store) => store.loginPage);
  useEffect(() => {
    const getUser = async () => {
      const res = await fetch("http://localhost:3000/auth/api/login/success", {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      setUser(data.user._json);
    };
    getUser();
  }, []);
  return (
    <>
      <AnimatePresence>
        {isOpen && <Login key={1} />}
        <Routes>
          <Route path="/" element={user ? null : <Navigation />}>
            <Route
              index
              element={user ? <Navigate to={"/dashboard"} /> : <Home />}
            ></Route>
            <Route path="about" element={<About />}></Route>
            <Route
              path="dashboard"
              element={
                user ? <Dashboard userData={user} /> : <Navigate to={"/"} />
              }
            >
              <Route index element={<DHome />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="links" element={<ULink />} />
            </Route>
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
