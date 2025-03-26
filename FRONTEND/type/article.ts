import { ObjectId } from "mongodb"

export type Article = {
    _id: ObjectId,
    title: string,
    content: string,
    author: string,
    createdAt: string,
}