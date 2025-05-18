export interface User {
  id : number;
  fullName : string;
  email : string;
  password : string;
  createAt: string;
  updateAt: string;
}

export interface UserLogin {
  user : {
    id : number;
    fullName : string;
    email : string;
    password : string;
    createAt: string;
    updateAt: string;
  },
  token: {
    type : string;
    name : null | string;
    token : string;
    abilities : [string];
    lastUseAt : null | string;
    expiresAt : null | string;
  }
}
