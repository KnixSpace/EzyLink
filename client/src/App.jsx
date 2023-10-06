import About from "./pages/about/About";
import Dashboard from "./pages/dashboard/Dashboard";
import Navigation from "./pages/Navigation/Navigation";
import Login from "./pages/login-signup/Login";
import Home from "./pages/home/Home";
import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ShortUrl from "./pages/shortUrl/ShortUrl";
import Limit from "./components/Limit/Limit";
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
          <Route path="/" element={<Navigation userData={user} />}>
            <Route index element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route
              path="dashboard"
              element={user ? <Dashboard userData={user} /> : null}
            />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
