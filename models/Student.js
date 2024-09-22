const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const StudentSchema=new Schema({
    rollno:{type: String,require:true},
    firstName:{type:String},
    lastName:{type:String},
    fatherName:{type:String},
    aadharCardNo:{type:String},
    mobileNo:{type:String,require:true}
})
module.exports= mongoose.model('Student',StudentSchema);
