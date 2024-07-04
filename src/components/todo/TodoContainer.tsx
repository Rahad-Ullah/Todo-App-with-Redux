import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  // local store
  // const { todos } = useAppSelector((state) => state.todos);

  // remote api
  const {data: todos}= useGetTodosQuery(undefined)

  return (
    <div>
      <div className="flex justify-between items-center gap-3 mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-2">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos?.length ? (
            todos.map((item) => <TodoCard key={item.id} {...item} />)
          ) : (
            <div className="text-center font-semibold text-gray-500">Your Todo list is empty.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
