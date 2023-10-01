import Login from "./pages/login-signup/Login";
import Home from "./pages/home/Home";
import axios from "axios";
import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Navigation from "./components/Navigation/Navigation";
import About from "./pages/about/About";

function App() {
  const { isOpen } = useSelector((store) => store.loginPage);
  console.log(isOpen);
  return (
    <>
      <AnimatePresence>
        {isOpen && <Login key={1}/>}
        <Navigation key={2}/>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
