

export class Usuario {
    constructor(
        nombre:string,
        email:string,
        password?:string,
        role?:string,
        google?:boolean,
        img?:string,
        public uid?:string ,
        
        ){}
}