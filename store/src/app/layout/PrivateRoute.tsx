import { Navigate } from "react-router";
import CheckoutPage from "../features/checkout/CheckoutPage";
import { useAppSelector } from "../store/configureStore";


const PrivateRoute = () =>{
    const {user} = useAppSelector(state => state.account);
    return user ? <CheckoutPage /> : <Navigate to="/login" />
}

export default PrivateRoute;