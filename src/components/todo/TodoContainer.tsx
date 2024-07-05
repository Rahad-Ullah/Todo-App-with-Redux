import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";
import { TTodo } from "@/redux/features/todoSlice";

const TodoContainer = () => {
  const [priority, setPriority] = useState('')
  
  //? local store
  // const { todos } = useAppSelector((state) => state.todos);

  //? remote api
  const { data } = useGetTodosQuery(priority);
  const todos = data?.data;

  return (
    <div>
      <div className="flex justify-between items-center gap-3 mb-5">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority}/>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-2">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos?.length ? (
            todos.map((item: TTodo) => <TodoCard key={item._id} {...item} />)
          ) : (
            <div className="text-center font-semibold text-gray-500">
              Your Todo list is empty.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
