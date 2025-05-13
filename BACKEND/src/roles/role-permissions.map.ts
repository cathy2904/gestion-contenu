// Exemple basique
export enum Role {
    ADMIN = 'admin',
    EDITOR = 'editor',
    USER = 'user',
  }
  
  export enum Permission {
    CREATE_ARTICLE = 'create_article',
    DELETE_ARTICLE = 'delete_article',
    UPDATE_ARTICLE = 'update_article',
    VIEW_ARTICLE = 'view_article',
    CREATE_POST = 'create_post',
    DELETE_POST = 'delete_post',
    UPDATE_POST = 'update_post',
    VIEW_POST = 'view_post',
  }
  
  export const RolePermissionsMap: Record<Role, Permission[]> = {
    [Role.ADMIN]: [
      Permission.CREATE_ARTICLE,
      Permission.DELETE_ARTICLE,
      Permission.UPDATE_ARTICLE,
      Permission.VIEW_ARTICLE,
    ],
    [Role.EDITOR]: [
      Permission.CREATE_ARTICLE,
      Permission.UPDATE_ARTICLE,
      Permission.VIEW_ARTICLE,
    ],
    [Role.USER]: [Permission.VIEW_ARTICLE],
  };
  