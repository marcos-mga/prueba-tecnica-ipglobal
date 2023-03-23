import React from "react";
import { Grid, Toolbar, Typography, Link, Paper } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <Toolbar className={"topBar"}>
        <Typography variant="body1" color="inherit">
          © 2023 - Movies App
        </Typography>
        <Grid sx={{ marginLeft: "auto" }} justifyContent="space-between">
          <Link
            sx={{ pr: 5 }}
            href="https://github.com/marcos-mga/prueba-tecnica-ipglobal"
            target="_blank"
            rel="noopener"
            className={"classes.link"}
          >
            Repo de la prueba
          </Link>
          <Link
            href="https://www.linkedin.com/in/marcos-manuel-garcía-aldao-26372712a"
            target="_blank"
            rel="noopener"
            className={"classes.link"}
          >
            Mi LinkedIn
          </Link>
        </Grid>
      </Toolbar>
    </Paper>
  );
};

export default Footer;
