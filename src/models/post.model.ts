import { Comment } from "./comment.model"

export interface Post{
    id?: string,
    title: string,
    body: string,
    tags?: string[],
    comments : Array<Comment>
}