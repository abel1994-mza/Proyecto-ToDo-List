function buttonAdd ({setOpen}){
    return(
        <>
        <button onClick={()=>setOpen(true)} className=" flex items-center justify-center w-12 h-12  rounded-full  text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 hover:bg-gray-200 active:scale-95">
            <img src="./img/agregar.svg" alt="" />
        </button>
        </>
    )

}


export default buttonAdd