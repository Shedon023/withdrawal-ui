import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    background: {
      default: "#F3F3F3",
    },

    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#FAD700",
    },

    info: {
      main: "#109AFE",
    },
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    h6: {
      fontWeight: 600,
      fontSize: 18,
      lineHeight: 1.2,
    },
    body1: {
      fontSize: 15,
    },
    body2: {
      fontSize: 13,
      color: "#CECECE",
      lineHeight: 1.3,
    },
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          gap: 8,
          marginBottom: 16,
          width: 300,
        },
        grouped: {
          border: "none !important",
          margin: 0,
          "&:not(:first-of-type)": {
            marginLeft: 0,
            borderLeft: "none",
            borderRadius: "18px !important",
          },
          "&:first-of-type": {
            borderRadius: "18px !important",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: "20px",
          backgroundColor: "#F7F7F7",
          borderRadius: 12,
          "& fieldset": {
            border: "none",
          },
        },
        input: {
          "&::placeholder": {
            color: "primary",
            opacity: 1,
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          border: 0,
          borderRadius: "18px !important",
          background: "#F2F2F7",
          padding: "8px 16px",
          fontSize: "14px",
          fontWeight: 600,
          textTransform: "none",
          color: "#000",
          "&.Mui-selected": {
            background: "#000",
            color: "#FFFFFF",
            "&:hover": {
              background: "#000",
            },
          },
          "&:hover": {
            background: "#E5E5EA",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          boxShadow: "none",
          background: "#F7F7F7",
          marginBottom: 8,
          overflow: "hidden",

          "&.AmountBlock": {
            height: "auto",
            minHeight: "80px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",

            "&.bordered": {
              border: "3px solid #109AFE",
              borderRadius: 0,
            },
            "&:not(.bordered)": {
              border: "1px solid #E0E0E0",
              borderRadius: "10px",
            },
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "16px !important",
          "&:last-child": {
            paddingBottom: "16px !important",
          },
          "&.MuiCardContent-root:first-of-type": {
            paddingBottom: "12px !important",
          },

          "&.AmountBlock-content": {
            padding: "12px !important",
            "&:last-child": {
              paddingBottom: "12px !important",
            },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
          },
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        h6: {
          marginTop: 24,
          marginBottom: 16,

          "&.AmountBlock-value": {
            fontWeight: 600,
            fontSize: "16px",
            textAlign: "center",
            flex: 1,
          },
        },
        body1: {
          fontSize: 15,
          lineHeight: 1.4,

          "&.AmountBlock-currency": {
            fontSize: "15px",
            color: "primary",
            marginBottom: "8px",
            lineHeight: 1.2,
            textAlign: "center",
          },
        },
        body2: {
          fontSize: 13,
          color: "#8E8E93",
          lineHeight: 1.3,

          "&.AmountBlock-title": {
            color: "#8E8E93",
            marginBottom: "4px",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&.AmountBlock-button": {
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 1,
            "&.AmountBlock-button-minus": {
              left: "8px",
            },
            "&.AmountBlock-button-plus": {
              right: "8px",
            },
            "& .MuiSvgIcon-root": {
              fontSize: "30px",
            },
          },
        },
        sizeSmall: {
          padding: "4px",
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        color: "secondary",
      },
      styleOverrides: {
        root: {
          padding: 4,

          color: "#FAD700",
          "&.Mui-checked": {
            color: "#FAD700",

            "& .MuiSvgIcon-root": {
              "& path": {
                fill: "#000000",
              },
            },
          },

          "&:not(.Mui-checked)": {
            color: "#FAD700",
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: 6,
          "&.Mui-checked": {
            color: "#FAD700",
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          marginRight: 16,
          "&:last-child": {
            marginRight: 0,
          },
        },
        label: {
          fontSize: "14px",
          fontWeight: 400,
          color: "primary",
        },
      },
    },
    MuiRadioGroup: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "row",
          gap: 8,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingTop: 16,
          paddingBottom: 16,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
        size: "small",
      },
      styleOverrides: {
        root: {
          "& fieldset": {
            border: "none",
          },

          "&::placeholder": {
            color: "primary",
          },
          background: "#F7F7F7",
          borderRadius: 12,
        },
      },
    },
  },
});
