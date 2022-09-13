import { LoadingButton } from "@mui/lab";
import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import agent from "../../api/agent";
import { useStoreContext } from "../../context/StoreContext";
import NotFound from "../../errors/NotFound";
import LoadingComponent from "../../layout/LoadingComponents";
import { Product } from "../../models/product";


export default function ProductDetails() {
   debugger;

   const { basket, setBasket, removeItem } = useStoreContext();
   const { id } = useParams<{ id: string }>();
   const [product, setProduct] = useState<Product | null>(null);
   const [loading, setLoading] = useState(true);
   const [quantity, setQuantity] = useState(0);
   const [submitting, setSubmitting] = useState(false);
   const item = basket?.items.find(i => i.productId === product?.id);


   useEffect(() => {
      //agent.Catalog.details(parseInt(id))
      if (item) setQuantity(item.quantity);

      axios.get(`http://localhost:5000/api/Products/${id}`)
         .then(response => setProduct(response.data))
         .catch(error => console.log(error.response))
         .finally(() => setLoading(false));
   }, [id, item])

   function HandleInputChange(event: any) {
      if (event.target.value > 0) {
         setQuantity(parseInt(event.target.value));
      }
   }

   //checar si hay un item, ver si la canidad en local states es mayor que la cantidad de item
   function handleUpdateCart() {
      setSubmitting(true);
      //si local state es mayor, significa que estamos agregando a la cantidad de items
      //si no tenemos un item, significa que tambien estamos agregando item a basket

      if (!item || quantity > item.quantity) {
         const updatedQuantity = item ? quantity - item.quantity : quantity;
         agent.Basket.addItem(product?.id!, updatedQuantity)
            .then(basket => setBasket(basket))
            .catch(error => console.log(error))
            .finally(() => setSubmitting(false))
      } else {
         //queremos la diferencia entre item.quantity y quantity
         const updatedQuantity = item.quantity - quantity;
         agent.Basket.removeItem(product?.id!, updatedQuantity)
            .then(() => removeItem(product?.id!, quantity))
            .catch(error => console.log(error))
            .finally(() => setSubmitting(false))
      }
   }

   if (loading) return <LoadingComponent message="Loading..." />
   if (!product) return <NotFound />

   return (
      /*<Typography variant="h2">
         {product.name}
      </Typography>*/

      <Grid container spacing={6}>
         <Grid item xs={6}>
            <img src={product.pictureUrl} alt={product.name} style={{ width: '100%' }} />
         </Grid>
         <Grid item xs={6}>
            <Typography variant="h3">{product.name}</Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="h3" color='secondary'>${(product.price / 100).toFixed(2)}</Typography>
            <TableContainer>
               <Table>
                  <TableBody>
                     <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>{product.name}</TableCell>
                     </TableRow>

                     <TableRow>
                        <TableCell>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                     </TableRow>

                     <TableRow>
                        <TableCell>Type</TableCell>
                        <TableCell>{product.type}</TableCell>
                     </TableRow>

                     <TableRow>
                        <TableCell>Brand</TableCell>
                        <TableCell>{product.brand}</TableCell>
                     </TableRow>

                     <TableRow>
                        <TableCell>Quantity in stock</TableCell>
                        <TableCell>{product.quantityInStock}</TableCell>
                     </TableRow>
                  </TableBody>
               </Table>
            </TableContainer>
            <Grid container spacing={3}>
               <Grid item xs={6}>
                  <TextField
                     onChange={HandleInputChange}
                     variant='outlined'
                     type='number'
                     label='Quantity in Card'
                     fullWidth
                     value={quantity}
                  />
               </Grid>
               <Grid item xs={6}>
                  <LoadingButton
                     loading={submitting}
                     onClick={handleUpdateCart}
                     sx={{ height: '55px' }}
                     color='primary'
                     size='large'
                     variant='contained'
                     fullWidth
                  >
                     {item ? 'Update Quantity' : 'Add to cart'}
                  </LoadingButton>
               </Grid>
            </Grid>
         </Grid>
      </Grid>
   )
}