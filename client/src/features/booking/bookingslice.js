import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import bookingservices from "./bookingservice";

const bookingslice=createSlice({
    name:'booking',
    initialState:{
        Booking:[],
        bookinsingle:null,
    bookingloading:false,
    bookingError:false,
    bookingsuccess:false,
    bookingSuccess:false,
    bookinMessage:""
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
     .addCase(FetchUsersBooking.pending,(state,action)=>{
                 state.bookingloading=true
                  state.bookingError=false
                  state.bookingsuccess=false
     }) 
     .addCase(FetchUsersBooking.fulfilled,(state,action)=>{
         state.bookingloading=false
        
          state.bookingError=false
          state.bookingsuccess=true
          state.Booking=action.payload
     }) 
     .addCase(FetchUsersBooking.rejected,(state,action)=>{
         state.bookingloading=false
          state.bookingError=true
          state.bookingsuccess=false
          state.bookinMessage=action.payload
     }) 
     .addCase(ADDUsersBooking.pending,(state,action)=>{
                 state.bookingloading=true
                  state.bookingError=false
                  state.bookingsuccess=false
     }) 
     .addCase(ADDUsersBooking.fulfilled,(state,action)=>{
         state.bookingloading=false
          state.bookingError=false
          state.bookingSuccess=true
          state.Booking=[action.payload, ...state.Booking]
     }) 
     .addCase(ADDUsersBooking.rejected,(state,action)=>{
         state.bookingloading=false
          state.bookingError=true
          state.bookingsuccess=false
          state.bookinMessage=action.payload
     }) 




//      .addCase(FetchSingleBooking.pending,(state,action)=>{
//         state.bookingloading=true
//          state.bookingError=false
//          state.bookingsuccess=false
// }) 
// .addCase(FetchSingleBooking.fulfilled,(state,action)=>{
// state.bookingloading=false
//  state.bookingError=false
//  state.bookingsuccess=true
//  state.bookinsingle=action.payload
// }) 
// .addCase(FetchSingleBooking.rejected,(state,action)=>{
// state.bookingloading=false
//  state.bookingError=true
//  state.bookingsuccess=false
//  state.bookinMessage=action.payload
// }) 



    },

})          

export default bookingslice.reducer


 export const FetchUsersBooking=createAsyncThunk('FETCH/BOOKINGUSER',async(_,thunkAPI)=>{
    let token =  thunkAPI.getState().auth.users.token

    try {
    return await bookingservices.fetchAllBookingForUser(token)
    } catch (error) {
    console.log(error.response.data.message)
            const messagee=error.response.data.message
            return thunkAPI.rejectWithValue(messagee)  
    }
 })





 export const ADDUsersBooking=createAsyncThunk('ADD/BOOKINGUSER',async(id,thunkAPI)=>{
    let token =  thunkAPI.getState().auth.users.token

    try {
    return await bookingservices.AddBookingForUser(id,token)
    } catch (error) {
    console.log(error.response.data.message)
            const messagee=error.response.data.message
            return thunkAPI.rejectWithValue(messagee)  
    }


})

//  export const FetchSingleBooking=createAsyncThunk('FETCH/BOOKINGSINGLE',async(fromdata,thunkAPI)=>{
//     let token =  thunkAPI.getState().auth.users.token

//     try {
//     return await bookingservices.singlebookingforuser(fromdata,token)
//     } catch (error) {
//     console.log(error.response.data.message)
//             const messagee=error.response.data.message
//             return thunkAPI.rejectWithValue(messagee)  
//     }


// })

