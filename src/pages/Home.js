import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
      <div id="about">
        <Typography variant="h2" align="center" mt={10}>About Us</Typography>
        <Typography variant="h3" align="center" mt={5}>Best Fitness Solution</Typography>
        <Typography variant="body1" fontSize={20} mt={5} align="center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, corrupti?</Typography>
        <Typography variant="body1" fontSize={20} align="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro impedit, asperiores beatae facere placeat esse et incidunt minus cum ab, a iusto pariatur amet nostrum quo odit aut, aspernatur consequatur.</Typography>
        <Typography variant="body1" fontSize={20} align="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit culpa unde cupiditate obcaecati assumenda, animi error nostrum laboriosam saepe nam dolorem ut rem magni ea labore nulla vel dignissimos iste, corrupti earum. Facere optio hic magni reprehenderit fugit numquam cumque libero quibusdam explicabo, tempora distinctio fuga repellat assumenda nulla sequi.</Typography>
      </div>
      <div id="help">
        <Typography variant="h2" align="center" mt={10}>For Help</Typography>
        <Typography variant="h5" fontSize={20} mt={5} align="center">Contect us for help and support on our email. <a href="mailto: help@getfit.com">help@getfit.com</a></Typography>
      </div>
    </Box>
  );
};

export default Home;
