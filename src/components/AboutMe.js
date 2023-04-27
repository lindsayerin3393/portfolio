import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const AboutMe = () => {
  return (
    <>
      <Box height="100vh" width="100vw" display="flex">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant="h3"
            align="center"
            color="#dcd5b9"
            className="typewriter"
          >
            Hello!
          </Typography>
          <Typography variant="h5" align="center" color="#dcd5b9">
            I'm Lindsay, a fullstack software engineer based in Baltimore, MD.
          </Typography>

          <Typography align="center" color="#dcd5b9">
            I'm passionate about traveling and in my free time you can either
            find me in the park with my dog or planning a trip (preferably to a
            beach somewhere).
          </Typography>
          <Typography align="center" color="#dcd5b9">
            I specialize in the PERN stack.
          </Typography>
        </Grid>
      </Box>
    </>
  );
};

export default AboutMe;
