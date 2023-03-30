
import { useEffect, useState } from 'react';
import './App.css';
import Aside from './components/aside/Aside';
import Todos from './components/Todos';

function App() {
  const [todos,setTodos] = useState([]);
  const [deleted,setDeleted] = useState([]);
  const [completed,setCompleted] = useState([]);


  useEffect(()=>{
    setTodos(todos => todos.filter(todo => !deleted.includes(todo)));
  },[deleted,setTodos,completed]);
  
  useEffect(()=>{
    setTodos(todos => todos.filter(todo => !completed.includes(todo)));
  },[setTodos,completed]);

  useEffect(()=>{
    // let localTodos = localStorage.getItem('todos');
    // if(localTodos){
    //   localTodos = JSON.parse(localTodos);
    //   setTodos(localTodos);
    // }

    // let localDelets = localStorage.getItem('deletes');
    // if(localDelets){
    //   localDelets = JSON.parse(localDelets);
    //   setDeleted(localDelets);
    // }

    // let localCompleted = localStorage.getItem('completes');
    renderLocal('todos',setTodos);
    renderLocal('deletes',setDeleted);
    renderLocal('completes',setCompleted);
  },[]);

  const renderLocal = (storageName,setter) =>{
    let localTodos = localStorage.getItem(storageName);
    if(localTodos){
      localTodos = JSON.parse(localTodos);
      setter(localTodos);
    }
  }

  const addToLocal = (storageName,todo) =>{
    let localTodos = localStorage.getItem(storageName);
    if(localTodos){
      localTodos = JSON.parse(localTodos);
      localTodos = [...localTodos,todo];
      localStorage.setItem(storageName,JSON.stringify(localTodos));
    }
    else{
      localStorage.setItem(storageName,JSON.stringify([todo]));
    }
  }

  const deleteFromLocal = (storageName,todo) =>{
    let storage = localStorage.getItem(storageName);
    if(storage){
      storage = JSON.parse(storage);
      storage = storage.filter(item => item.key!==todo.key);
      localStorage.setItem(storageName,JSON.stringify(storage));
    }
  }


  const addTodo = todo =>{
    addToLocal('todos',todo);
    setTodos(todos => [...todos,todo]);
  };

  const deleteTodo = todo => {
    todo.delete = new Date().toDateString();
    addToLocal('deletes',todo);
    deleteFromLocal('todos',todo);
    setDeleted(deleted => [...deleted,todo]);
  };
  const completeTodo = todo => {
    todo.delete = new Date().toDateString();
    addToLocal('completes',todo);
    deleteFromLocal('todos',todo);
    setCompleted(completed => [...completed,todo]);
  }

  const deleteRecord = (storageName,todo) =>{
    deleteFromLocal(storageName,todo);
    if(storageName==='deletes')setDeleted(deleted.filter(t=>t.key!==todo.key));
    else if(storageName==='completes')setCompleted(completed.filter(t=>t.key!==todo.key));
  }

  return (
    <div className='flex justify-center items-center'>
      <div className='p-5 h-[600px] w-[1280px] mx-auto'>
        <h1 className='text-center h-fit text-4xl font-bold text-[#ff9f43]'>Manage Your Todos</h1>

        <div className='h-full mt-5 flex flex-col sm:flex-row sm:gap-5 overflow-hidden'>
          <div className='w-full h-full'>
            <Todos todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo}></Todos>
          </div>
          <div className='w-1/2 overflow-hidden'>
            <Aside addTodo={addTodo} completed={completed} deleted={deleted} deleteRecord={deleteRecord}></Aside>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
