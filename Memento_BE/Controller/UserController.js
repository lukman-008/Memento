import prisma from "../DB/db.config.js";




export const getAllUsers = async (req, res) => {
        const users = await prisma.user.findMany();
        return res.status(200).json({message: "All users fetched successfully", data: users});
};

export const createUser = async (req, res) => {
        const {name, email, password} = req.body;
        const findUser = await prisma.user.findUnique({
                where: {
                        email: email
                }
        })

        if(findUser){
                return res.status(400).json({message: "User already exists"});
        }

        const newUser = await prisma.user.create({
                data:{
                        name:name,
                        email:email,
                        password:password
                }
        })

        return res.status(201).json({message: "User created successfully", data: newUser});
};


export const showUser = async (req,res) => {
        const userId = req.params.id;
        const user = await prisma.user.findUnique({
                where: {
                        id: Number(userId)
                }
        })
        return res.status(200).json({message: "User fetched successfully", data: user});
}


export const deleteUser = async (req,res) => {
        const userId = req.params.id;
        const user = await prisma.user.delete({
                where: {
                        id: Number(userId)
                }
        })
        return res.status(200).json({message: "User deleted successfully",name: user.name});
}


export const updateUser = async (req,res) => {
        const userId = req.params.id;
        const { name, email, password} = req.body;

        await prisma.user.update({
                where: {
                        id: Number(userId)
                },
                data: {
                        name,
                        email,
                        password
                }
        })
        return res.status(200).json({message: "User updated successfully"});
}