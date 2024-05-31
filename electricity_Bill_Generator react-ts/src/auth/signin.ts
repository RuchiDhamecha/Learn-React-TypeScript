// import axios from "axios";
import axiosInstance from "./api";

export const LoginHandler = async (credentials:any) =>{
    try{
        const response = await axiosInstance.post('/auth/login',credentials)
        return response;
    }catch(e){
        throw e
    }
}



// export const login=async(credentials:any)=>{
//     const response = await axios.post(
//         `${import.meta.env.VITE_API_URL}/api/auth/login`,
//         credentials,
//         {
//           headers: {
//             "ngrok-skip-browser-warning": "skip-browser-warning",
            
//           },
//         }
//       );

//       return response;
// }
