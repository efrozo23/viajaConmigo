import { User } from "./User";

export class Group{
    Name: String
    Description:String
    UserAssociated:User[]
    State : number
    UserAdmin:number
    constructor(){}
}