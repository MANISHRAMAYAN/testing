export default function Tasks(){
    async function handleClick(){
      const  postHeader={
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        }
        const responsive= await fetch("http://localhost/employee/allData",postHeader)
        console.log(responsive);
    }
  

    return(
        <>
        <button onClick={handleClick}>click</button>


        
        
        
        </>
    )
}