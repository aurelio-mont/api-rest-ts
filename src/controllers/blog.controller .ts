import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { addItem, deleteOneItem, getAllItems, getOneItem, updateOneItem } from "../services/blog.service"

const getItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params
        const item = await getOneItem(id)
        const data = item ? item : "NOT_FOUND"
        res.send(data)
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEM')
    }
}

const getItems = async (req: Request, res: Response) => {
    try {
        const data = await getAllItems()
        res.send(data)
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEMS')
    }
}

const updateItem = async ({ params, body }: Request, res: Response) => {
    try {
        const { id } = params
        const data = await updateOneItem(id, body)
        res.send(data)
    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_ITEM')
    }
}

const postItem = async ({ body }: Request, res: Response) => {
    try {
        const responseAddItem = await addItem(body)
        res.send(responseAddItem)
    } catch (e) {
        handleHttp(res, 'ERROR_POST_ITEM', e)
    }
}

const deleteItem = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params
        const data = await deleteOneItem(id)
        res.send(data)
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_ITEM')
    }
}


export { getItem, getItems, updateItem, postItem, deleteItem }