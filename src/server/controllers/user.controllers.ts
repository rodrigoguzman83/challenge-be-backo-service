import { Request, Response } from "express";
import User from "../../infrastructure/entities/User"
import { getAllUsers, getUserOne,createNewUser,updateOneUser,deleteOneUser } from "../../services/user.services"

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await getAllUsers()
        return res.status(200).json(users)
    } catch (error) {
        return res.status(400).json(error)
    }
}

export const getUserById = async (req: Request, res: Response) => {

    try {
        const { userId } = req.params
        const user = await getUserOne(parseInt(userId))

        if (!user) { return res.status(404).json({ message: 'User does not exists' }) }

        return res.status(200).json(user)

    } catch (error) {
        return res.status(400).json(error)
    }
}

export const createUser = async (req: Request, res: Response) => {

    try {
        const { username, phone, email, fullName } = req.body
        const user = new User()
        user.username = username
        user.phone = phone
        user.email = email
        user.fullName = fullName

        const newUser=await createNewUser(user)

        return res.status(200).json(newUser)

    } catch (error) {
        return res.status(400).json(error)
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params
        const user = await getUserOne(parseInt(userId))

        if (!user) { return res.status(404).json({ message: 'User does not exists' }) }
        
        const result=await updateOneUser(parseInt(userId) , req.body)
        return res.status(200).json({ message: 'User updated successfully' })
    } catch (error) {
        return res.status(400).json(error)
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params
        const user = await getUserOne(parseInt(userId))

        if (!user) { return res.status(404).json({ message: 'User does not exists' }) }

        const result= await deleteOneUser(parseInt(userId))
        return res.status(200).json({ message: "user was deleted" })
    } catch (error) {
        return res.status(400).json(error)
    }
}
