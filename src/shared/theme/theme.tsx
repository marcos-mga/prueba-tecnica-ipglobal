import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#e50914",
      dark: "#b2070f",
      contrastText: "#fff",
    },
    secondary: {
      main: "#000",
      contrastText: "#fff",
    },
    background: {
      default: "#000",
      paper: "#141414",
    },
  },
  typography: {
    fontFamily:
      "'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "linear-gradient(to bottom, #141414, #191919)",
          boxShadow: "none",
        },
        colorPrimary: {
          color: "#e50914",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#141414",
          color: "#fff",
          borderRadius: 5,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          fontWeight: "bold",
        },
        containedPrimary: {
          backgroundColor: "#e50914",
          "&:hover": {
            backgroundColor: "#b2070f",
          },
        },
        outlinedPrimary: {
          borderColor: "#e50914",
          "&:hover": {
            borderColor: "#b2070f",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 3,
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        ul: {
          justifyContent: "center",
        },
      },
      variants: [
        {
          props: { variant: "text" },
          style: {
            "& .MuiPaginationItem-root": {
              color: "#fff",
            },
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            "& .MuiPaginationItem-root": {
              color: "#fff",
              borderColor: "#fff",
            },
            "& .Mui-selected": {
              backgroundColor: "#fff",
              color: "#000",
            },
          },
        },
      ],
    },
    MuiRating: {
      styleOverrides: {
        root: {
          color: "#e50914",
        },
        iconFilled: {
          color: "#fff",
        },
        iconEmpty: {
          color: "#fff",
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          color: "#fff",
          minWidth: "100%",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#e50914",
        },
      },
    },
  },
});
