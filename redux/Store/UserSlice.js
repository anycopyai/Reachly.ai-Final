import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { action } from 'mobx';

export const loginuser = createAsyncThunk(
    'user/loginUser',
    async (data) => {
        const request = await axios.post('http://localhost:8080/api/login', data);
        const response = await request.data
        console.log(response,'responsee from http://localhost:8080/api/login')
                       localStorage.setItem('user', JSON.stringify(response));
        return response
        }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: null,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(loginuser.pending, (state) => {
            state.loading = true;
            state.user = null;
            state.error = null;
            console.log(state,'loginuser')
        })
            .addCase(loginuser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null;
                console.log(action,'actionfullfilled')
            })
            .addCase(loginuser.rejected, (state, action) => {
                state.loading = false;
                state.user =    null;
                console.log(action,'REJECTEDATION');
                state.error = null;
                if (action.error.message === 'user not found') {
                    state.error = 'Access denied! Invalid credentials';
                }
                 else {
                    state.error = action.error.message;
                    console.log(action.error.message,'erorrrrrrrrrrr')
                }
            });
    }
});

export default userSlice.reducer;
