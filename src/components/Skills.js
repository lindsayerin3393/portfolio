import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const Skills = () => {
  return (
    <div>
      <Box height="100vh" width="100vw" display="flex">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h4" align="center" margin={3}>
            Skills
          </Typography>
        </Grid>
      </Box>
    </div>
  );
};

export default Skills;
