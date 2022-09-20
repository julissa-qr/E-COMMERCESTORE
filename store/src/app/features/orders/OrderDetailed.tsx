import { Box, Button, Grid, Typography } from "@mui/material";
import { BasketItem } from "../../models/basket";
import { Order } from "../../models/order"
import BasketSummary from "../basket/BasketSummary";
import BasketTable from "../basket/BasketTable";


interface Props {
    order: Order;
    setSelectedOrder: (id: number) => void;
}

export default function OrderDetailed({ order, setSelectedOrder }: Props) {
    const subtotal = order.orderItems.reduce((sum, item) => sum + (item.quantity * item.price), 0) ?? 0;
    return (
        <>
            <Box display='flex' justifyContent='space-between'>
                <Typography sx={{ p: 2 }} gutterBottom variant="h4" >Order {order.id} - {order.orderStatus}</Typography>
            </Box>
            <BasketTable items={order.orderItems as BasketItem[]} isBasket={false} />
            <Grid container>
                <Grid item xs={6} />
                <Grid item xs={6}>
                    <BasketSummary subtotal={subtotal} />
                    <Button  onClick={() => setSelectedOrder((0))} sx={{ m: 0 }} size='large' variant='contained' >Back to orders</Button>
                </Grid>
            </Grid>
        </>
    )
}