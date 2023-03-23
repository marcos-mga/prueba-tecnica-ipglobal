import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const emptyState: React.FC = () => {
  return (
    <>
      <Card>
        <CardMedia
          sx={{ height: "50vh" }}
          image="https://media.gettyimages.com/id/474749946/es/foto/young-boy-ejecutivo-tiene-cara-triste.jpg?s=2048x2048&w=gi&k=20&c=46cZf3gv-7aXQyRODLK6F_gCdzrUPDSIhwh9k301Iuk="
          title="No Results Found"
        />
        <CardContent>
          <Typography align="center" variant="h5" component="h2">
            NO RESULTS FOUND
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default emptyState;
