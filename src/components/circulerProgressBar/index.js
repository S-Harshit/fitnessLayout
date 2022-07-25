import React from 'react'
import './index.css'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Counter } from '../counter';

export const Circularbar = ({ stepsWalked, stepsTarget }) => {

  return (

    <div className="circle">
      <CircularProgressbarWithChildren maxValue={stepsTarget} value={stepsWalked} styles={{ path: { stroke: '#7fd18c' }, text: { fontWeight: 700, fontSize: '1.4em', fill: 'white' } }} >
        <span className="stepsWalked">
          {stepsWalked}
        </span>
        <span className='walked'>walked</span>
      </CircularProgressbarWithChildren>

    </div>

  )
}
