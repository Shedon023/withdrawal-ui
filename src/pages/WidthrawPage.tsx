import { Container } from "@mui/material";
import { WithdrawalMethod } from "../components/WithdrawalMethod";
import { Volumes } from "../components/Volumes";
import { AccountDetails } from "../components/AccountDetails";
import { VolumeSlider } from "../components/VolumeSlider";

export default function WithdrawalPage() {
  return (
    <>
      <Container maxWidth='sm'>
        <WithdrawalMethod />
        <Volumes />
        <VolumeSlider />
        <AccountDetails />
      </Container>
    </>
  );
}
