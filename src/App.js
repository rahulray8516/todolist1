import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import TodoList from './components/todoList';
import EditTodo from './components/editTodo';
import CreateTodo from './components/createTodo';


function App() {
  return (
    <div className="container">
      <h1>Hi Rahul Bhai</h1>
       <BrowserRouter>
       <Switch>
          <Route path="/" exact element={<TodoList/>} />
          <Route path="edit/:id" exact element={<EditTodo/>} />
          <Route path="/create" exact element={<CreateTodo/>} />
        </Switch>
       </BrowserRouter>
    </div>
  );
}

export default App;
