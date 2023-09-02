import React, {useEffect, useRef, useState} from "react";
import axios from "axios";

import { ToDoList } from "./ToDoList";
import PlusSign from "../img/PlusSign.png";
import {IToDoItem} from "../types";

interface IToDoPageStateProps {
  items: IToDoItem[]
  isLoading: boolean
  page: number
}

export const ToDoPage: React.FC = () => {
  const [state,setState] = useState<IToDoPageStateProps>({items: [], isLoading: false, page: 1})

  const fetchData = async () => {
    setState((previousState) => ({ ...previousState, isLoading: true}))
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${state.page}`);
      const data = await response.data;
      setState((previousState) => ({ ...previousState, page: previousState.page + 1, items: previousState.items.concat(data)}))
    } catch (error) {
      console.log(error)
    } finally {
      setState(prev => ({...prev, isLoading: false}))
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
        entries => {
          if (state.items.length > 0 && !state.isLoading && state.page < 21 && entries[0].isIntersecting) {
            fetchData();
          }
        },
        { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget, state]);

  return (
    <div className="flex flex-col items-center mt-[92px]">
        <div className="w-[263px] h-[716px] gap-[8px] flex flex-col">
          <div className="flex justify-between items-center px-[4px] py-0">
            <h2 className="font-semibold text-sm leading-5 text-[#50B810]">
              Today
            </h2>
            <div className="flex justify-between gap-[8px]">
              <button disabled>
                <img src={PlusSign} alt="plus sign" className="h-full" />
              </button>
              <span className="px-[6px] py-[2px] border-[#7B8AAB] rounded-[4px] border-[1px] text-[#555555] font-semibold text-xs">
                {state.items ? state.items.length : 0}
              </span>
            </div>
          </div>
          <div className="overflow-y-scroll">
          <ToDoList toDos={state.items} />
            {state.isLoading && <p>Loading...</p>}
          <div ref={observerTarget}></div>
          </div>
        </div>
    </div>
  );
};
