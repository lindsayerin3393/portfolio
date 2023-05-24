import React from "react";
import { Box, Grid, Typography, Stack } from "@mui/material";
import java from "../images/Java.png";

const Skills = () => {
  return (
    <div id="skills">
      <Box height="100vh" width="100vw" display="flex">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h3" align="center" margin={3} color="#dcd5b9">
            Skills
          </Typography>
          <Stack direction="row" spacing={3}>
            <Box
              component="img"
              sx={{
                height: 100,
                width: 100,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="Javascript"
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            />
            <Box
              component="img"
              sx={{
                height: 100,
                width: 100,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="Java"
              src={java}
            />
            <Box
              component="img"
              sx={{
                height: 100,
                width: 100,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="HTML"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Devicon-html5-plain-wordmark.svg/800px-Devicon-html5-plain-wordmark.svg.png"
            />
            <Box
              component="img"
              sx={{
                height: 100,
                width: 80,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="CSS"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
            />
            <Box
              component="img"
              sx={{
                height: 100,
                width: 100,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="React"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            />
            <Box
              component="img"
              sx={{
                height: 100,
                width: 100,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="Redux"
              src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
            />
            <Box
              component="img"
              sx={{
                height: 100,
                width: 100,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="Node.js"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png"
            />
            <Box
              component="img"
              sx={{
                height: 100,
                width: 100,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="Sequelize"
              src="https://seeklogo.com/images/S/sequelize-logo-9A5075DB9F-seeklogo.com.png"
            />
          </Stack>
        </Grid>
      </Box>
    </div>
  );
};

export default Skills;
