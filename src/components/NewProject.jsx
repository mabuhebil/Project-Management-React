
import Input from "./Input"

import { useRef } from "react"
 import Modal from './Modal'

export default function NewProject({onAdd, onCancel}){

    const title =useRef();
    const description =useRef();
    const dueDate =useRef();
    const modal =useRef();

    function handelSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDuDate= dueDate.current.value;

        if(
            enteredTitle.trim()===''||
            enteredDescription.trim()===''||
            enteredDuDate.trim()===''
        ){
           modal.current.open();
           return; 
        }



        onAdd({
            title:enteredTitle,
            description:enteredDescription,
            dueDate:enteredDuDate,
        })
    }
    return(
        <>
        <Modal ref={modal} caption='Close'>
            <h2 className="text-xl font-bold text-stone-700 m-4">Invalid Input</h2>
            <p className="text-stone-600 mb-4">Oops... looks like you forgot to enter value</p>
            <p className="text-stone-600 mb-4">please make sure you provude avalid value for every Innput</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li ><button 
                 className="text-stone-800 hover:text-stone-950"
                 onClick={onCancel}>Cancel</button></li>
                <li><button 
                className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                onClick={handelSave}
                >Save</button></li>
            </menu>
            <div>
                <Input type='text' ref={title}  label='Title'/>
                <Input  ref={description}  label='Description' textarea/>
                <Input type='Date' ref={dueDate} label='Due Data' />
            </div>
        </div>
        </>
    )
}