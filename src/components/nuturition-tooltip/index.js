import React, { useEffect } from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import './index.css'
export const NutritionToolTip = ({ data }) => {

  return (
    <>
      <div className='container--toolkit'>
        <div className='bar-label'>
          <span>PROTEIN</span>
          <span>{data.proteinTarget}g</span>
        </div>
        <ProgressBar labelSize='1em' baseBgColor='#101317' width="14rem" customLabel={`${data.proteinConsumed}g`} completed={data.proteinConsumed} maxCompleted={data.proteinTarget} bgColor='#f45c84' />
      </div>


      <div className='container--toolkit'>
        <div className='bar-label'>
          <span>FATS</span>
          <span>{data.fatTarget}g</span>
        </div>
        <ProgressBar labelSize='1em' baseBgColor='#101317' width="14rem" customLabel={`${data.fatConsumed}g`} completed={data.fatConsumed} maxCompleted={data.fatTarget} bgColor='#03c6fa' />

      </div>
      <div className='container--toolkit'>

        <div className='bar-label'>
          <span>CARBS</span>
          <span>{data.carbsTarget}g</span>
        </div>
        <ProgressBar labelSize='1em' baseBgColor='#101317' width="14rem" customLabel={`${data.carbsConsumed}g`} completed={data.carbsConsumed} maxCompleted={data.carbsTarget} bgColor='#f0c50f' />

      </div>

    </>

  )
}
