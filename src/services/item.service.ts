import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item.model";

const addItem = async (item: Car) => {
    const responseAddItem = await ItemModel.create(item)
    return responseAddItem
}

const getAllItems = async () => {
    const resData = await ItemModel.find({})
    return resData
}

const getOneItem = async (id: string) => {
    const resData = await ItemModel.findOne({ _id: id })
    return resData
}

const updateOneItem = async (id: string, item: Car) => {
    const resData = await ItemModel.findOneAndUpdate({ _id: id }, item, { new: true })
    return resData
}

const deleteOneItem = async (id: string) => {
    const resData = await ItemModel.deleteOne({ _id: id })
    return resData
}

export { addItem, getAllItems, getOneItem, updateOneItem, deleteOneItem }