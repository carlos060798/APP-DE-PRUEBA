
export interface UserForm {
  
    document: string;
    last_name: string;
    name: string;
  }


export  interface User {
    id: string;
    document: string;
    last_name: string;
    name: string;
    roles_id: string | null;
  }

