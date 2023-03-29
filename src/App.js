
import { useEffect, useState } from 'react';
import './App.css';
import Aside from './components/aside/Aside';
import Todos from './components/Todos';

function App() {
  const [todos,setTodos] = useState([]);
  const [deleted,setDeleted] = useState([]);
  // const [completed,setCompleted] = useState([]);

  const addToLocalTodos = todo =>{
    const id = todo.id;
    console.log(todo);
    let todos = localStorage.getItem('todos');
    if(todos){
      console.log('present')
      todos = JSON.parse(todos);
      todos = {...todos,[id]:todo};
      // localStorage.setItem('todos',todos);
    }
    else{
      console.log('not present');
      // localStorage.setItem('todos',{[id]:todo});
    }
  }

  const addTodo = todo =>{
    addToLocalTodos(todo);
    setTodos(todos => [...todos,todo]);
  };
  useEffect(()=>{
    console.log(todos);
  },[todos])

  const deleteTodo = todo => {
    setDeleted(deleted => [...deleted,todos.find(t=>t.key===todo.key)]);
  };

  // const markCompleted = todo =>{
  //   setCompleted(completed => [...completed,todos.find(t => t.key===todo.key)]);
  // }

  useEffect(()=>{
    setTodos(todos => todos.filter(todo => !deleted.includes(todo)));
    console.log('deleted',deleted);
  },[deleted,setTodos])

  return (
    <div className='p-5 h-screen flex flex-col max-w-[1280px] mx-auto'>
      <h1 className='text-center h-fit text-4xl font-bold text-[#ff9f43]'>Manage Your Todos</h1>

      <div className='h-full mt-5 flex flex-col sm:flex-row border-2 border-red-500 overflow-hidden'>
        <div className='w-full h-full border'>
          <Todos todos={todos} deleteTodo={deleteTodo}></Todos>
        </div>
        <div className='border w-1/2'>
          <Aside addTodo={addTodo}></Aside>
        </div>
      </div>
    </div>
    
  );
}

export default App;
