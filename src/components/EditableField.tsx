import { Box, TextField } from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";

export const EditableField = ({ placeholder }: { placeholder: string }) => (
  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    <TextField placeholder={placeholder} fullWidth size='small' />
    <BorderColorIcon />
  </Box>
);
