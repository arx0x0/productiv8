import React, {useState, useEffect} from "react";
import "./Pomodoro.css"

const Pomodoro = () => {

    const [min, setMin] = useState(25);
    const [sec, setSec] = useState(0);
    const [message, setMessage] = useState(false);

    useEffect(() => {
        let interval = setInterval(() => {
          clearInterval(interval);

          if (sec === 0) {
            if (min !== 0) {
              setSec(59);
              setMin(min - 1);
            } else {
              let min = message ? 24 : 4;
              let sec = 59;
          
              setSec(sec);
              setMin(min);
              setMessage(!message);
            }
          } else {
            setSec(sec - 1);
          }
        }, 1000);

      }, [sec]);

    const clockMin = min < 10 ? `0${min}` : min;
    const clockSec = sec < 10 ? `0${sec}` : sec;

   
   return (
    <div className="pomodoro">
    <div className="message">
      {message && <div>Take a break! New session starts in:</div>}
    </div>
    <div className="timer">
      {clockMin}:{clockSec}
    </div>
  </div>

    );

}


export default Pomodoro;