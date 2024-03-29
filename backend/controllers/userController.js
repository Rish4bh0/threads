import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import generateTokenAndSetCookie from "../utils/helpers/generateTokenAndSetCookies.js";
const signupUser = async(req, res) => {
try {
    const {name, email, username, password } = req.body;
    const user = await User.findOne({$or:[{email}, {username}]});

    if(user){
        return res.status(400).json({message:"User already exists"});
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
        name,
        email,
        username,
        password: hashedPassword,
        
    });
    await newUser.save();

    if(newUser){

        generateTokenAndSetCookie(newUser._id, res);
        res.status(201).json({
            id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            username: newUser.usermae,
        })
    } else {
        res.status(400).json({message: "invalid user data"})
    }

    
} catch (error) {
    res.status(500).json({ message: error.message })
    console.log("Error in signupuser:", err.message)
    
}
}


export { signupUser }