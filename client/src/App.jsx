import NewLink from "./pages/dashboard/newlink/NewLink";
import DHome from "./pages/dashboard/dhome/DHome";
import Analytics from "./pages/dashboard/analytics/Analytics";
import Alink from "./pages/dashboard/dalink/Alink";
import About from "./pages/about/About";
import Dashboard from "./pages/dashboard/Dashboard";
import Url from "./pages/url/Url";
import Login from "./pages/login-signup/Login";
import Home from "./pages/home/Home";
import ErrorPage from "./pages/404/ErrorPage";
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
        <Routes key={2}>
          <Route path="/" element={user ? null : <Home />}>
            <Route
              index
              element={user ? <Navigate to={"/dashboard"} /> : <Url />}
            ></Route>
            <Route path="about" element={<About />}></Route>
            <Route
              path="dashboard"
              element={
                user ? <Dashboard userData={user} /> : <Navigate to={"/"} />
              }
            >
              <Route path="" element={<DHome userData={user} />} />
              <Route path="newlink" element={<NewLink userData={user} />} />
              <Route path="analytics" element={<Analytics userData={user} />} />
              <Route path="links" element={<Alink userData={user} />} />
            </Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
