import { useEffect, useState } from "react";
import axios from "axios";

import { ToDoList } from "./ToDoList";
import PlusSign from "../img/PlusSign.png";
import { IToDoItem } from "../types";

export const ToDoPage: React.FC = () => {
  const [toDos, setToDos] = useState<IToDoItem[] | null>(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setToDos(res.data));
  }, []);

  return (
    <div className="flex flex-col items-center mt-[92px]">
      <div className="w-[263px] overflow-scroll h-[716px] gap-[8px] flex flex-col">
        <div className="flex justify-between items-center px-[4px] py-0">
          <h2 className="font-semibold text-sm leading-5 text-[#50B810]">
            Today
          </h2>
          <div className="flex justify-between gap-[8px]">
            <img src={PlusSign} alt="plus sign" />
            <span className="px-[6px] py-[2px] border border-[#7B8AAB] rounded-[4px] border-[1px] text-[#555555] font-semibold text-xs">
              {toDos ? toDos.length : 0}
            </span>
          </div>
        </div>
        <ToDoList toDos={toDos} />
      </div>
    </div>
  );
};
