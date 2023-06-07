import express, {Request, Response} from "express";
import { homeDetail } from "../controller/user";
const router = express.Router();

router.get('/home' , homeDetail)

export {
    router
}