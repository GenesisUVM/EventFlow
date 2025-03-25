import {mongoose} from "mongoose"

export const connectDB = async()=>{
    try{
        await mongoose.connect('mongodb+srv://genesis:frontii@cluster0.msjhg.mongodb.net/AthleteSync');
        console.log('>>> DB esta conectada')
    } 
    catch(error){
        console.log(error)
    };
};