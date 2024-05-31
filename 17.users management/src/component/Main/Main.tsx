import style from "./main.module.scss";
import { useState, useEffect } from "react";
import List from "../List/List";
import Info from "../Info/Info";
import axios from "axios";

// export interface userdata{
//     id:number
//     name:string
//     phnno:number
//     address:string
//     clicked?:boolean
// }
export interface userdata {
  id: number;
  img: string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: number;
      lan: number;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  clicked?: boolean;
}
const Main = () => {
  //   const [currentUser, setCurrentUser] = useState<userdata>();
  const [selectedId, setSelected] = useState(1);
  const [userdata, setUserdata] = useState<userdata[]>([]);
  const getdata = async () => {
    try {
      //   const { data } = await axios.get<userdata[]>(
      //     "https://dbeb-47-247-159-210.ngrok-free.app/",
      //     {
      //       headers: {
      //         "ngrok-skip-browser-warning": "skip-browser-warning",
      //       },
      //     }
      //   );
      //   setUserdata(data);
      setUserdata([
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
              lat: -37.3159,
              lan: 81.1496,
            },
          },
          phone: "1-770-736-8031 x56442",
          website: "hildegard.org",
          company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
          },
          img: "asas",
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
          address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
              lat: -37.3159,
              lan: 81.1496,
            },
          },
          phone: "010-692-6593 x09125",
          website: "anastasia.net",
          company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains",
          },
          img: "asas",
        },
        {
          id: 3,
          name: "Clementine Bauch",
          username: "Samantha",
          email: "Nathan@yesenia.net",
          address: {
            street: "Douglas Extension",
            suite: "Suite 847",
            city: "McKenziehaven",
            zipcode: "59590-4157",
            geo: {
              lat: -68.61,
              lan: -47.0653,
            },
          },
          phone: "1-463-123-4447",
          website: "ramiro.info",
          company: {
            name: "Romaguera-Jacobson",
            catchPhrase: "Face to face bifurcated interface",
            bs: "e-enable strategic applications",
          },
          img: "asj",
        },
      ]);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getdata();
  }, []);

  function onclickbutton(id: number) {
    console.log(id);
    setSelected(id);
  }

  const deleteData = (id: number) => {
 setUserdata(userdata.filter((f)=>f.id!==id))
  };
// const deleteData = (id: number) =>{
//   const newdata = userdata.filter((f)=>{
//     f.id !== id
//   })
//   setUserdata(newdata)
// }

  // const [previous,next] = useState();

  const nextData = (id: number) => {
    console.log("next", id);
    ++id;
    setSelected(id);
  };

  const previousData = (id: number) => {
    console.log("previous", id);
    --id;
    setSelected(id);
  };
  //   const selectedUser = userdata.filter((user) => user.clicked);

  return (
    <main className={style.Main}>
      <div className={style.list}>
        <List id={selectedId} data={userdata} onclickbutton={onclickbutton} />
      </div>
      <div className={style.info}>
        <Info
          data={userdata}
          id={selectedId}
          onclickbutton={onclickbutton}
          deleteData={deleteData}
          previousData={previousData}
          nextData={nextData}
        />
      </div>
    </main>
  );
};
export default Main;
