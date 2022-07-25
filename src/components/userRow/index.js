import React, { useEffect, useState, } from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'
import { Circularbar } from '../circulerProgressBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faUserCheck } from '@fortawesome/free-solid-svg-icons'
import { Chart } from '../chart'
import { Counter } from '../counter'
import ReactTooltip from 'react-tooltip';
import { NutritionToolTip } from '../nuturition-tooltip'
import Nutrition from '../nutrition'
export const UserRow = ({ userData, usersData, setUsersData, currentIndex }) => {


  const [tooltip, showTooltip] = useState(true);

  const nuturitionData = {
    proteinConsumed: userData.proteinConsumed,
    proteinTarget: userData.proteinTarget,
    carbsConsumed: userData.carbsConsumed,
    carbsTarget: userData.carbsTarget,
    fatConsumed: userData.fatConsumed,
    fatTarget: userData.fatTarget,
    calorieIntake: userData.calorieIntake
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (userData.feedback) {
      const btn = document.querySelectorAll(".reminder-btn");
      btn.forEach((elem) => {
        elem.textContent = '!';
      })
    }
  }, []);


  return (
    <>


      <div className='userRow'>
        <div className="userCred">
          <img src="https://i.kym-cdn.com/entries/icons/facebook/000/020/116/images-2.jpg" className="dp" alt="User" />
          <div>
            <p className='fullName'>{userData.name}</p>
            <p className='email'>{userData.email}</p>
          </div>
        </div>

        <div className="counter">
          <Circularbar stepsWalked={userData.stepsWalked} stepsTarget={userData.stepsTarget} />
          <Counter counterName={'steps'} target={userData.stepsTarget} usersData={usersData} setUsersData={setUsersData} currentIndex={currentIndex} />
        </div>


        <div className="workout">
          <div className='dates'>
            <div className={userData.scheduledDate === userData.performedDate ? 'reminder shape date-container' : 'date-container'} >
              <FontAwesomeIcon icon={faUserCheck} />
              <span className='currentDate' >{userData.performedDate}</span>

            </div>
            <div className='date-container'>
              <FontAwesomeIcon icon={faCalendar} />
              <span className='scheduledDate'>{userData.scheduledDate}</span>
            </div>

          </div>
          <button className={userData.feedback ? 'reminder nextButton reminder-btn' : 'nextButton'} onClick={() => {
            navigate(`${userData.userId}/Workout`)
          }

          }>
            {'>'}
          </button>
        </div>

        <div data-tip='' data-for={userData.userId} className="nutrition"  >
          <div onMouseEnter={() => showTooltip(true)}
            onMouseLeave={() => {
              showTooltip(false);
              setTimeout(() => showTooltip(true), 50);
            }}>   <Chart data={nuturitionData} /></div>
          <Counter counterName={'calorie'} usersData={usersData} setUsersData={setUsersData} target={userData.calorieTarget} currentIndex={currentIndex} />
          <button className='nextButton' onClick={() => {
            navigate(`${userData.userId}/Nutrition`)
          }
          }>
            {'>'}
          </button>
        </div>
        <button className='notification'> <FontAwesomeIcon icon={faBell} /></button>
      </div>

      {tooltip && <ReactTooltip backgroundColor='#333b44' id={userData.userId}>
        <NutritionToolTip data={nuturitionData} />
      </ReactTooltip >}


    </>
  )
}
