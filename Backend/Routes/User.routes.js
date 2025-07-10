// import login user and register user function from controller
import { loginUser, registerUser } from "../Controller/User.controller.js";

// routes
export function  userRoutes(app){
    app.post("/api/register",registerUser);
    app.post("/api/login",loginUser)
}