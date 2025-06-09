import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import adminservice from "./Adminservice";

const Adminslice =createSlice({
    name:"admin",
    initialState:{
        Influencers:[],
        bookings:[],
        Users:[],
        comments:[],
        InfluencersEdit:{edit:{},isEdit:false},
        
        isLoading:false,
        isSuccess:false,
        isError:false,
        Message:''
    },
    reducers:{ 
        editinfluencress:(state,action)=>{
         return{
            ...state,
            InfluencersEdit:{edit:action.payload,isEdit:true}
         }
        
        },
        resetinfluencer:(state,action )=>{
            return{
                ...state,
                InfluencersEdit:{edit:{},isEdit:false}
             }
        }
    },
    extraReducers:(builder)=>{
        builder

/////// all influncers

.addCase(GetallInfluencerforAdmin.pending,(state,action)=>{
            state.isLoading=true
             state.isError=false
             state.isSuccess=false
}) 
.addCase(GetallInfluencerforAdmin.fulfilled,(state,action)=>{
    state.isLoading=false
     state.isError=false
     state.isSuccess=true
     state.Influencers=action.payload
}) 
.addCase(GetallInfluencerforAdmin.rejected,(state,action)=>{
    state.isLoading=false
     state.isError=true
     state.isSuccess=false
     state.Message=action.payload
}) 

/////// all booking
 
.addCase(GetallBookingforAdmin.pending,(state,action)=>{
            state.isLoading=true
             state.isError=false
             state.isSuccess=false
}) 
.addCase(GetallBookingforAdmin.fulfilled,(state,action)=>{
    state.isLoading=false
     state.isError=false
     state.isSuccess=true
     state.bookings=action.payload
}) 
.addCase(GetallBookingforAdmin.rejected,(state,action)=>{
    state.isLoading=false
     state.isError=true
     state.isSuccess=false
     state.Message=action.payload
})  


//////// all users
 
.addCase(GetallUserforadmin.pending,(state,action)=>{
            state.isLoading=true
             state.isError=false
             state.isSuccess=false
}) 
.addCase(GetallUserforadmin.fulfilled,(state,action)=>{
    state.isLoading=false
     state.isError=false
     state.isSuccess=true
     state.Users=action.payload
}) 
.addCase(GetallUserforadmin.rejected,(state,action)=>{
    state.isLoading=false
     state.isError=true
     state.isSuccess=false
     state.Message=action.payload
})


//////// all comment

.addCase(GetallCommetforAdmin.pending,(state,action)=>{
            state.isLoading=true
             state.isError=false
             state.isSuccess=false
}) 
.addCase(GetallCommetforAdmin.fulfilled,(state,action)=>{
 
    state.isLoading=false
     state.isError=false
     state.isSuccess=true
     state.comments=action.payload
}) 
.addCase(GetallCommetforAdmin.rejected,(state,action)=>{
    state.isLoading=false
     state.isError=true
     state.isSuccess=false
     state.Message=action.payload
})

///create influnecers


.addCase(CreateInfluencers.pending,(state,action)=>{
    state.isLoading=true
     state.isError=false
     state.isSuccess=false
}) 
.addCase(CreateInfluencers.fulfilled,(state,action)=>{

state.isLoading=false
state.isError=false
state.isSuccess=true
state.Influencers=[...state.Influencers,action.payload]
}) 
.addCase(CreateInfluencers.rejected,(state,action)=>{
state.isLoading=false
state.isError=true
state.isSuccess=false
state.Message=action.payload
})


//update in influencers 

.addCase(UpdateInfluencers.pending,(state,action)=>{
    state.isLoading=true
     state.isError=false
     state.isSuccess=false
}) 
.addCase(UpdateInfluencers.fulfilled,(state,action)=>{

state.isLoading=false
state.isError=false
state.isSuccess=true
state.Influencers=state.Influencers.map(item=>item._id===action.payload._id ?action.payload:item)
state.InfluencersEdit={edit:{},isEdit:false}
}) 
.addCase(UpdateInfluencers.rejected,(state,action)=>{
state.isLoading=false
state.isError=true
state.isSuccess=false
state.Message=action.payload
})


//Detele influnecres 

.addCase(DeteleInfluencers.pending,(state,action)=>{
    state.isLoading=true
     state.isError=false
     state.isSuccess=false
}) 
.addCase(DeteleInfluencers.fulfilled,(state,action)=>{

state.isLoading=false
state.isError=false
state.isSuccess=true
state.Influencers = state.Influencers.filter(item => item._id !== action.payload.id);

}) 
.addCase(DeteleInfluencers.rejected,(state,action)=>{
state.isLoading=false
state.isError=true
state.isSuccess=false
state.Message=action.payload
})

//booking  updata


.addCase(UpdataBooking.pending,(state,action)=>{
    state.isLoading=true
     state.isError=false
     state.isSuccess=false
}) 
.addCase(UpdataBooking.fulfilled,(state,action)=>{

state.isLoading=false
state.isError=false
state.isSuccess=true
state.bookings = state.bookings.map(item => item._id === action.payload._id? action.payload:item);

}) 
.addCase(UpdataBooking.rejected,(state,action)=>{
state.isLoading=false
state.isError=true
state.isSuccess=false
state.Message=action.payload
})



// add commet for admin


.addCase(AddComment.pending,(state,action)=>{
    state.isLoading=true
     state.isError=false
     state.isSuccess=false
}) 
.addCase(AddComment.fulfilled,(state,action)=>{

state.isLoading=false
state.isError=false
state.isSuccess=true
state.comments = [...state.comments,action.payload]

}) 
.addCase(AddComment.rejected,(state,action)=>{
state.isLoading=false
state.isError=true
state.isSuccess=false
state.Message=action.payload
})

    }
})
export const {editinfluencress,resetinfluencer}=Adminslice.actions
export default Adminslice.reducer

// GET all influences
export const GetallInfluencerforAdmin =createAsyncThunk('GET/INFLUENCER',async(_ ,thunkAPI)=>{
 
    try {
    return  await adminservice.getallInfluencersforadmin()
} catch (error) {
    console.log(error.response.data.message)
        const messagee=error.response.data.message
        return thunkAPI.rejectWithValue(messagee)  
}
})






//get all user for amdin
export const GetallUserforadmin =createAsyncThunk('GET/USER',async(_,thunkAPI)=>{

   
    try {
    let token =  thunkAPI.getState().auth.users.token
    return  await adminservice.getalluserforadmin(token)
} catch (error) {
    console.log(error.response.data.message)
        const messagee=error.response.data.message
        return thunkAPI.rejectWithValue(messagee)  
}
})


//get all bookings for amdin
export const GetallBookingforAdmin= createAsyncThunk('GET/BOOKING', async(_,thunkAPI)=>{
        let token =  thunkAPI.getState().auth.users.token

try {
    return await adminservice.getallbookingforadmin(token)
} catch (error) {
    console.log(error.response.data.message)
            const messagee=error.response.data.message
            return thunkAPI.rejectWithValue(messagee)  
}
})




//get all comment for amdin
export const GetallCommetforAdmin= createAsyncThunk('GET/COMMENT', async(_,thunkAPI)=>{
        let token =  thunkAPI.getState().auth.users.token

try {
    return await adminservice.getallcommentforadmin(token)
} catch (error) {
    console.log(error.response.data.message)
            const messagee=error.response.data.message
            return thunkAPI.rejectWithValue(messagee)  
}
})



//new create influncers

export const CreateInfluencers= createAsyncThunk('CREATE/NEWINFLUNNCERS', async(fromdata,thunkAPI)=>{
    let token =  thunkAPI.getState().auth.users.token

try {
return await adminservice.createnewinfluencers(fromdata,token)
} catch (error) {
console.log(error.response.data.message)
        const messagee=error.response.data.message
        return thunkAPI.rejectWithValue(messagee)  
}
})



//  Update influencres

export const UpdateInfluencers= createAsyncThunk('UPDATE/UPDATAINFLUENCE', async(fromdata,thunkAPI)=>{
    let token =  thunkAPI.getState().auth.users.token

try {
return await adminservice.updateinfluencers(fromdata,token)
} catch (error) {
console.log(error.response.data.message)
        const messagee=error.response.data.message
        return thunkAPI.rejectWithValue(messagee)  
}
})




// Detele influencers

export const DeteleInfluencers= createAsyncThunk('DETELE/DELTELINFLUNCERS', async(id,thunkAPI)=>{
    let token =  thunkAPI.getState().auth.users.token

try {
return await adminservice.deteleinfluencers(id,token)
} catch (error) {
console.log(error.response.data.message)
        const messagee=error.response.data.message
        return thunkAPI.rejectWithValue(messagee)  
}
})



////booking updata


export const UpdataBooking= createAsyncThunk('UPDATE/BOOKING', async(formdata,thunkAPI)=>{
    let token =  thunkAPI.getState().auth.users.token

try {
return await adminservice.updatabookinng(formdata,token)
} catch (error) {
console.log(error.response.data.message)
        const messagee=error.response.data.message
        return thunkAPI.rejectWithValue(messagee)  
}
})



 // comment  add  admin


 export const AddComment= createAsyncThunk('ADDCOMMENT/COMMENT', async(formdata,thunkAPI)=>{
    let token =  thunkAPI.getState().auth.users.token

try {
return await adminservice.addcommnet(formdata,token)
} catch (error) {
console.log(error.response.data.message)
        const messagee=error.response.data.message
        return thunkAPI.rejectWithValue(messagee)  
}
})