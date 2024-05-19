import Server from './component/Server'
import Pill from './component/Pill'
import styles from './stylesheet/App.module.scss'

const App=()=>{
  return (
    <>
    <div className={styles.main}>
     
     <Server serverName="EC2" status={true}/>
     <Server serverName="AWS" status={false}/>
     <Server serverName="EC2 M4" status={true}/>
     <Pill status={false}/>
    </div>
    </>
  )
}
  
export default App
