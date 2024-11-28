import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cart:[]
    },
    reducers:{
       addToCart : (state,action) =>{
     
        let existingItem = state.cart.find(item=>item.id===action.payload.id)
        if(existingItem){
          existingItem.quantity+=1
        }
        else{
          state.cart.push(action.payload)
        }
         
       },
       removefromCart: (state,action) =>{
        const index = action.payload; 
      
        state.cart.splice(index, 1);  
      
       },
       updateTotal : (state) =>{
        state.total=state.cart.reduce((total,item)=>total+(item.price*item.quantity),0)
       }
    }
})

export default cartSlice.reducer;
export const {addToCart,removefromCart,updateTotal} = cartSlice.actions;
