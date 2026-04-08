 import { Check } from "lucide-react";
 import { Trash } from "lucide-react";
 import { Pencil } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";


 function Task({ item,toggleCompleted, deleteTask, editTask }) {
  const{createdAt,text,id}=item
  const[editText, setEditText]= useState(text)
  const[isEditing, setIsEditing]=useState(false)
   const[isDeleting, setIsDeleting]=useState(false)
 
  useEffect(() => {
  setEditText(text)
}, [text])

function handleDelete() {
  setIsDeleting(true);       
  setTimeout(() => {
    deleteTask(id);           
  }, 300); 
}

  return (
      <div className="flex justify-items-start m-6 h-50">
      <div className={`w-[280px] h-[150px] p-4 rounded-2xl   hover:shadow-xl transition-all hover:scale-105 ${item.completed ? "bg-third": "bg-secondary card"} ${isDeleting ? "opacity-0 translate-x-10" : "opacity-100 translate-x-0"}`}>
        
        <div className="flex justify-between items-center">
          
          <button  onClick={()=>{handleDelete()}}  className=" w-8 h-8  flex items-center border rounded-full justify-center  hover:bg-red-400 transition">
            <Trash  />
          </button>
          <button disabled={item.completed || isEditing} onClick={()=>toggleCompleted(id)} className={`w-8 h-8 flex items-center  justify-center border rounded-full hover:bg-amber-50 transition ${item.completed ? "bg-transparent hover:bg-transparent": "hover:bg-gray-200"}` }>
            <Check/> 
          </button>
          <button disabled={item.completed} onClick={()=>setIsEditing(true)} className={`w-8 h-8 flex items-center  justify-center border rounded-full  ${item.completed ? "bg-transparent": "hover:bg-amber-400"}` }><Pencil/></button>
        </div>
        <div className=" flex flex-col mt-5">
          {isEditing ?(<>
          <input type="text" 
          value={editText} 
          onChange={(e)=>setEditText(e.target.value)} 
          onKeyDown={(e) => {
                if (e.key === "Enter") {
                 editTask(id, editText)
                  setIsEditing(false)
                   }
                  }} className="p-1 rounded border-2 focus:outline-none focus:ring-2 focus:ring-mist-300 text-white  " 
            />
            <button
            onClick={()=>{
              editTask(id, editText)
              setIsEditing(false)
            }}
            className="mt-2 text-sm bg-gray-200 px-2 py-1 ring-gray-500/50   shadow-lg shadow-gray-500/50 rounded-lg  hover:shadow-xl  hover:bg-gray-300 active:bg-gray-400 cursor-pointer transition-colors duration-200"
            >Guardar</button>
          
            </>
            )
          : (  <>
          <h2 className={`font-semibold text-white text-lg ${item.completed ? "line-through":" "}`}>{text}</h2>
           <p className="font-bold text-white text-sm">{createdAt}</p>
           </>  )}
         
          
        </div>     
          

      </div>
    </div>
  );
}

export default Task