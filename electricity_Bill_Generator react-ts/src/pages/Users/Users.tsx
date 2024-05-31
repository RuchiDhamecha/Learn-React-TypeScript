import Filter from "../../components/Filter/Filter.tsx";
import MenuItem from "../../components/MenuItem/MenuItem.tsx";
import Menubar from "../../components/Menubar/Menubar.tsx";
import Search from "../../components/Search/Search.tsx";
import Navbar from "../../template/Navbar/Navbar.tsx";
import styles from "./Users.module.scss";
import { UsersProps, UserData } from "./Users.types.ts";
import { useState, useEffect } from "react";
import axios from "axios";
import DisplayBox from "../../components/DisplayBox/DisplayBox.tsx";
import {UserDataResponse} from '../../auth/users.ts'

const Users = ({}: UsersProps) => {
  const [userData, setUserData] = useState<UserData[]>([]);

  const getdata = async () => {
    try {
      const data = await UserDataResponse();
      setUserData(data);
      console.log(data)
    } catch (error: any) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getdata();
  }, []);
  console.log(userData)
  const normalUserData=userData.filter((f:any)=>f.data.role.roleName === "user")
  console.log(normalUserData)

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className={styles.Users}>
        <Menubar items="Your Tickets" profile="View User Profile" />
        <header className={styles.Header}>
          <div>
            <h1>Users Bill History</h1>
          </div>
          <div>
            <Filter />
          </div>
          <div>
            <Search />
          </div>
        </header>
        {/* <section>
            <DisplayBox data={normalUserData}/>
        </section> */}
      </div>
    </div>
  );
};

export default Users;
