import { Router } from "express";
import { addUser, deleteUserById, getAllUsers, getUserById } from "../Controller/userController.js";

export const userRouter = new Router()

userRouter.get("/teams",getAllUsers)
userRouter.get("/teams/:id",getUserById)
userRouter.post("/teams",addUser)
userRouter.delete("/teams/:id",deleteUserById)