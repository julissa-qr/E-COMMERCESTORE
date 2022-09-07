import { Button, ButtonGroup, Typography } from "@mui/material";
import { Container } from "@mui/system";
import agent from "../../api/agent";

export default function AboutUs(){
   return(
    <Container>
        <Typography gutterBottom variant="h2" > Errors for testingg </Typography>
        <ButtonGroup fullWidth>
            <Button variant="contained" onClick={() => agent.TestErrors.get400Error().catch(error => console.log(error))}>Test400Error</Button>
            <Button variant="contained" onClick={() => agent.TestErrors.get401Error().catch(error => console.log(error))}>Test401Error</Button>
            <Button variant="contained" onClick={() => agent.TestErrors.get404Error().catch(error => console.log(error))}>Test404Error</Button>
            <Button variant="contained" onClick={() => agent.TestErrors.get500Error().catch(error => console.log(error))}>Test500Error</Button>
            <Button variant="contained" onClick={() => agent.TestErrors.getValidationError().catch(error => console.log(error))}>Test Validation</Button>
        </ButtonGroup>
    </Container>
   )
}