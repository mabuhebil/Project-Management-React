
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";



function App() {

  const [projectsState , setProjectsState ] = useState({
    selectedProjectId: undefined,
    projects:[],
  })

  function handelStartAddProject(){
    setProjectsState(prev => {
      return {
        ...prev ,
        selectedProjectId:null
      }
    })
  }

  function handelCancelAddProject(){
    setProjectsState(prev => {
      return {
        ...prev ,
        selectedProjectId:undefined
      }
    }) 
  }

  function handelAddProject (projectDtaa){
    setProjectsState(prev => {
      const newProject ={
        ...projectDtaa, 
        id:Math.random()
      }
      return{
        ...prev,
        selectedProjectId:undefined,
        projects: [...prev.projects , newProject]
      }
    })
  }

  

  let content;
  if(projectsState.selectedProjectId===null){
    content = <NewProject  onAdd ={handelAddProject} onCancel ={handelCancelAddProject}/>;
  } else if(projectsState.selectedProjectId===undefined){
    content = <NoProjectSelected onStartAddProject ={handelStartAddProject}/>
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar 
      onStartAddProject ={handelStartAddProject} 
      projects={projectsState.projects}/>
      {content}

  
    </main>
  );
}

export default App;
