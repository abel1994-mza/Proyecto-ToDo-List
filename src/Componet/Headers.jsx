import ButtonAdd from "./button"


function header (){
    return(
        <>
        <div className="  mx-auto px-6 py-8 bg-primary  ">
        <div className="flex items-center justify-between">
          <div className=" flex justify-between gap-3 items-center">
              <img className="w-8 h-8 animate-rotateIcon" src="./img/Check.png" alt=""  />
          <h1 className="text-3xl font-bold text-foreground text-amber-50">My TO-DO LIST</h1>
          </div>      
  
        </div>
      </div>



        </>
    )
}


export default header