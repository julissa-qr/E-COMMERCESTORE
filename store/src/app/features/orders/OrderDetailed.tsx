import { Box, Grid } from "@mui/material";
import { Order } from "../../models/order"
import BasketTable from "../basket/BasketTable";


interface Props {
    order: Order;
    setSelectedOrder: (id: number) => void;
}

export default function OrderDetailed({ order, setSelectedOrder }: Props) {
    const subtotal = order.orderItems.reduce((sum, item) => sum + (item.quantity * item.price), 0) ??
    return (
        <>
            <Box>
                
            </Box>
            <BasketTable />
            <Grid>

            </Grid>
        </>
    )
}