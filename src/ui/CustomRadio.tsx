import CircleIcon from "@mui/icons-material/Circle";

import { Box } from "@mui/material";

export const CustomRadioCheckedIcon = () => (
  <Box
    sx={{
      position: "relative",
      width: 24,
      height: 24,
    }}>
    <CircleIcon />

    <CircleIcon
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: 12,
        color: "#000",
      }}
    />
  </Box>
);
