import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Users from "./pages/Users";
import Navbar from "./components/Navbar";
import AuthContext from "./context/AuthContext";
import axios from 'axios';
axios.defaults.baseURL='https://syno-backend.onrender.com'
axios.defaults.withCredentials=true;
const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});
  
  
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, user, setUser }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup user={user} isAuth={isAuth}/>} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
