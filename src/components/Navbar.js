import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Button, AppBar, Toolbar, IconButton, Box } from "@mui/material";
import {
  Home,
  LinkedIn,
  GitHub,
  Email,
  Description,
} from "@mui/icons-material";

const App = () => {
  // const onDownload = () => {
  //   const link = document.createElement("a");
  //   link.download = `Powell_Resume.pdf`;
  //   link.href = { resume };
  //   link.click();
  // };
  return (
    <div>
      <BrowserRouter>
        <AppBar
          position="fixed"
          sx={{ backdropFilter: "blur(20px)" }}
          style={{ backgroundColor: "transparent", boxShadow: "none" }}
        >
          <Toolbar sx={{ p: -1 }}>
            <Box sx={{ display: "flex", flexGrow: 1 }}>
              <IconButton
                href="/"
                color="primary"
                disableRipple
                sx={{ ":hover": { color: "white" } }}
              >
                <Home></Home>
              </IconButton>
              <Button
                component={HashLink}
                smooth
                to="#aboutme"
                color="primary"
                variant="text"
                disableRipple
                sx={{
                  m: 1,
                  ":hover": {
                    backgroundColor: "transparent",
                    color: "white",
                  },
                }}
              >
                About Me
              </Button>
              <Button
                component={HashLink}
                smooth
                to="#skills"
                color="primary"
                variant="text"
                disableRipple
                sx={{
                  m: 1,
                  ":hover": {
                    backgroundColor: "transparent",
                    color: "white",
                  },
                }}
              >
                Skills
              </Button>
              <Button
                component={HashLink}
                smooth
                to="#projects"
                color="primary"
                variant="text"
                disableRipple
                sx={{
                  m: 1,
                  ":hover": {
                    backgroundColor: "transparent",
                    color: "white",
                  },
                }}
              >
                Projects
              </Button>
              <Button
                component={HashLink}
                smooth
                to="#contact"
                color="primary"
                variant="text"
                disableRipple
                sx={{
                  m: 1,
                  ":hover": {
                    backgroundColor: "transparent",
                    color: "white",
                  },
                }}
              >
                Contact
              </Button>
            </Box>
            <IconButton
              href="https://github.com/lindsayerin3393"
              target="_blank"
              color="primary"
              disableRipple
              sx={{ m: 1, ":hover": { color: "white" } }}
            >
              <GitHub></GitHub>
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/lindsay-powell3/"
              target="_blank"
              color="primary"
              disableRipple
              sx={{ m: 1, ":hover": { color: "white" } }}
            >
              <LinkedIn></LinkedIn>
            </IconButton>
            <IconButton
              href="mailto:lindsayerin3393@gmail.com"
              color="primary"
              disableRipple
              sx={{ m: 1, ":hover": { color: "white" } }}
            >
              <Email></Email>
            </IconButton>
            <Button
              startIcon={<Description />}
              color="primary"
              variant="outlined"
              href="./resume.pdf"
              disableRipple
              sx={{
                m: 1,
                ":hover": {
                  backgroundColor: "transparent",
                  color: "white",
                },
              }}
            >
              Download Resume
            </Button>
          </Toolbar>
        </AppBar>
        <Toolbar></Toolbar>
        <main>
          <Routes>{/* <Route path="/" element={<Homepage />} /> */}</Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
