import { useState } from "react"
import { PlusIcon } from "lucide-react"


function From({addTask}){
    const[text,setText]=useState("")
    return(
        <div className="h-35 w-50  ">
             <div className="flex flex-col gap-3 p-4  rounded-2xl shadow-md  m-3">
             <form onSubmit={(e)=>{e.preventDefault() ,addTask(text), setText("")} } id="task-form"  className=" flex   ">
               <input onChange={(e)=>{setText(e.target.value)}} value={text} type="text" id="task-input" placeholder="Agregar nueva tarea" className="w-auto h-12 text-center border-none text-white outline-none  rounded-4xl bg-secondary focus:bg-gray-500 transition"/>
               <button  type="submit" className= " flex justify-center items-center text-white  w-20 ml-5 pr-4 ring-2 ring-gray-500/50  shadow-lg    hover:shadow-xl rounded-4xl hover:bg-gradient-to-r from-sky-500 to-fuchsia-500  transition-400" >
                <PlusIcon className="w-10 "/>  Add
               </button>
              
             </form>
        </div>
        </div>
       
        
    
    )
}

export default From;