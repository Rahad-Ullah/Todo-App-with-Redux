import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <h1 className="text-3xl text-center font-semibold py-4">Todo Application</h1>
      <TodoContainer/>
    </Container>
  );
};

export default Todo;
