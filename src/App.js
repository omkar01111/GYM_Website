import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Home from "../src/pages/Home";
import ExerciseDetails from "../src/pages/ExerciseDetails";

const App = () => {
  return (
    <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
