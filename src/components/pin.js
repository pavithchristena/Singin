import React, { useState ,useEffect} from "react";
import './Style.css';
import { Button} from '@mui/material';

const Pin=()=>{
    const [num,setNum]=useState(0);
    const [count, setCount] = useState(0);

    const incNum=()=>{
        setNum(num+1);
    }
    const decNum=()=>{
        setNum(num-1);
    }
    useEffect(() => {
        const interval = setTimeout  (() => {
          setCount(count + 1);
        }, 1000);
    
        return () => {
          clearTimeout(interval);
        };
      },[count]);
    return(
        <>
        <div>
            <center><table>
            <h1> <th><Button variant="contained" onClick={decNum}>-</Button></th>
            <th>{num}</th>
            <th><Button variant="contained" onClick={incNum}>+</Button></th></h1>
             </table></center>
        </div>
        <div>
        <h1>count:{count}</h1>
        </div>
        </>
    )
}

export default Pin;