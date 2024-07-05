import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useUpdateTodoMutation } from "@/redux/api/api";
import { TTodo } from "@/redux/features/todoSlice";

const UpdateTodoModal = ({ _id, title, description, priority }: TTodo) => {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newPriority, setNewPriority] = useState("");

  //! For server
  const [updateTodo] = useUpdateTodoMutation();

  const handleUpdateTodo = (e: FormEvent) => {
    e.preventDefault();

    const todo = {
      title: newTitle,
      description: newDescription,
      priority: newPriority,
    };

    const todoData = {
      id: _id,
      todo,
    };

    //! for server
    updateTodo(todoData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"default"} className="bg-[#5C53FE]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add task</DialogTitle>
          <DialogDescription>
            Add your tasks that you want to finish.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleUpdateTodo}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Task
              </Label>
              <Input
                onBlur={(e) => setNewTitle(e.target.value)}
                id="task"
                defaultValue={title}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                onBlur={(e) => setNewDescription(e.target.value)}
                id="description"
                defaultValue={description}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="priority" className="text-right">
                Priority
              </Label>
              <Select onValueChange={(value) => setNewPriority(value)}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder={priority} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogClose asChild>
            <DialogFooter>
              <Button type="submit">Update Task</Button>
            </DialogFooter>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateTodoModal;
