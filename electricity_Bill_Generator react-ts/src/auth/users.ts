import axios from "axios";
import { UserData } from "../pages/Users/Users.types";

export const UserDataResponse = async()=>{
    const response = await axios.get<UserData[]>(
        `${import.meta.env.VITE_API_URL}/user`,
        {
          headers: {
            "ngrok-skip-browser-warning": "skip-browser-warning",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return response.data;
}