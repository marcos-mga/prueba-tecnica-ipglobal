import React from "react";
import {
  Grid,
  Toolbar,
  Typography,
  Link,
  Paper,
  IconButton,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer: React.FC = () => {
  return (
    <Paper
      data-testid={"footer"}
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <Toolbar className={"topBar"}>
        <Typography variant="body1" color="inherit">
          © 2023 - Movies App
        </Typography>
        <Grid
          sx={{ marginLeft: "auto", display: "flex" }}
          justifyContent="space-between"
        >
          <Grid item xs={4} sm={4} md={2} sx={{ marginLeft: "auto" }}>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
          </Grid>
          <Grid
            item
            xs={4}
            sm={4}
            md={2}
            sx={{ marginLeft: "auto" }}
            alignSelf="center"
          >
            <Link
              sx={{ pr: 5 }}
              href="https://www.linkedin.com/in/marcos-manuel-garcía-aldao-26372712a"
              target="_blank"
              rel="noopener"
              className={"classes.link"}
            >
              Mi LinkedIn
            </Link>
            <Link
              href="https://github.com/marcos-mga/prueba-tecnica-ipglobal"
              target="_blank"
              rel="noopener"
              className={"classes.link"}
            >
              Repo de la prueba
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </Paper>
  );
};

export default Footer;
