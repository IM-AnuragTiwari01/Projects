import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
// import TodoItem1 from "./components/TodoItem1";
// import TodoItem2 from "./components/TodoItem2";
import "./App.css";
import TodoItem from "./components/TodoItem";
function App() {

  const todoItems=[{
    name: 'Buy Milk',
    dueDate: '4/10/2023'
}];


  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
        <TodoItem todoName= "BuyMilk" todoDate="4/10/2023"></TodoItem>
        <TodoItem todoName = "Go to College" todoDate = "4/10/2023"></TodoItem>
      </div>
    </center>
  );
}

export default App;