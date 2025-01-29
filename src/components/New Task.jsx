
import { useState } from "react"

export default function NewTask({
    onAdd
}){

    const[enteredTask , setEnteredTask] =useState('');

    function handelChangeTask(event){
        setEnteredTask(event.target.value)
    }
    function onClick(){
        if(enteredTask.trim() ===''){
            return;
        }
        onAdd(enteredTask);
        setEnteredTask('')
    }
    return(
        <div className="flex items-center gap-4">
            <input  
             onChange={handelChangeTask} 
             value={enteredTask}
              type="text" 
              className="w-64 py-1 px-2 rounded-sm bg-stone-200"/>
            <button 
            className="text-stone-700 hover:text-stone-950"
            onClick={onClick}>
                Add Task
            </button>
        </div>
    )
}