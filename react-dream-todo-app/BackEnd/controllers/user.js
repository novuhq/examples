import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs";
import user from "../models/user.js";

export const signUp= async (req,res)=>{
    const {first_name,last_name,email,password,confirm_password}=req.body;
    try {
        const existingUser= await user.findOne({email});
        if(existingUser) return res.status(400).json({message:"User already exists.."});
        
        if (password!==confirm_password) return res.status(400).json({message:"Password should match.."})
        const hashedPassword= await bcrypt.hash(password,12);
        const result= await user.create({email,password:hashedPassword,name: `${first_name} ${last_name}`});
        const token= jwt.sign({email:result.email,id:result._id},'secret',{expiresIn:'5h'});
        res.status(200).json({result,token});
    } catch (error) {
        res.status(500).json({message:"Something went wrong!! try again."})
    }
}

export const signIn= async (req,res)=>{
    const {email,password}=req.body;
    try {
        const existingUser= await user.findOne({email});
        if(!existingUser) return res.status(404).json({message:"User does not exist!!"})

        const isPasswordCorrect= await bcrypt.compare(password,existingUser.password);

        if(!isPasswordCorrect) return res.status(400).json({message:"Invalid password,try again!!"});

        const token= jwt.sign({email:existingUser.email,id:existingUser._id},'secret',{expiresIn:'5h'});

        res.status(200).json({result:existingUser, token});
    } catch (error) {
        res.status(500).json({message:"Something went wrong!! please try again"});
    }
}
