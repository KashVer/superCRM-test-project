import React from "react";

import { formattedDateOne, formattedDateTwo } from "../utils/dates";
import { randomDescription, randomTagOne, randomTagTwo } from "../utils/texts";
import Avatar from "../img/Img.png";
import { IToDoItem } from "../types";

interface IToDoListProps {
  toDos: IToDoItem[] | null;
}

export const ToDoList: React.FC<IToDoListProps> = ({ toDos }) => {
  return (
    <ul className="flex flex-col gap-[8px]">
      {toDos &&
        toDos.map((toDo: any) => {
          return (
            <li
              key={`${toDo.id}${toDo.title}`}
              className="p-[4px] rounded-[7px] bg-[#F4F8FF]"
            >
              <div className="bg-white flex flex-col gap-[8px] p-[10px] rounded-[7px] shadow shadow-[0px 1px 2px 0px #D0DAEB, 0px 0px 2px 0px #EEF4FE]">
                <div className="flex gap-[8px] items-baseline">
                  <input
                    type="checkbox"
                    readOnly
                    checked={toDo.completed}
                    value=""
                  ></input>
                  <label className="text-[#3D8FEC] line-clamp-3 font-semibold text-sm">
                    {toDo.title}
                  </label>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <div className="flex justify-between gap-[8px] text-[#50B810] text-[13px] font-semibold leading-[18px]">
                    <p>{formattedDateOne}</p>
                    <p>{formattedDateTwo}</p>
                  </div>
                  <p className="font-normal text-[13px] leading-[18px] line-clamp-1 text-[#555555]">
                    {randomDescription}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex h-[20px]  mr-[4px]">
                    <span className="flex justify-center items-center gap-[8px] bg-[#B233A6] px-[6px] py-[2px] mr-[4px] rounded-[4px] text-white font-semibold text-xs">
                      {randomTagOne}
                    </span>
                    <div className="flex justify-center items-center h-[20px] after:border-[10px] after:border-[solid] after:border-[transparent] after:border-l-[10px] after:border-l-[#EBEEF6]">
                      <span className="px-[6px] py-[2px] bg-[#EBEEF6] rounded-l-[4px]  text-[#616C82] font-semibold text-xs overflow-hidden">
                        {randomTagTwo}
                      </span>
                    </div>
                  </div>
                  <img src={Avatar} alt="userAvatar" />
                </div>
              </div>
            </li>
          );
        })}
    </ul>
  );
};
