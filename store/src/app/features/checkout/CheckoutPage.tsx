import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function CheckoutPage() {
    return (
        
        <Typography variant="h3">
            Only logged in users should be able to see this!
        </Typography>
        
    )

}