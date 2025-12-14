import RemoveIcon from "@mui/icons-material/Remove";
import CircleIcon from "@mui/icons-material/Circle";
import { Box } from "@mui/material";

export const Remove = () => {
  return (
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
      <RemoveIcon
        sx={{
          zIndex: 1,
          color: "#000",
          padding: "4px",
        }}
      />
    </Box>
  );
};
