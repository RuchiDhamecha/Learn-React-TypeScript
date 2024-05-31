import style from "./List.module.scss";
import { ListTypes } from "./List.types";

const List = (props: ListTypes) => {
  return (
    <>
      {props.data.map((d) => {
        return (
            <div
              className={style.List}
              onClick={() => props.onclickbutton(d.id)}
            >
              <span>{d.name}</span>
            </div>
        );
      })}
    </>
  );
};
export default List;
