import logo from './logo.svg';
import './App.css';
import React from 'react'
import { useState } from 'react';
import styles from "./styles.module.css"; 

function App() {
  const [Days, setDays] = useState('day');
  const handleClick = (event) => {
    setDays(event.target.value)
   console.log(Days)
  };
 
  const style = (Days=== 'day' ) ? styles.Day : styles.Night ;
  return (
    <div>
       <button onClick={handleClick} value={'day'}>day</button>
       <button onClick={handleClick} value={'night'}>night</button>
      
      <div className={style}>
       
      </div>
      
    </div>
  );
}


export default App;
