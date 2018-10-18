import { User } from "./User";

export class Group{
    nombre: String
    descripcion:String
    UserAssociated:User[]
    idestado : number
    UserAdmin:number
    constructor(){}
}