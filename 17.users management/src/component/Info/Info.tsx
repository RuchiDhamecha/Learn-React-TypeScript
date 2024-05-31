import style from "./Info.module.scss";
import { InfoProps } from "./info.type";

const Info = ({ id,data ,nextData,deleteData,previousData}: InfoProps) => {
const newdata=data.filter(f=>f.id===id)
  if(!data) return <>No User Selected</>

  return (
      <div className={style.InfoBox}>
        <div>
     {newdata.map((item)=>{
       return <>  
        <div className={style.Info}>
           <span>employee id: {item.id}</span>
           <p>username: {item.username}</p>
           <h4>name: {item.name}</h4>
           <p>email:{item.email}</p>
           <p>phone no: {item.phone}</p>
           <p>address: {item.address.street},{item.address.suite},{item.address.city},{item.address.zipcode},</p>
           <p>website: {item.website}</p>
           <p>comapny: {item.company.name}</p>
         </div>
   
   
        <div>
          <button  onClick={()=>deleteData(id)}>Delete</button>
          <button  onClick={()=>previousData(id)}>previous</button>
          <button  onClick={()=>nextData(id)}>Next</button>
        </div></>
          })}
      </div>
      </div>
      
  );
};
export default Info;
