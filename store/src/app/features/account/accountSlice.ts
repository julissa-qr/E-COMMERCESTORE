import { createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { FieldValues } from "react-hook-form";
import Swal from "sweetalert2";
import { string } from "yup/lib/locale";
import agent from "../../api/agent";
import { User } from "../../models/user";
import { setBasket } from "../basket/basketSlice";

interface AccountState {
    user: User | null;
    roles: string[]
}

const initialState: AccountState = {
    user: null,
    roles: []

}

export const signInUser = createAsyncThunk<User, FieldValues>(
    'account/signInUser',
    async (data, thunkAPI) => {
        try {
            const userDto = await agent.Account.login(data);
            const { basket, ...user } = userDto;
            if (basket) thunkAPI.dispatch(setBasket(basket));
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data });
        }
    }
)

export const fetchCurrentUser = createAsyncThunk<User>(
    'account/fetchCurrentUser',
    async (_, thunkAPI) => {
        thunkAPI.dispatch(setUser(JSON.parse(localStorage.getItem('user')!)));
        try {
            const userDto = await agent.Account.currentUser();
            const { basket, ...user } = userDto;
            if (basket) thunkAPI.dispatch(setBasket(basket));
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data });
        }
    },
    {
        condition: () => {
            if (!localStorage.getItem('user')) {
                return false;
            };
        }
    }

)

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        signOut: (state) => {
            state.user = null;
            localStorage.removeItem('user');
        },
        setUser: (state, action) => {
            let claims = JSON.parse(atob(action.payload.token.split('.')[1])); //forma de tener el JWT o el contenido en OBJETOS JSON 
            let roles = claims['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
            state.user = { ...action.payload, roles: typeof (roles) === 'string' ? [roles] : roles }
        }
    },
    extraReducers: (builder => {
        builder.addCase(fetchCurrentUser.rejected, (state) => {
            state.user = null;
            localStorage.removeItem('user');
            //const navigate = useNavigate();
            //toast.error('Session expired - please login again');
            //navigateLogin();
            Swal.fire({
                icon: 'error',
                title: 'Oops',
                text: 'Session expired - please login again'
            })

        })

        builder.addMatcher(isAnyOf(signInUser.fulfilled, fetchCurrentUser.fulfilled), (state, action) => {
            let claims = JSON.parse(atob(action.payload.token.split('.')[1])); //forma de tener el JWT o el contenido en OBJETOS JSON 
            let roles = claims['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
            state.user = { ...action.payload, roles: typeof (roles) === 'string' ? [roles] : roles }
        });
        builder.addMatcher(isAnyOf(signInUser.rejected), (state, action) => {
            console.log(action.payload);
        })
    })
})

export const { signOut, setUser } = accountSlice.actions;