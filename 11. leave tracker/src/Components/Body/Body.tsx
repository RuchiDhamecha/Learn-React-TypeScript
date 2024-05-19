import style from './Body.module.scss'
import Leave_template from '../Leave Template/Leavetemplate';
// import Data from './Body.data'
import { leavetype } from './Body.types';

const Body=({leavetype}:leavetype)=>{

    return(
        <>  
        <main className={style.Main}>
            <header className={style.Header}>
                <h1>My Leaves</h1>
            </header>
            <section className={style.Body}>
                <div className={style.Box}>
                    {/* <h4>{leavetype}</h4> */}
                    <div className={style.Column}>
                        <Leavetemplate leavetype='sick'/>
                    </div>
                </div>
           
            </section>
        </main>
           
        </>
    )
}

export default Body;