import { Navigate, useNavigate } from "react-router";
import Inventory from "../features/admin/Inventory";
import CheckoutPage from "../features/checkout/CheckoutPage";
import Orders from "../features/orders/Orders";
import { useAppSelector } from "../store/configureStore";


const PrivateRoute = () => {
    const { user } = useAppSelector(state => state.account);
    return user ? <CheckoutPage />  || <Orders/> || <Inventory/> : <Navigate to="/login" />
}

export default PrivateRoute;