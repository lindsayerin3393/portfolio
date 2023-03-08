import React from "react";
import { Box, Grid, Typography, Stack } from "@mui/material";

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
          <Typography variant="h4" align="center" margin={3} color="maroon">
            Skills
          </Typography>
          <Stack direction="row" spacing={6}>
            <Box
              component="img"
              sx={{
                height: 100,
                width: 150,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="Javascript"
              src="https://thumbs.dreamstime.com/b/javascript-logo-javascript-logo-white-background-vector-format-available-136765881.jpg"
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
              src="https://p.kindpng.com/picc/s/23-237381_java-html-language-logo-png-transparent-png.png"
            />
            <Box
              component="img"
              sx={{
                height: 90,
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
