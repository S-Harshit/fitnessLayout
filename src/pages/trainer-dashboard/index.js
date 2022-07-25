import React, { useState } from 'react'
import { UserRow } from '../../components/userRow'
import './index.css'
import { faPersonWalking, faBowlFood, faDumbbell } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const data = [{
  userId: "1",
  name: "Charvie Sharma",
  email: "charviesharma@gmail.com",
  stepsWalked: 2547,
  stepsTarget: 4000,
  performedDate: "15 Oct",
  scheduledDate: "22 Oct",
  calorieIntake: 2547,
  calorieTarget: 2000,
  proteinConsumed: 45,
  proteinTarget: 70,
  carbsConsumed: 50,
  carbsTarget: 70,
  fatConsumed: 30,
  fatTarget: 70,
  feedback: true,
},
{
  userId: "2",
  name: "Charvie Sharma",
  email: "charviesharma@gmail.com",
  stepsWalked: 2547,
  stepsTarget: 4000,
  performedDate: "15 Oct",
  scheduledDate: "15 Oct",
  calorieIntake: 1647,
  calorieTarget: 2000,
  proteinConsumed: 33,
  proteinTarget: 70,
  carbsConsumed: 23,
  carbsTarget: 70,
  fatConsumed: 50,
  fatTarget: 70,
  feedback: true,
},
{
  userId: "3",
  name: "Harshit Sharma",
  email: "charviesharma@gmail.com",
  stepsWalked: 2547,
  stepsTarget: 4000,
  performedDate: "15 Oct",
  scheduledDate: "22 Oct",
  calorieIntake: 2532,
  calorieTarget: 2000,
  proteinConsumed: 45,
  proteinTarget: 70,
  carbsConsumed: 50,
  carbsTarget: 70,
  fatConsumed: 70,
  fatTarget: 70,
  feedback: false,
},]





export const TrainerDashboard = () => {
  const [usersData, setUsersData] = useState(data);



  return (
    <>
      <main className='main-container'>

        <section className='trainerDashboard'>
          <div className='headings'>
            <h4 id='stepsHeading'>
              <FontAwesomeIcon icon={faPersonWalking} />
              &nbsp;
              Steps
            </h4>
            <h4 id='workoutHeading'>
              <FontAwesomeIcon icon={faDumbbell} /> &nbsp;Workout </h4>
            <h4 id='nutritionHeading'>
              <FontAwesomeIcon icon={faBowlFood} />
              &nbsp;Nutrition</h4>
          </div>






          {
            usersData.map((user, index) => {
              return <UserRow key={user.userId} userData={user} usersData={usersData} setUsersData={setUsersData} currentIndex={index} />
            })
          }

        </section>

      </main>
    </>
  )
}
