import { Navigate } from "react-router";
import CheckoutPage from "../features/checkout/CheckoutPage";
import { useAppSelector } from "../store/configureStore";

const useAuth = () => {
    //const user = {loggedIn: false};
    //return user && user.loggedIn;
    const {user} = useAppSelector(state => state.account);
    
}

const PrivateRoute = () =>{
    //const isAuth = useAuth();
    const {user} = useAppSelector(state => state.account);
    return user ? <CheckoutPage /> : <Navigate to="/login" />
}

export default PrivateRoute;








/*interface Props extends RouteProps{
    component: ComponentType<any>,
}

interface Props{
    children: ReactNode
    component: ComponentType<any>
}

const navigate = useNavigate();

const PrivateRoute = ({component: Component, ...propierties}: Props) => {
    const {user} = useAppSelector(state => state.account);

    if (user?) {
        return <Route {...propierties}>{<Component {...propierties}/>}</Route>
    } else {
       // navigate("/login") 
       <Navigate to="/login"/>
    }
}

const PrivateRoute = ({component: Component}: Props) =>{
    const {user} = useAppSelector(state => state.account);
    return user ? Component : <Navigate to="/login"/>
}

export default PrivateRoute;
*/







































/*<Route
exact
path="/dashboard"
element={<PrivateRoute component={Dashboard} />}
/>
const PrivateRoute = ({ component: Component }) => {
return auth ? <Component /> : <Navigate to="/login" />;
};*/