import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../context/StoreContext";
import BasketSummary from "./BasketSummary";
import BasketTable from "./BasketTable";

export default function BasketPage() {
  
  const { basket } = useStoreContext();
  
  if (!basket) return <Typography variant="h3">Your basket is empty</Typography>

  return (
    <>
      <BasketTable items={basket.items} />
      <Grid container>
        <Grid item xs={6} />
        <Grid item xs={6}>
          <BasketSummary />
          <Button
            component={Link}
            to='/checkout'
            variant='contained'
            size='large'
            fullWidth
          >
            Checkout
          </Button>
        </Grid>
      </Grid>
    </>
  )
}