import { useState } from "react";
import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollToTopButton = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Fab
        color="primary"
        aria-label="scroll to top"
        onClick={handleClick}
        sx={{
          position: "fixed",
          bottom: 50,
          right: 50,
          color: "orange",
          backgroundColor: "blue",
        }}
      >
        <KeyboardArrowUpIcon
          sx={{ color: "orange", backgroundColor: "blue"  , height: 20, width: 20}}
        />
      </Fab>
    </>
  );
};

export default ScrollToTopButton;
