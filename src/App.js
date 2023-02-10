import logo from './logo.svg';
import './App.css';
import React from 'react'
import { useState } from 'react';
import styles from "./styles.module.css"; 

function App() {
  const [setDays, setSetDays] = useState('day');
  const handleClickDay = () => {
    setSetDays('day')
  };
  const handleClickNight = () => {
    setSetDays('night')
  };
  const style = (setDays=== 'day' ) ? styles.Day : styles.Night ;
  return (
    <div>
       <button onClick={handleClickDay} value={'day'}>day</button>
       <button onClick={handleClickNight} value={'night'}>night</button>
      
      <div className={style}>
       
      </div>
      
    </div>
  );
}

export default App;
