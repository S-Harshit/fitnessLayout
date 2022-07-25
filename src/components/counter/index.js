import React, { useEffect, useState } from 'react'
import './index.css'
export const Counter = ({ counterName, target, currentIndex, usersData, setUsersData }) => {

  const [targ, setTarg] = useState(usersData[currentIndex].stepsTarget);
  const [calories, setCalories] = useState(usersData[currentIndex].caloriesTarget);


  useEffect(() => {
    console.log(targ);
  }, [])


  const increment = () => {
    let number = Number(targ);
    if (counterName === 'steps') {
      number += 500;
    }
    else {
      number += 100;
    }
    setTarg(number);
    updateState((Math.round(number * 100) / 100).toFixed(1));
    return;
  }

  const decrement = () => {
    let number = Number(targ);
    if (number > 0) {

      if (counterName === 'steps') {
        number -= 500;
      }
      else {
        number -= 100
      }
      setTarg(number);
      updateState((Math.round(number * 100) / 100).toFixed(2));
    }
    return;

  }



  function kFormatter(num) {

    return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k ' : Math.sign(num) * Math.abs(num)
  }

  function updateState(newTarget) {

    let users = [...usersData];
    let user = users[currentIndex];

    // console.log(newTarget);
    if (counterName === 'steps') {
      user.stepsTarget = newTarget;

    }
    else {
      user.calorieTarget = newTarget;
    }

    users[currentIndex] = user;
    // users[currentIndex] = user.stepsTteps;

    // console.log(users);

    setUsersData(users);
  }

  if (counterName === 'steps') {
    return (
      <>
        <div className="target">
          <button className='increment' onClick={increment} >+</button>
          <span className='targetCount'>{

            kFormatter(usersData[currentIndex].stepsTarget)

          }</span>
          <p>target </p>
          <button className='decrement' onClick={decrement}>-</button>
        </div>
      </>
    )
  }
  else {
    return (
      <>
        <div className="target">
          <button className='increment' onClick={increment} >+</button>
          <span className='targetCount'>{kFormatter(usersData[currentIndex].calorieTarget)
          }</span>
          <p>target </p>
          <button className='decrement' onClick={decrement}>-</button>
        </div>
      </>
    )
  }

}
