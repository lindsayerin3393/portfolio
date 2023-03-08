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
          <Typography variant="h3" align="center" color="#000080">
            Hello!
          </Typography>
          <Typography variant="h5" align="center" color="#000080">
            I'm Lindsay, a full stack software engineer based in Baltimore, MD.
          </Typography>

          <Typography align="center" color="#000080">
            I'm passionate about traveling and in my free time you can either
            find me in the park with my dog or planning a trip.
          </Typography>
        </Grid>
      </Box>
    </>
  );
};

export default AboutMe;
