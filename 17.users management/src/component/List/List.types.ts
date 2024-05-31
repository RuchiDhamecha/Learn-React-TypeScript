import { userdata } from "../Main/Main";

export interface ListTypes{
    id:number;
    data: userdata[]
    onclickbutton:(id:number)=>void
}