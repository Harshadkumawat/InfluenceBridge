const {  mongoose } = require("mongoose");

const authmodel = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
     
    },
    isadmin:{
        type:Boolean,
        require:true,
        default:false
    }
},{

    timestamps: true

})

module.exports=mongoose.model('Auth',authmodel)





