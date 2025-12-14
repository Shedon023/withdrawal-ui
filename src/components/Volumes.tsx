import { Box, Typography } from "@mui/material";
import { AmountBlock } from "./AmountBlock";

export const Volumes = () => {
  return (
    <>
      <Typography variant='h6'>Объемы</Typography>
      <Box display='grid' gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr" }} gap={2} mt={1}>
        <AmountBlock title='Отдаете (лот 1000)' currency='Ethereum, ETH' value='1 300.00000' bordered={true} />
        <AmountBlock title='Получаете (лот 1000)' currency='Рубль, RUR' value='1 200.00' titleAlign='right' />
      </Box>
    </>
  );
};
