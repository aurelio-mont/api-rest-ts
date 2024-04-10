import { Blog } from "../interfaces/blog.interface";
import BlogModel from "../models/blog.model";

const addItem = async (item: Blog) => {
    const responseAddItem = await BlogModel.create(item)
    return responseAddItem
}

const getAllItems = async () => {
    const resData = await BlogModel.find({})
    return resData
}

const getOneItem = async (id: string) => {
    const resData = await BlogModel.findOne({ _id: id })
    return resData
}

const updateOneItem = async (id: string, item: Blog) => {
    const resData = await BlogModel.findOneAndUpdate({ _id: id }, item, { new: true })
    return resData
}

const deleteOneItem = async (id: string) => {
    const resData = await BlogModel.deleteOne({ _id: id })
    return resData
}

export { addItem, getAllItems, getOneItem, updateOneItem, deleteOneItem }