import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Dishes from "./components/Dishes";
import Review from "./layouts/Review";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
      <Route path="/login" element={<Login />} />
      </Routes>
      
      <main>
        <div id="home">
          <Home />
        </div>

        <div id="dishes">
          <Dishes />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="menu">
          <Menu />
        </div>

        <div id="review">
          <Review />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
