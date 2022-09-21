import { useState, useEffect } from "react";
import { Product } from "../models/product";
import { useAppSelector } from "../store/configureStore";

export default function useProducts()
{
    const [products, setProducts] = useState<Product[]>([]);
    //const {productsLoaded, brands, types} = useAppSelector(state => state)
    const[loading, setLoading]  = useState(true);
    //const dispatch = useAppSelector();

    useEffect(() => {
        //agent.Catalog.list().then(products => setProducts(products))
        fetch('http://localhost:5000/api/Products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
        
    }, [])


    return{
        products
    }
}