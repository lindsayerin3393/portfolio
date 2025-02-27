import React from "react";
import { motion } from "framer-motion";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Stack,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
} from "@mui/material";
import { CheckCircle, Launch } from "@mui/icons-material";

const JobExperience = () => {
  return (
    <div id="experience">
      <Grid
        container
        display="flex"
        direction="column"
        justifyContent="center"
        color="#dcd5b9"
      >
        <Typography variant="h3" align="center" margin={3} color="#dcd5b9">
          Job Experience
        </Typography>
        <Stack
          display="flex"
          justifyContent="center"
          alignItems="center"
          margin={3}
        >
          <motion.div whileHover={{ scale: 1.1 }}>
            <Card
              raised
              sx={{
                width: 400,
                padding: "1.5em",
                textAlign: "left",
                backgroundColor: "#e0e7ef", // Light blue-grey
                color: "#2b2b2b", // Darker text for contrast
                borderRadius: "12px", // Soft rounded edges
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
              }}
            >
              <CardContent>
                <Typography variant="h5" align="center">
                  IT Engineer
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="secondary"
                  align="center"
                >
                  University of Maryland, College Park
                </Typography>
                <Typography variant="body2" align="center" marginTop={1}>
                  July 2023 - Present
                </Typography>

                <List sx={{ marginTop: 2 }}>
                  {[
                    "Spearheaded the development and ongoing enhancement of AI-powered chatbots utilizing Retrieval-Augmented Generation (RAG) for the UMD community, integrating Langchain, Azure, and AWS services.",
                    "Designed and implemented an administrator console using REST APIs to streamline chatbot management and provide comprehensive data insights.",
                    "Leveraged AWS assets, including API Gateway, DynamoDB, CloudWatch, and Lambda, to build scalable, resilient, and cost-effective solutions.",
                    "Collaborated with cross-functional teams to ensure seamless integration of AI solutions into existing UMD infrastructure, resulting in improved user engagement and operational efficiency.",
                  ].map((point, index) => (
                    <ListItem key={index} sx={{ alignItems: "start" }}>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: "#2b2b2b" }} />
                      </ListItemIcon>
                      <ListItemText primary={point} />
                    </ListItem>
                  ))}
                </List>

                {/* Call-to-Action Section */}
                <Typography
                  variant="body1"
                  align="center"
                  marginTop={3}
                  color="secondary"
                >
                  Check out some of the chatbots I helped create on the bottom
                  right of these pages! Just press 'Chat'!
                </Typography>
                <Stack
                  direction="row"
                  justifyContent="center"
                  spacing={2}
                  mt={1}
                >
                  <Link
                    href="https://billpay.umd.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="secondary"
                    underline="hover"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    Bill Pay <Launch fontSize="small" sx={{ ml: 0.5 }} />
                  </Link>
                  <Link
                    href="https://health.umd.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="secondary"
                    underline="hover"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    UMD Health <Launch fontSize="small" sx={{ ml: 0.5 }} />
                  </Link>
                </Stack>
              </CardContent>
            </Card>
          </motion.div>
        </Stack>
      </Grid>
    </div>
  );
};

export default JobExperience;
