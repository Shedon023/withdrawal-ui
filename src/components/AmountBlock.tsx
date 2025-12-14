import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import { Add } from "../ui/CustomAddIcon";
import { Remove } from "../ui/CustomRemoveIcon";

type AmountBlockProps = {
  title: string;
  currency: string;
  value: string;
  bordered?: boolean;
  height?: number | string;
  titleAlign?: "left" | "center" | "right";
};

export const AmountBlock = ({
  title,
  currency,
  value,
  bordered = false,
  height = 30,
  titleAlign = "left",
}: AmountBlockProps) => (
  <Box>
    <Typography
      variant='body2'
      mb={0.5}
      sx={{
        textAlign: titleAlign,
      }}>
      {title}
    </Typography>

    <Card className={`AmountBlock ${bordered ? "bordered" : ""}`}>
      <CardContent className='AmountBlock-content'>
        <Typography variant='body2' sx={{ textAlign: "center", fontSize: 12 }}>
          {currency}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            minHeight: "36px",
            height: height,
          }}>
          <IconButton size='small' className='AmountBlock-button AmountBlock-button-minus'>
            <Remove />
          </IconButton>

          <Typography variant='body1'>{value}</Typography>

          <IconButton size='small' className='AmountBlock-button AmountBlock-button-plus'>
            <Add />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  </Box>
);
