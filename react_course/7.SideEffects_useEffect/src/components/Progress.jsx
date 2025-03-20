import { useEffect, useState } from "react"



export default function Progress({TIMER}) {
    const [remainingTime, setRemainingTime] = useState(TIMER)

      useEffect(() => {
        const interval = setInterval(() => {
          setRemainingTime(prev => prev - 10)
        }, 10)
    
        return () => {
          clearInterval(interval)
        };
      }, [])

    return (<progress value={remainingTime} max={TIMER} />)
}