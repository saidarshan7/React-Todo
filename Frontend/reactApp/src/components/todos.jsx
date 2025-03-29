export function Todos({todos}){  //why todos are inside curly  brackets

    return <div>
        {todos.map((todo)=>{
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "Completed":"Mark as Complete"}</button>
                </div>
        })}
    </div>

}