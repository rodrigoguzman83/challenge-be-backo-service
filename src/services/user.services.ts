import User from "../infrastructure/entities/User"

export const getAllUsers = () => {
    try {
        const allUsers = User.find()
        return allUsers
    } catch (error) {
        return error
    }
}

export const getUserOne = (userId: number) => {
    try {
        const user = User.findOneBy({ userId: userId })
        return user
    } catch (error) {
        return error
    }
}

export const createNewUser = (user:object) => { 
    try {
        const newUser=User.save(user)
        return newUser
    } catch (error) {
        return error
    }
}

export const updateOneUser = (userId: number, data:object) => { 
    try {
        const updateUser=User.update({ userId: userId }, data)
        return updateUser
    } catch (error) {
        return error
    }
}

export const deleteOneUser = (userId: number) => {
    try {
        const deleteUser=User.delete({userId:userId})
        return deleteUser
    } catch (error) {
        return error
    }
}