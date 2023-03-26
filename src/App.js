
import './App.css';
import Aside from './components/aside/Aside';
import Todos from './components/Todos';

function App() {
  return (
    <div className='p-5 h-screen flex flex-col'>
      <h1 className='text-center h-fit text-4xl font-bold text-[#ff9f43]'>Manage Your Todos</h1>

      <div className='h-full mt-5 flex border-2 border-red-500 overflow-hidden'>
        <div className='w-full h-full border'>
          <Todos></Todos>
        </div>
        <div className='border w-1/2'>
          <Aside></Aside>
        </div>
      </div>
    </div>
    
  );
}

export default App;
