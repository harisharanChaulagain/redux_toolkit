const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");



const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROE:'erroe',
    LOADING:'loading',
});

const productsSlice = createSlice({
    name:'product',
    initialState:{
        data:[],
        status:STATUSES.IDLE,
    },
    // reducers:{
        // setProducts(state, action){
        //    state.data = action.payload;
        // },
        // setStatus(state, action){
        //     state.status = action.payload;
        //  },
        
    // },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProducts.pending, (state, action)=>{
            state.status = STATUSES.LOADING;
        })
        .addCase(fetchProducts.fulfilled, (state, action)=>{
            state.data = action.payload;
            state.status = STATUSES.IDLE;
        })
        .addCase(fetchProducts.rejected, (state, action) =>{
            state.status = STATUSES.ERROE;
        })
    }
});

export const {setProducts, setStatus} = productsSlice.actions;
export default productsSlice.reducer;
// export default STATUSES;
export { STATUSES };

//thunks
// export function fetchProducts(){
//     return async function fetchProductThunk(dispatch, getState){
//         dispatch(setStatus(STATUSES.LOADING))
//         try{
//             const res = await fetch('https://fakestoreapi.com/products');
//             const data = await res.json();
//             dispatch(setProducts(data))
//             dispatch(setStatus(STATUSES.IDLE));
//         } catch(err){
//             console.log(err);
//             dispatch(setStatus(STATUSES.ERROR));
//         }
//     }
// }
export const fetchProducts = createAsyncThunk('product/fetch', async () =>{
    const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            return data;

})