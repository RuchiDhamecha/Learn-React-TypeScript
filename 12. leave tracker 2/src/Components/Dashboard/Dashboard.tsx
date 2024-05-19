import style from './Dashboard.module.scss';
import {DashBoardProps} from './Dashboard.types'
import LeaveList from '../LeaveList/LeaveList';
import {leaves} from '../../data'
import { ButtonHTMLAttributes } from 'react';


const createBtn = (text:"M" |"P"|"S")=>{
    return (props:ButtonHTMLAttributes<any>)=>{
        return <button {...props}></button>
    }
}

const Dashboard=({leaves:DashBoardProps})=>{
    const handleMoveToPlanned=()=>{
        console.log(Planned)
    }
    const handleMoveToSick=()=>{
        console.log(Planned)
    }
    const handleMoveToMandatory=()=>{
        console.log(Planned)
    }
    const PlannedBtn = <button onClick={handleMoveToPlanned}>P</button>
    const MandatoryBtn = <button onClick={handleMoveToSick}>M</button>
    const SickBtn = <button onClick={handleMoveToMandatory}>S</button>

    const Planned = () =>{
        return (
        <>
            {MandatoryBtn}
            {SickBtn}
        </>
    )}
    const Mandatory = () => {
        return (
        <>
            {PlannedBtn}
            {SickBtn}
        </>
    )}
    const Sick = () => {
        return( 
            <>
            {MandatoryBtn}
            {PlannedBtn}
            </>
    )}
    return(
        <>
            <h1>My Leaves</h1>
            <div className={style.Dashboard}>
            <LeaveList
                action = {Planned}
                title="Planned"
                leaves={leaves.filter(l => l.type === "P")}
            />
            <LeaveList
                action = {Mandatory}
                title="Mandatory"
                leaves={leaves.filter(l => l.type === "M")}
            />
            <LeaveList
            action = {Sick}
                title="Sick"
                leaves={leaves.filter(l => l.type === "S")}
            />
            </div>
           
        </>
    )
}

export default Dashboard;