import React, { useState ,useEffect} from "react";


const Interval =()=> {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      const interval = setTimeout  (() => {
        setCount(count + 1);
      }, 1000);
  
      return () => {
        clearTimeout(interval);
      };
    },[count]);
  
    return(
    <h1>count:{count}</h1>
    )
  };
  export default Interval;