import { User } from "../Model/userModel.js";


let addUser = async (req, res) => {
    try {
        let user = await User.create(req.body)
        res.send(user).status(200)
    } catch (err) {
        console.error("add user error : ", err)
        res.status(500).send({ error: "add user error : ", detail: err.message })
    }
}

let getAllUsers = async (req, res) => {
    try {
        let users = await User.find()
        res.send(users).status(200)
    } catch (err) {
        console.error("get all user error : ", err)
        res.status(500).send({ error: "get all user eror : ", detail: err.message })
    }
}

let getUserById = async (req, res) => {
    try {
        let user = await User.findById(req.params.id)
        if (!user) {
            return res.send({ message: "user not found" }).status(404)
        }
        res.send(user).status(200)
    } catch (error) {

    }
}

let deleteUserById = async (req, res) => {
    try {
        let user = await User.findByIdAndDelete(req.params.id)
        if (!user) {
            return res.send("user not found").status(200)
        }
        res.status(200).send(`deleted element id ${User._id}`)

    } catch (err) {
        console.error("delete user error : ", err)
        res.status(500).send({ error: "delete user error : ", detail: err.message })
    }
}





export { addUser, getAllUsers, deleteUserById, getUserById }