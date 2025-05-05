export interface Post {
    _id: string;
    title: string;
    content: string;
    author: string;
    imagePath?: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface CreatePostDto {
    titre: string;
    content: string;
    author: string;
    imagePath?: string;
  }
  
  export interface UpdatePostDto {
    titre?: string;
    content?: string;
    author?: string;
    imagePath?: string;
  }