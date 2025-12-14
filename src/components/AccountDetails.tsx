import { Box, Card, CardContent, Checkbox, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Done";
import CircleIcon from "@mui/icons-material/Circle";
import { CustomRadioCheckedIcon } from "../ui/CustomRadio";
import { EditableField } from "./EditableField";

export const AccountDetails = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography variant='h6'>Реквизиты</Typography>
        <Box display='flex' alignItems='center' gap={1}>
          <Typography variant='body2'>Сохранить реквизиты</Typography>
          <Checkbox
            checkedIcon={
              <Box
                sx={{
                  border: "2px solid #FFDD2F",
                  borderRadius: "20%",
                  backgroundColor: "#FFDD2F",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <CheckIcon sx={{ color: "#000000", fontSize: 16 }} />
              </Box>
            }
            checked
          />
        </Box>
      </Box>

      <Card sx={{ mb: 2 }}>
        <CardContent>
          <RadioGroup row value='card' sx={{ mb: 2 }}>
            <FormControlLabel
              control={
                <Radio
                  icon={
                    <CircleIcon
                      sx={{
                        color: "#C7C7CC",
                        fontSize: 24,
                      }}
                    />
                  }
                  checkedIcon={<CustomRadioCheckedIcon />}
                />
              }
              value='card'
              label='Номер карты'
            />
            <FormControlLabel value='contract' control={<Radio />} label='Номер договора' />
          </RadioGroup>

          <EditableField placeholder='Номер карты' />
        </CardContent>
      </Card>

      <Card sx={{ mb: 2 }}>
        <CardContent>
          <EditableField placeholder='ФИО владельца' />
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <EditableField placeholder='Адрес' />
        </CardContent>
      </Card>
    </>
  );
};
