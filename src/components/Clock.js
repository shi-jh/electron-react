import React,{useState, useEffect } from 'react';

function Clock() {
  const cdate = new Date().toLocaleDateString();
  const [currentT, setCurrentT] = useState('00:00:00');
  const day = new Date().getDay();
  let days = "";  
    switch (day) {
      case 0:  days = "일";  break;
      case 1:  days = "월";  break;
      case 2:  days = "화";  break;
      case 3:  days = "수";  break;
      case 4:  days = "목";  break;
      case 5:  days = "금";  break;
      case 6:  days = "토";  break;
      default: days = "";  break;
    };    
  
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setCurrentT(date.toLocaleTimeString());
    },1000)
  },[])

  return (
    <div className="clock">
      { `${cdate} ${days} ${currentT}` }
    </div>
  )
}

export default Clock;
