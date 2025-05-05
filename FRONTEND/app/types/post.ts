export interface Post {
    _id: string;
    titre: string;
    contenu: string;
    auteur: string;
    imagePath?: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface CreatePostData {
    titre: string;
    contenu: string;
    auteur: string;
    image?: File;
  }
  
  export interface UpdatePostData {
    titre?: string;
    contenu?: string;
    auteur?: string;
    image?: File;
  }