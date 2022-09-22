import userEvent from "@testing-library/user-event";
import { Navigate, RouteProps, useNavigate } from "react-router";
import { string } from "yup";
import Inventory from "../features/admin/Inventory";
import CheckoutPage from "../features/checkout/CheckoutPage";
import Orders from "../features/orders/Orders";
import { useAppSelector } from "../store/configureStore";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-right',
    iconColor: 'red',
    background: '#f27474',
    customClass: {
        popup: 'colored-toast'
    },

    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true
})
const PrivateRoute = () => {
    
    const { user, roles } = useAppSelector(state => state.account);
    return user  ? <CheckoutPage />  || <Orders/> : <Navigate to="/login" /> 
    
    
  /*if(!user){
    return <Navigate to="/login" />
  }

  if(roles && !roles?.some(r => user.roles?.includes(r))){
    Toast.fire({
        icon: 'error',
        title: 'Not authorized to acces this area'
    })
    return <Navigate to="/catalog" />
  }*/
  
}

export default PrivateRoute;