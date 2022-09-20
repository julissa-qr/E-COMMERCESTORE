import { Navigate, useNavigate } from "react-router";
import CheckoutPage from "../features/checkout/CheckoutPage";
import Orders from "../features/orders/Orders";
import { useAppSelector } from "../store/configureStore";


const PrivateRoute = () => {
    const { user } = useAppSelector(state => state.account);
    return user ? <CheckoutPage />  || <Orders />: <Navigate to="/login" />
}

export default PrivateRoute;