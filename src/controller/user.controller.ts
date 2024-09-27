import { Request, Response } from "express"
import bcrypt from 'bcrypt';
import User from "../model/users";
import { KEY } from "../configLoader";


// Verifica que la clave secreta esté definida
if (!KEY) {
    throw new Error('KEY environment variable is not defined');
}

export const newUser = async (req:Request, res:Response) => {
    
    const { name, username, password,} = req.body;

    //Validate if it exists in the database
    const user = await User.findOne({ where: { username: username } });

    if (user){
        return res.status(400).json({
            msg : `User ${username} exist in Database`
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await User.create({
            username : username,
            password : hashedPassword,
            name: name
        })
    
        res.json({
            msg: `User ${username} created successfully`
        })
    } catch (error) {
        res.status(400).json({
            msg: "Oops something went wrong: ",
            error
        })
    }
}
