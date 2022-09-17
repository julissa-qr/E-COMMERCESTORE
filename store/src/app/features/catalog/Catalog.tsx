import { useEffect } from "react";
import LoadingComponent from "../../layout/LoadingComponents";
import { useAppDispatch, useAppSelector } from "../../store/configureStore";
import { fetchProductsAsync, productSelectors } from "./catalogSlice";
import ProductList from "./ProductList";

export default function Catalog() {

    //const [products, setProducts] = useState<Product[]>([]);
    //const[loading, setLoading]  = useState(true);
   
    const {productsLoaded, status} = useAppSelector(state => state.catalog);
    const products = useAppSelector(productSelectors.selectAll);
    const dispatch = useAppDispatch();

    useEffect(() => {
        //agent.Catalog.list().then(products => setProducts(products))
        /*fetch('http://localhost:5000/api/Products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))*/
        if(!productsLoaded) dispatch(fetchProductsAsync());
    }, [productsLoaded])

    if (status.includes('pending')) return <LoadingComponent message='Loading products...' />

    return (
        <>
            <ProductList products={products} />
        </>
    )
}