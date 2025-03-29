import {useState} from "react";

export function CreateTodo() {

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    


    return <div>
        <input type="text" placeholder="title" style = {{width:'600px', height:'50px'}} 
        
        onChange={(e)=>{
            const value = e.target.value;
            setTitle(value)

        }}
        
        /><br />


        <input type="text" placeholder="description" style = {{width:'600px', height:'50px'}}
        
        onChange={(e)=>{
            const value = e.target.value;
            setDescription(value)}}
        
        /> <br />


       <button
       
       onClick={()=>{
        //we can use axios here
           
        fetch('http://localhost:3000/todo' , {
            method: "POST",
            body:JSON.stringify({
                title:title,
                description:description
            }),
            headers: {
                "content-type":"application/jsom"
            }
        }).then(
            async (res)=>{
                const json = await res.json();
                alert("Todo Added")
            }
        )
       }}
       
       >Add Task</button>
    </div>
}