
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { accountSlice } from "../features/account/accountSlice";
import { counterSlice } from "../features/contact/counterSlice";

/*export function configureStore(){
    return createStore(counterReducer);
}
*/
export const store = configureStore({
    reducer:{
        counter: counterSlice.reducer,
        account: accountSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;