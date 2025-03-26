export  interface UserModel{
    id:number,
    name:string,
}
export  interface PostModel{
    id:number,
    title:string,
    keyword:string,
    des:string,
    slug:string,
    image:string,
    publish:number,
    content:string,
    author:string,
    created_at:string
    
    deletePost:(id: number)=> void;
}
export interface PostAddModel{
    title:string,
    content:string
}