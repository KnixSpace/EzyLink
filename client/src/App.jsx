import Login from "./pages/login-signup/Login";
import Home from "./pages/home/Home";
import axios from "axios";
import { AnimatePresence } from "framer-motion";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
function App() {
  const { isOpen } = useSelector((store) => store.loginPage);
  console.log(isOpen);
  return (
    <>
      <AnimatePresence>
        {/* {isOpen && <Login key={2} />}
        <Home key={1} /> */}
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/login" element={isOpen ? <Login /> : <Navigate to={"/"}/>}></Route>
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
