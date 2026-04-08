import {useEffect, useState } from "react"
import Header from "./Componet/Headers"
import From from "./Componet/Fromm"
import Task from "./Componet/Task"
import db from "./data/tasks"
function App() {

  const[task, setTask]= useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : db;
  })
 const[filter,setFilter]= useState("all")
 
   const taksCompleted = task.filter((item)=>item.completed)
   const taksPending= task.filter(item=>!item.completed)

  const filterTask = task.filter((item)=>{
    if(filter === "active") return !item.completed
    if(filter === "completed") return item.completed
    return true
  })

 useEffect(()=>{
  localStorage.setItem("tasks",JSON.stringify(task))
 },[task])

// Funcion para agregar Tarea 
  function addTask (text){
   if(!text.trim()) return
   const newTask ={
    id: task.length +1 ,
    text:text.charAt(0).toUpperCase() + text.slice(1),
    completed: false,
    createdAt: new Date().toLocaleDateString()
   }
   setTask([...task,newTask])
    
  }
  //Funcion para tarea completada
  function toggleCompleted(id){
    setTask(task.map(item=>{
      if( item.id === id){
        return{
          ...item, 
          completed: !item.completed
        }
      }
      return item
    }))
  }
  //Funcion eliminar Tarea
  function deleteTask (id){
    const newTask = task.filter(item=> item.id !== id)
         setTask(newTask)
  }
  //Funcion para editar tarea 
  function editTask(id,newText){
    if(!newText.trim())return
  const updatedTask = task.map(item=> {
    if(item.id === id){
      return {...item,text:newText}
    }
    return item
  })
  setTask(updatedTask)
  }
  return (
  <div className="w-auto min-h-screen bg-primary">
  <Header />
  <From addTask={addTask} />

  <div className="flex flex-col items-center px-4">

    {/* BOTONES */}
    <div className="flex flex-wrap justify-center md:hidden gap-4 mt-4">
      <button onClick={()=>setFilter("all")} className="text-white flex gap-2 font-bold px-3 py-1 rounded hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
        <img src="./public/img/listaAll.png" className="w-5 h-5" />
        All
      </button>

      <button onClick={()=>setFilter("active")} className="text-white flex gap-2 font-bold px-3 py-1 rounded hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
        <img src="./public/img/listaVerificacion.png" className="w-5 h-5"/>
        Active
      </button>

      <button onClick={()=>setFilter("completed")} className="text-white flex gap-2 font-bold px-3 py-1 rounded hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
        <img src="./public/img/checkk.png" className="w-5 h-5" />
        Completed
      </button>
    </div>

    {/* MÓVIL */}
    <div className="flex flex-col items-center w-full md:hidden">
      {filterTask.length === 0 ? (
        <p className="text-gray-400 mt-10">No hay tareas aún 🚀</p>
      ) : (
        filterTask.map((item)=>(
          <Task
            key={item.id}
            item={item}
            toggleCompleted={toggleCompleted}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))
      )}
    </div>

    {/* TABLET-DESKTOP */}
    <div className="hidden md:flex w-full gap-6 mt-6">

      {/* Pendientes */}
      <div className="w-1/2 flex flex-col items-center">
        <h2 className="text-white font-bold mb-4">Pendientes</h2>

        {taksPending.length === 0 ? (
          <p className="text-gray-400">Sin tareas aún 🚀</p>
        ) : (
          taksPending.map((item)=>(
            <Task
              key={item.id}
              item={item}
              toggleCompleted={toggleCompleted}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          ))
        )}
      </div>

      {/* Completadas */}
      <div className="w-1/2 flex flex-col items-center">
        <h2 className="text-white font-bold mb-4">Completadas</h2>

        {taksCompleted.length === 0 ? (
          <p className="text-gray-400">Sin tareas aún 🚀</p>
        ) : (
          taksCompleted.map((item)=>(
            <Task
              key={item.id}
              item={item}
              toggleCompleted={toggleCompleted}
              deleteTask={deleteTask}
            />
          ))
        )}
      </div>

    </div>

  </div>
</div>)
};

export default App