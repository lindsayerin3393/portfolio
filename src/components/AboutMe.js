import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { easeInOut, motion } from "framer-motion";

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
          <motion.h2
            initial={{ x: 0 }}
            animate={{ scale: [1, 2, 2, 1, 1] }}
            transition={{
              ease: easeInOut,
              duration: "2",
              delay: "1",
            }}
          >
            <Typography variant="h2" align="center" color="#dcd5b9" margin={2}>
              Hello!
            </Typography>
          </motion.h2>
          <Typography variant="h4" align="center" color="#dcd5b9" margin={1}>
            I'm Lindsay, a fullstack software engineer based in Baltimore, MD.
          </Typography>

          <Typography variant="h5" align="center" color="#dcd5b9" margin={1}>
            I'm passionate about traveling and in my free time you can either
            find me in the park with my dog or planning a trip (preferably to a
            beach somewhere).
          </Typography>
          <Typography variant="h5" align="center" color="#dcd5b9" margin={1}>
            I specialize in the PERN stack.
          </Typography>
        </Grid>
      </Box>
    </>
  );
};

export default AboutMe;
