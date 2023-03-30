import Todo from './Todo';

const Todos = ({todos,completeTodo,deleteTodo}) => {

    return (
        <div className='h-full bg-orange-50 overflow-auto'>
            <div className='w-full text-left '>
                <div className='border-b bg-orange-400 px-2 text-white grid grid-cols-6'>
                    <p className='text-lg font-bold col-span-2'>Todo</p>
                    <p className='text-lg font-bold'>Start Date</p>
                    <p className='text-lg font-bold'>End Date</p>
                    <p className='text-lg font-bold text-center'>Delete</p>
                    <p className='text-lg font-bold text-center'>Done</p>
                </div>
                <div className='mt-2'>
                    {todos.map(todo => <Todo key={todo.key} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo}></Todo>)}
                </div>
                
            </div>
            
        </div>
    );
};

export default Todos;