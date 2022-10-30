import { useState, useEffect } from 'react';

  export default function horafecha(){
    const [currentTime, setCurrentTime] = useState("00:00:00");

    useEffect(() => {
      const date = new Date();
      const interval = setInterval(() => {
        setCurrentTime(() => {
          const hour = ("" + date.getHours()).slice(-2);
          const minutes = ("0" + date.getMinutes()).slice(-2);
          const seconds = ("0" + date.getSeconds()).slice(-2);
          const dias=["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
          const meses=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ];
          const day = ("" + dias[date.getDay()] + " " +date.getDay());
          const month = ("" + meses[date.getMonth()]);
          const year = ("" + date.getFullYear());
          return `${day} de ${month} del ${year} - ${hour}:${minutes}:${seconds}`;
        });
      }, 1000);
  
      return () => clearInterval(interval);
    });
    return(<>
    
    <span>{currentTime}</span> 
    
    </>);

   
  }