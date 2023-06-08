import { Box } from "@mui/material";
import React from "react";
import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";
import HeroBanner from "../components/HeroBanner";

const Home = () => {
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises />
      <Exercises/>
    </Box>
  );
};

export default Home;
