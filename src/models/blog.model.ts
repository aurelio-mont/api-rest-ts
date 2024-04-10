import { Schema, Types, model, Model } from "mongoose"
import { Blog } from "../interfaces/blog.interface"

const BlogSchema = new Schema<Blog>(
    {
        title: {
            type: String,
            required: true,
        },
        year: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const ItemModel = model('blogs', BlogSchema)

export default ItemModel