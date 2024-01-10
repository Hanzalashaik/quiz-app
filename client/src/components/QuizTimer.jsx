import { useEffect, useState } from "react";

export default function QuizTimer({timeout ,onTimeOut ,mode}){
    const [remainingTime ,setRemainingTime] = useState(timeout)
    
    useEffect(()=>{
        // console.log("set timeout");
        const timer = setTimeout(onTimeOut,timeout);

        return ()=>{
            clearTimeout(timer)
        }
    },[timeout,onTimeOut])

    useEffect(()=>{
        // console.log("set interval");
       const interval = setInterval(()=> {
            setRemainingTime((prevRemainingTime)=> prevRemainingTime - 100);
        },100)

        return ()=>{
            clearInterval(interval);
        }
    },[])

    return <progress id="question-time" max={timeout} value={remainingTime}
            className={mode}
    />
}