import React, { useState } from "react";
import Header from "./component/Header";
import LoginModal from "./component/LoginModal";
import SignUp from "./component/SignUp";
import { createContext } from "react";
import Home from "./component/Home";
import Footer from "./component/Footer";
import MyAdd from "./component/MyAdd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarDetail from "./component/CarDetail";
import ShowAdDetail from "./component/ShowAdDetail";
import Form from "./component/Form";
export const userContext = createContext(null);

const App = () => {
  const [userName, setUsername] = useState("Login");
  const [userId, setUserId] = useState();
  return (
    <>
      <userContext.Provider
        value={{ userName, setUsername, userId, setUserId }}
      >
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginModal />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/myAdd" element={<MyAdd />} />
            <Route path="/carDetail" element={<CarDetail />} />
            <Route path="/ShowAdDetail/:adId" element={<ShowAdDetail />} />
            <Route path="/form/:id" element={<Form />} />
          </Routes>
          <Footer />
        </Router>
      </userContext.Provider>
    </>
  );
};

export default App;
