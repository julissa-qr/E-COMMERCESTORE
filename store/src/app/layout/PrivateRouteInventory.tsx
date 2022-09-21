import { Navigate } from "react-router";
import Inventory from "../features/admin/Inventory";
import { useAppSelector } from "../store/configureStore";


const PrivateRouteOrder = () => {
    const { user } = useAppSelector(state => state.account);
    return user ? <Inventory />: <Navigate to="/login" />
}

export default PrivateRouteOrder;