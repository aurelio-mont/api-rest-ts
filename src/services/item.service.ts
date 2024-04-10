import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item.model";

const addItem = async (item: Car) => {
    const responseAddItem = await ItemModel.create(item)
    return responseAddItem
}

export { addItem }