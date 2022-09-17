import { LoadingButton } from "@mui/lab";
import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../../errors/NotFound";
import LoadingComponent from "../../layout/LoadingComponents";
import { useAppDispatch, useAppSelector } from "../../store/configureStore";
import { addBasketItemAsync, removeBasketItemAsync } from "../basket/basketSlice";
import { productSelectors } from "./catalogSlice";


export default function ProductDetails() {
    //const [product, setProduct] = useState<Product | null>(null);
   //const { basket, setBasket, removeItem } = useStoreContext();
   const { basket, status } = useAppSelector(state => state.basket);
   const dispatch = useAppDispatch();

   const { id } = useParams<{ id: string }>();
   const product = useAppSelector(state => productSelectors.selectById(state, id));
   
   const [loading, setLoading] = useState(true);
   const [quantity, setQuantity] = useState(0);
   //const [submitting, setSubmitting] = useState(false);
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
      //setSubmitting(true);
      //si local state es mayor, significa que estamos agregando a la cantidad de items
      //si no tenemos un item, significa que tambien estamos agregando item a basket

      if (!item || quantity > item.quantity) {
         const updatedQuantity = item ? quantity - item.quantity : quantity;
         /*agent.Basket.addItem(product?.id!, updatedQuantity)
            .then(basket => dispatch(setBasket(basket)))
            .catch(error => console.log(error))
            .finally(() => setSubmitting(false))*/
         dispatch(addBasketItemAsync({ productId: product?.id!, quantity: updatedQuantity }))
      } else {
         //queremos la diferencia entre item.quantity y quantity
         const updatedQuantity = item.quantity - quantity;
         /* agent.Basket.removeItem(product?.id!, updatedQuantity)
             .then(() => dispatch(removeItem({productId: product?.id!, quantity: updatedQuantity})))
             .catch(error => console.log(error))
             .finally(() => setSubmitting(false))*/
         dispatch(removeBasketItemAsync({ productId: product?.id!, quantity: updatedQuantity }))
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
                     loading={status.includes('pendingRemoveItem' + item?.quantity)}
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