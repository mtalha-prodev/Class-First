import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: String,
    createAt:{
        type:Date,
        default:Date.now
    },
    isDelete:{
        type:Boolean,
        default:true
    }
})

userSchema.methods.isMatchPassword = async function (password) {
    
    return await bcrypt.compare(password, this.password)
}




export default mongoose.model('Auth',userSchema)


