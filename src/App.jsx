import { useState } from "react";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import ProjectsSideBar from "./Components/ProjectsSideBar";

function App() {

  const [projectState, setProjectState] = useState({
    selectedProject:undefined,
    projects:[]
  })

  function handleStartAddProject(){
    setProjectState(prevState => {
      return({
        ...prevState,
        selectedProject:null
    })
    })
    console.log("Checked1");
  }

  function handleAddProject(projectData){
 
   
    setProjectState(prevState => {
      const projectID = Math.random();
      const newProject = {
          ...projectData,
          id: projectID
      }
      return {
        ...prevState,selectedProject: undefined, projects:[...prevState.projects, newProject]
      }
    })
    console.log("Checked2");
  
  
 
}

function handleCancel(){
  setProjectState(prevState => {
    return({
      ...prevState,
      selectedProject:undefined
  })
  })
}


    
   let content;
  if(projectState.selectedProject === null){
     content = <NewProject onAdd={handleAddProject} cancel={handleCancel} />
  } else if(projectState.selectedProject === undefined){
        content = <NoProjectSelected selectProject={handleStartAddProject}/>
  }
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
       
        <ProjectsSideBar selectProject={handleStartAddProject} projects={projectState.projects}/>
        {content}
    
      </main>
      
    </>
  );
}

export default App;
