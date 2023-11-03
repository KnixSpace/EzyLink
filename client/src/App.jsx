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
  const [loading, setLoading] = useState(true);
  const { isOpen } = useSelector((store) => store.loginPage);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_LOGIN_SUCCESS, {
          method: "GET",
          credentials: "include",
        });
        if (res.ok) {
          const data = await res.json();
          setUser(data.user._json);
        } else {
          // Handle authentication error or redirect to login if necessary
          // For example, you can show the login page again
          // or redirect the user to the login page.
        }
      } catch (error) {
        // Handle fetch error (e.g., network error)
        console.error("Fetch error:", error);
      } finally {
        setLoading(false); // Set loading to false regardless of the outcome
      }
    };
    getUser();
  }, []);
  return (
    <>
      <AnimatePresence>
        {isOpen && <Login key={1} />}
        {loading ? ( // Display a loading state while user data is being fetched
          <div>Loading...</div>
        ) : user ? (
          <Routes key={2}>
            <Route path="/">
              <Navigate to="/dashboard" />
            </Route>
            <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard userData={user} />}>
              <Route index element={<DHome userData={user} />} />
              <Route path="newlink" element={<NewLink userData={user} />} />
              <Route path="analytics" element={<Analytics userData={user} />} />
              <Route path="links" element={<Alink userData={user} />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        ) : (
          <Home />
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
