import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f3f3f3",
        width: "100%",
        padding: "20px 0",
        marginTop: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              color="#676767"
              gutterBottom
              sx={{ fontSize: "40px", fontWeight: "bold" }}
            >
              parleto
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              color="#676767"
              gutterBottom
              sx={{ fontSize: "25px" }}
            >
              Contact Us
            </Typography>
            <Typography variant="body2" color="#676767">
              Email: info@example.com
            </Typography>
            <Typography variant="body2" color="#676767">
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              color="#676767"
              gutterBottom
              sx={{ fontSize: "25px" }}
            >
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="#039ade">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="#ec6d6d"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="#60c6f4">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
