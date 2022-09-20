import { Navigate } from "react-router";
import Orders from "../features/orders/Orders";
import { useAppSelector } from "../store/configureStore";


const PrivateRouteOrder = () => {
    const { user } = useAppSelector(state => state.account);
    return user ? <Orders />: <Navigate to="/login" />
}

export default PrivateRouteOrder;