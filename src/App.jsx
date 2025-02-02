
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";



function App() {

  const [projectsState , setProjectsState ] = useState({
    selectedProjectId: undefined,
    projects:[],
    tasks:[]
  })

  const [deleteId , setDeleteId] = useState(null)

  function handelStartAddProject(){
    setProjectsState(prev => {
      return {
        ...prev ,
        selectedProjectId:null
      }
    })
  }

  function handelSelectProject(id){
    setProjectsState(prev => {
      return {
        ...prev ,
        selectedProjectId:id
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

  function handelDelete(){
    setProjectsState(prev => {
      return {
        ...prev ,
        selectedProjectId:undefined,
        projects: prev.projects.filter(project => {
          project.id !== prev.selectedProjectId
        })
      }
    }) 
  }

  function handelDeleteId(ID){
    setDeleteId(ID)
  }

  function handelAddTask(text){
    setProjectsState( prev => {
      const taskId = Math.random()
      const newTask = {
        text: text,
        projectId: prev.selectedProjectId,
        id: taskId
      }
      return{
        ...prev ,
        tasks: [newTask , ...prev.tasks]
      }
    })
  }

  function handelDeleteTask(id){
    setProjectsState(prev => {
      return {
        ...prev ,
        tasks: prev.tasks.filter(task => task.id !==id)
      }
    }) 
  }
  

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)

  let content = <SelectedProject 
  project={selectedProject} 
  handelDelete={handelDelete}
  handelAddTask={handelAddTask}
  tasks={projectsState.tasks}
  handelDeleteTask ={handelDeleteTask}
  />

  if(projectsState.selectedProjectId===null){
    content = <NewProject  onAdd ={handelAddProject} onCancel ={handelCancelAddProject}/>;
  } else if(projectsState.selectedProjectId===undefined){
    content = <NoProjectSelected onStartAddProject ={handelStartAddProject}/>
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar 
      onStartAddProject ={handelStartAddProject} 
      projects={projectsState.projects}
      handelSelectProject={handelSelectProject}
      selectedProjectId={projectsState.selectedProjectId}
      handelDeleteId={handelDeleteId}/>

      
      {content}

  
    </main>
  );
}

export default App;
