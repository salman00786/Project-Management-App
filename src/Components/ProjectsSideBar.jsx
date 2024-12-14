import { useState } from "react"
import Button from "./Button"

export default function ProjectsSideBar({selectProject, projects}){

    function handleClick(){
        console.log("Clicked")
    }
  
    return(
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl" >
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Projects</h2>
            <div >
                
               <Button onClick={selectProject}>+ Project</Button>
                <ul className="mt-8">
                    {projects.map(projects => <li key={projects.id}><button className="w-full text-left px-2 py-1 rounded-smmy-1 tect-stone-400 hover:text-stone-200 hover:bg-stone-800" onClick={handleClick}>{...projects.title}</button></li>)}
                </ul>
            </div>
        </aside>
    )
}