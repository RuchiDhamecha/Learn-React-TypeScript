import {Component, ReactNode} from 'react'
import style from "./servers.module.css"
const body= document.querySelector('body')

const Server = (props:any) => {
    return (
      <>
        <div>
            <button className={style.button_green}>EC2-M2-online</button>
        </div>
        <div>
            <button className={style.button_red}>EC2-L4</button>
        </div>
       
          {/* <p>{props.status?true:'off'}</p> */}
          <p>
            {
            if(props.status === true){
                 button.addEventListener("click",(e:any)=>{
                body.style.backgroundColor = "green"
                }) 

            }
            else {
                button.addEventListener("click",(e:any)=>{
                    body.style.backgroundColor = "red"
                    }) 
            }

            }
          </p>

       

      </>
    )
  }


export default {
   Server
  }