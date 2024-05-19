import axios from "axios"
import style from './File.module.scss'
import { useEffect, useState } from "react"

const File =()=>{
const [myData, setMyData] = useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            console.log(res.data);
            setMyData(res.data);
        })
    })
    return(
        <>
           <h1>Axios</h1>
           {
            myData.map((post)=>{
                const {id,title,body} = post;
                return(
                    <div>
                        <h2>title</h2>
                    </div>
                )
            })
           }
        </>
    )
}
export default File;