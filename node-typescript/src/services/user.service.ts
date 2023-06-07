import {DocumentDefination, FilterQuery, UpdateQuery, QueryOptions} from 'mongoose'
import User, {UserDocument} from '../models/user'

export function createUser(input: DocumentDefination<UserDocument>){
    return User.create(input)
}

export function findUser(query: FilterQuery<UserDocument>, options:QueryOptions={lean:true}){
    return User.find(query,{},options)
}

export function findAndUpdate(
    query: FilterQuery<UserDocument>,
    update: UpdateQuery<UserDocument>,
    option: QueryOptions 
){
    return User.findOneAndUpdate(query,update,option)
}

export function deleteUser(query: FilterQuery<UserDocument>){
    return User.deleteOne(query)
}