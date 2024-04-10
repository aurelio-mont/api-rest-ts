import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { addItem } from "../services/item.service"

const getItem = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res,'ERROR_GET_ITEM')
    }
}

const getItems = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res,'ERROR_GET_ITEMS')
    }
}

const updateItem = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res,'ERROR_UPDATE_ITEM')
    }
}

const postItem = async({ body }: Request, res: Response) => {
    try {
        const responseAddItem = await addItem(body)
        res.send(responseAddItem)
    } catch (e) {
        handleHttp(res,'ERROR_POST_ITEM', e)
    }
}

const deleteItem = (req: Request, res: Response) => {
    try {

    } catch (e) {
        handleHttp(res,'ERROR_DELETE_ITEM')
    }
}


export { getItem, getItems, updateItem, postItem, deleteItem }