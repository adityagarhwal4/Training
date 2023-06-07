import {Request, Response} from "express";
import userModel from "../models/user";
import { createUser, findAndUpdate, findUser, deleteUser } from "../services/user.service";

const homeDetail = async (req: Request, resp: Response) => {

    // let myData = await userModel.find();

    // Add
    // const user = await createUser({name: "test data", dept: "xyz"})

    // update
    // const user = await findAndUpdate({name:"Ram"}, {dept:"HR"}, {new:true})

    // Find
    // const user = await findUser({_id: ""})

    // Find
    // const user = await deleteUser({_id: ""})

    let ob = {
        x: 12,
        y: 30
    }
    let data = sumData(ob)
    resp.json({
        message: "HOME PAGE NEW",
        data: data,
        myData: user
    })
}

interface Params{
    x: number, 
    y: number
}
type sumChecks = (ob:Params) => number

const sumData: sumChecks = (ob: Params) => {
    return ob.x + ob.y;
}


export {
    homeDetail
}