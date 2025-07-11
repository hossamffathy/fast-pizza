import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cart:[]
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItem(state,action){
            state.cart.push(action.payload)
        },
        increaseItemQuantity(state,action){
          const item=state.cart.find(item=>item.pizzaId==action.payload)
          item.quantity++
          item.totalPrice = item.quantity * item.unitPrice;
        },
    
        decreaseItemQuantity(state,action){
          const item=state.cart.find(item=>item.pizzaId==action.payload)
          item.quantity--
          
        },
        deleteItem(state,action){
            state.cart=state.cart.filter((item)=>item.pizzaId!=action.payload)
        },
        clear(state,action){
            state.cart=[]
        }
    }
})


export default cartSlice.reducer;
export const { clear,addItem,increaseItemQuantity,decreaseItemQuantity,deleteItem}=cartSlice.actions