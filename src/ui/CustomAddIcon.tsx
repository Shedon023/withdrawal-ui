import CircleIcon from "@mui/icons-material/Circle";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";

export const Add = () => (
  <Box
    sx={{
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
    <CircleIcon
      sx={{
        color: "#CECECE",
        position: "absolute",
      }}
    />
    <AddIcon
      sx={{
        color: "#000",
        zIndex: 1,
        padding: "2px",
      }}
    />
  </Box>
);
