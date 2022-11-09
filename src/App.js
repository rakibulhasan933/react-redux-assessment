import './App.css';
import InputTodo from './components/InputTodo';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <h1>My Shopping List</h1>
      <InputTodo />
      <Todos />
    </div>
  );
}

export default App;
