import { DatePipe } from "@angular/common";

export class User{
    id: number
    userKey: string
    passwordKey: string
    phoneNumber: number
    name: string
    token: number
    idDevice: string
    creationDate: DatePipe
    success: boolean
    message: string
}