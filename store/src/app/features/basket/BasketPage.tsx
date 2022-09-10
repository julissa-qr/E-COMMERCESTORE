import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import agent from "../../api/agent";
import LoadingComponent from "../../layout/LoadingComponents";
import { Basket } from "../../models/basket";

export default function BasketPage() {
    const [loading, setLoading] = useState(true);
    const [basket, setBasket] = useState<Basket | null>(null);

    useEffect(() => {
        agent.Basket.get()
            .then(basket => setBasket(basket))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [])

    if (loading) return <LoadingComponent message='loading basket...' />
   
    if (!basket) return <Typography variant="h3">Your basket is empty</Typography>

    return (
        <h1>Customer Id = {basket.customerId} </h1>
    )
}