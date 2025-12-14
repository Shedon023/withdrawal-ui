import { Box, Card, CardContent, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const WithdrawalMethod = () => {
  return (
    <>
      <Typography variant='h6' mb={2}>
        Способ вывода
      </Typography>

      <ToggleButtonGroup fullWidth exclusive value='bank'>
        <ToggleButton value='bank'>Банки</ToggleButton>
        <ToggleButton value='cash'>Наличные</ToggleButton>
        <ToggleButton value='courier'>Курьер</ToggleButton>
      </ToggleButtonGroup>

      <Card>
        <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box display='flex' alignItems='center' gap={1}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                backgroundColor: "#6789B9",
              }}>
              <CurrencyRubleIcon sx={{ color: "#FFFFFF", fontSize: "35px" }} />
            </Box>

            <Box display='flex' flexDirection='column' gap='8px'>
              <Typography sx={{ fontSize: 16, fontWeight: 600 }}>Альфа-банк cash-in</Typography>
              <Typography variant='body2'>1 USDT = 61.55 RUR</Typography>
            </Box>
          </Box>
          <ExpandMoreIcon />
        </CardContent>
      </Card>
    </>
  );
};
