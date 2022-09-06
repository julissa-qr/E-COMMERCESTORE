import { Button, ButtonGroup, Typography } from "@mui/material";
import { Container } from "@mui/system";
import agent from "../../api/agent";

export default function AboutUs(){
   return(
    <Container>
        <Typography gutterBottom variant="h2" > Errors for testingg </Typography>
        <ButtonGroup fullWidth>
            <Button variant="contained" onClick={() => agent.TestErrors.get400Error()}>Test400Error</Button>
            <Button variant="contained" onClick={() => agent.TestErrors.get401Error()}>Test401Error</Button>
            <Button variant="contained" onClick={() => agent.TestErrors.get404Error()}>Test404Error</Button>
            <Button variant="contained" onClick={() => agent.TestErrors.get500Error()}>Test500Error</Button>
            <Button variant="contained" onClick={() => agent.TestErrors.getValidationError()}>Test Validation</Button>
        </ButtonGroup>
    </Container>
   )
}