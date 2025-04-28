import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
// import TodoItem1 from "./components/TodoItem1";
// import TodoItem2 from "./components/TodoItem2";
import "./App.css";
// import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
function App() {

  const todoItems = [
    {
      name: 'Buy Milk',
      dueDate: '4/10/2023'
    },
    {
      name: 'Go to college',
      dueDate: '4/10/2023'
    },
    {
      name: 'Like this video',
      dueDate: 'Right now'
    }
  ];
  


  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
      
    </center>
  );
}

export default App;