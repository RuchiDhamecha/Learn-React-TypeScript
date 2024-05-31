import { userdata } from "../Main/Main";

export interface InfoProps{
    id:number;
    data: userdata[];
    onclickbutton?:(id:number)=>void
    nextData:(id:number)=>void
    previousData:(id:number)=>void
    deleteData:(id:number)=>void
}