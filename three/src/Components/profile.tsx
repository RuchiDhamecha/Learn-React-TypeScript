import { Component, ReactNode } from "react"

const Profile=(props:any)=>{
            // const listItems=[
        //     <li>1</li>
        //     <li>2</li>
        //     <li>3</li>
        // ];
    return 
    (<>

        

        <p>{props.name}</p>
        <p>{props.surname}</p>
        <p>{props.isMarried? 'yes':'no'}</p>
        {/* <p>{props.friends}</p> */}
        {
            props.friends.map((friend:any)=>{
                return <p>{friend}<p/>;
            });
        }
        
          <p>{props.address.city}</p>  <p>{props.address.country}</p> 
        
        {/* <p>{props.address}</p> */}
        </>
    )
}
export default Profile;