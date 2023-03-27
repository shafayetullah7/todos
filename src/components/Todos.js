import Todo from './Todo';

const Todos = ({todos,deleteTodo}) => {

    return (
        <div className='h-full overflow-auto'>
            <div className='w-full text-left border border-orange-500'>
                <div className='border-b bg-orange-400 text-white grid grid-cols-6'>
                    <p className='text-lg font-bold col-span-2'>Todo</p>
                    <p className='text-lg font-bold'>Start Date</p>
                    <p className='text-lg font-bold'>End Date</p>
                    <p className='text-lg font-bold text-center'>Delete</p>
                    <p className='text-lg font-bold text-center'>Done</p>
                </div>
                <div>
                    {todos.map(todo => <Todo key={todo.key} todo={todo} deleteTodo={deleteTodo}></Todo>)}
                </div>
                
            </div>
            
        </div>
    );
};

export default Todos;