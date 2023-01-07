import React,{ useState, useEffect }  from 'react'

const Task = () => {
  const [count, setCount] = useState(0);
 
  useEffect(() => {
    const time= setInterval(()=>{
      setCount(count+1)
   },1000)
   return ()=>{
    clearInterval(time)
   }
  });
  return (
    <div>
       <p>{count} times</p>
      
    </div>
  );
};

export default Task;
