"use client";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const baseTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1a3c5e", // Deep Navy
      light: "#2d5f8a",
      dark: "#0f2540",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#e8a838", // Warm Gold
      light: "#f0c060",
      dark: "#c78820",
      contrastText: "#1a1a2e",
    },
    background: {
      default: "#f8f9fa",
      paper: "#ffffff",
    },
    text: {
      primary: "#1a1a2e",
      secondary: "#5a6a7a",
    },
    success: {
      main: "#2e7d52",
    },
    error: {
      main: "#c62828",
    },
    divider: "#e0e8f0",
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "10px 24px",
          fontSize: "0.95rem",
        },
        containedPrimary: {
          background: "linear-gradient(135deg, #1a3c5e 0%, #2d5f8a 100%)",
          boxShadow: "0 4px 14px rgba(26, 60, 94, 0.3)",
          "&:hover": {
            background: "linear-gradient(135deg, #0f2540 0%, #1a3c5e 100%)",
            boxShadow: "0 6px 20px rgba(26, 60, 94, 0.4)",
          },
        },
        containedSecondary: {
          background: "linear-gradient(135deg, #e8a838 0%, #f0c060 100%)",
          boxShadow: "0 4px 14px rgba(232, 168, 56, 0.3)",
          "&:hover": {
            background: "linear-gradient(135deg, #c78820 0%, #e8a838 100%)",
          },
        },
        outlinedPrimary: {
          borderWidth: 2,
          "&:hover": { borderWidth: 2 },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 2px 20px rgba(26, 60, 94, 0.08)",
          borderRadius: 14,
          border: "1px solid rgba(26, 60, 94, 0.07)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 32px rgba(26, 60, 94, 0.15)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "0 1px 20px rgba(26, 60, 94, 0.08)",
        },
      },
    },
  },
});

export const theme = responsiveFontSizes(baseTheme);
