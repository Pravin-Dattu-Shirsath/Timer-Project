import React,{useState,useEffect} from 'react';
 
import './App.css';
function App() {
  const [hour,setHour]=useState(0)
  const [minutes,setMinutes]=useState(0)
   const [seconds,setSeconds]=useState(0)
 const[start,setStart]=useState(false)
var timer;
useEffect(()=>{
  
  if(start===true){
     timer= setInterval(()=>{
    setSeconds(seconds+1);
   if(seconds===60){
     setMinutes(minutes+1)
      setSeconds(0);
   }else if(minutes===60){
     setContinu(true)
     if(continu===true){
       setHour(hour+1)
      setMinutes(0)
      setSeconds(0);
     }
     
   }
  },1000)
  
  }

  return ()=>clearInterval(timer)
  
});

  function stopbtn(){
   setStart(false)
   clearInterval(timer)
 
  }

  function restartbtn(){
    setStart(true)
     setHour(0)
      setMinutes(0)
      setSeconds(0);
  }

  //
 
  
 
  function startbtn(){
     setStart(true)

  }
  return (<>
    
    <main className="container mt-5 text-center  ">
    <center> <h1 className="text-white container w-25 p-2 mb-5" >Timer</h1></center>  
      <div className ="mb-5 container rad  bg- ">
     
       <div >
         <h3>{hour<10?"0"+hour:hour}:{minutes<10?"0"+minutes:minutes}:{seconds<10?"0"+seconds:seconds}</h3>
</div>
      </div>
      <div>
      </div>
     {
       
       start===true?<button className="  mt-5 mx-2 bg-danger" onClick={stopbtn}><i class="fa fa-pause-circle" aria-hidden="true"></i></button>:<button className=" mt-5 mx-2" onClick={startbtn}><i class="fa fa-play-circle" aria-hidden="true"></i></button>
         } 
       <button className="  mt-5" onClick={restartbtn}><i class="fa fa-refresh" aria-hidden="true"></i></button>  
     </main></>
  );
}

export default App;