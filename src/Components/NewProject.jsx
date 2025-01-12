import { useRef } from "react";
import Input from "./Input";

export default function NewProject({onAdd, cancel}){
    const titleRef = useRef();
    const desRef = useRef();
    const dueDate = useRef();

    function handleSave(){
            const enteredTitle = titleRef.current.value;
            const enteredDescription = desRef.current.value;
            const enteredDueDate = dueDate.current.value;

            if(enteredTitle.trim() === "" || enteredDueDate.trim() === "" || enteredDescription.trim() === ""){
                
            }

            onAdd({
                title: enteredTitle,
                description: enteredDescription,
                dueDate: enteredDueDate
            })
    }
    function handleCancel(){
     cancel()
    }

    return(
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li><button onClick={handleCancel}className="text-stone-800 hover:text-stone-950">Cancel</button></li>
                    <li><button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
                </menu>
                <div>
                    <Input type="text" ref={titleRef} label={"Title"}/>
                    <Input ref={desRef} label={"Description"} textarea/>
                    <Input type="date" ref={dueDate} label={"Due Date"} />
                </div>
            </div>
    )
}