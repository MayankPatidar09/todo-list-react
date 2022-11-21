import './App.css';
import TodoForm from './componants/TodoForm';
import TodoList from './componants/TodoList';

function App() {
  return (
    <div className="todo-app">
      <TodoList />
      {/* <TodoForm /> */}
    </div>
  );
}

export default App;
