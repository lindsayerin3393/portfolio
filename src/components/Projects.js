import React from "react";
import { motion } from "framer-motion";
import toadImg from "../images/toadScreenshot.png";
import honey from "../images/everythingHoney.png";
import jpfp from "../images/jpfp.png";
import welp from "../images/welp.png";
import {
  Grid,
  Typography,
  CardMedia,
  CardContent,
  Card,
  IconButton,
  Stack,
} from "@mui/material";
import { GitHub, Launch } from "@mui/icons-material";

const Projects = () => {
  return (
    <>
      {/* <Box height="100vh" width="100vw" display="flex"> */}
      <Grid container display="flex" direction="column" justifyContent="center">
        <Typography variant="h3" align="center" margin={3} color="#dcd5b9">
          Cool Projects
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          margin={3}
        >
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <Card
              raised
              sx={{
                width: 280,
                ml: 10,
                mb: 3,
                padding: "0.1em",
              }}
            >
              <CardMedia
                component="img"
                image={toadImg}
                height="300"
                width="200"
              />
              <CardContent>
                <Typography>Toad's Garden</Typography>
                <IconButton
                  href="https://github.com/toads-garden/toads-garden-web"
                  target="_blank"
                  color="secondary"
                  disableRipple
                  sx={{ m: 1, ":hover": { color: "maroon" } }}
                >
                  <GitHub></GitHub>
                </IconButton>
                <IconButton
                  href="https://toads-garden.onrender.com"
                  target="_blank"
                  color="secondary"
                  disableRipple
                  sx={{ m: 1, ":hover": { color: "maroon" } }}
                >
                  <Launch></Launch>
                </IconButton>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <Card
              raised
              sx={{
                width: 280,
                ml: 10,
                mb: 3,
                padding: "0.1em",
              }}
            >
              <CardMedia component="img" image={welp} height="300" width="10" />
              <CardContent>
                <Typography>W.E.L.P.</Typography>
                <IconButton
                  href="https://github.com/Duck-Team-Pluto/Planet-Quackathon"
                  target="_blank"
                  color="secondary"
                  disableRipple
                  sx={{ m: 1, ":hover": { color: "maroon" } }}
                >
                  <GitHub></GitHub>
                </IconButton>
                <IconButton
                  href="https://welp-y6ke.onrender.com/"
                  target="_blank"
                  color="secondary"
                  disableRipple
                  sx={{ m: 1, ":hover": { color: "maroon" } }}
                >
                  <Launch></Launch>
                </IconButton>
              </CardContent>
            </Card>
          </motion.div>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          margin={3}
        >
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <Card
              raised
              sx={{
                width: 280,
                ml: 10,
                mb: 3,
                padding: "0.1em",
              }}
            >
              <CardMedia component="img" src={honey} height="300" width="100" />
              <CardContent>
                <Typography>Everything Honey</Typography>
                <IconButton
                  href="https://github.com/Anteater-GraceShopper/graceshopper-project"
                  target="_blank"
                  color="secondary"
                  disableRipple
                  sx={{ m: 1, ":hover": { color: "maroon" } }}
                >
                  <GitHub></GitHub>
                </IconButton>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <Card
              raised
              sx={{
                width: 280,
                ml: 10,
                mb: 3,
                padding: "0.1em",
              }}
            >
              <CardMedia
                component="img"
                image={jpfp}
                height="300"
                width="100"
              />
              <CardContent>
                <Typography>Wizarding Schools Directory</Typography>
                <IconButton
                  href="https://github.com/lindsayerin3393/2211-GHP-ET-WEB-FT-JPFP"
                  target="_blank"
                  color="secondary"
                  disableRipple
                  sx={{ m: 1, ":hover": { color: "maroon" } }}
                >
                  <GitHub></GitHub>
                </IconButton>
              </CardContent>
            </Card>
          </motion.div>
        </Stack>
      </Grid>
      {/* </Box> */}
    </>
  );
};

export default Projects;
