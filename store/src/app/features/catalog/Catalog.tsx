import { useState, useEffect } from "react";
import LoadingComponent from "../../layout/LoadingComponents";
import { Product } from "../../models/product"
import ProductList from "./ProductList";

export default function Catalog() {

    const [products, setProducts] = useState<Product[]>([]);
    const[loading, setLoading]  = useState(true);

    useEffect(() => {
        //agent.Catalog.list().then(products => setProducts(products))
        fetch('http://localhost:5000/api/Products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
        
    }, [])

    if (loading) return <LoadingComponent message='Loading products...' />

    return (
        <>
            <ProductList products={products} />
        </>
    )
}