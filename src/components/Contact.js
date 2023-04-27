import React from "react";
import { Typography, Box, Grid, Button } from "@mui/material";
import { Mail } from "@mui/icons-material";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <Box height="100vh" width="100vw" display="flex">
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h2" align="center" margin={3} color="#dcd5b9">
              Let's Connect!
            </Typography>
            <Typography variant="h5" align="center" margin={3} color="#dcd5b9">
              Want to collaborate?
            </Typography>
            <Button
              startIcon={<Mail />}
              href="mailto:lindsayerin3393@gmail.com"
              color="primary"
              variant="contained"
              disableRipple
              sx={{
                m: 1,
                ":hover": {
                  backgroundColor: "transparent",
                  color: "white",
                },
              }}
            >
              Email Me
            </Button>
          </Grid>
        </Box>
      </section>
    </>
  );
};

export default Contact;
