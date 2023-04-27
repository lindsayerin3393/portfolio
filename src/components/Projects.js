import React from "react";
import toadImg from "../images/toadScreenshot.png";
import honey from "../images/everythingHoney.png";
import jpfp from "../images/jpfp.png";
import welp from "../images/welp.png";
import {
  Box,
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
      <Box height="90vh" width="90vw" display="flex">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h4" align="center" margin={3} color="#dcd5b9">
            Projects
          </Typography>
          <Stack direction="row" spacing={6}>
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
          </Stack>
        </Grid>
      </Box>
    </>
  );
};

export default Projects;
