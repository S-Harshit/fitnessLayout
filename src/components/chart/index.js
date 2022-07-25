import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import './index.css'

export const Chart = ({ data }) => {

  return (
    <>
      <div className="chart"   >
        <span className="chart-label">{data.calorieIntake}</span>
        <span className="chart-label-two">calories</span>
        <PieChart lineWidth={20} radius={28} viewBoxSize={[100, 100]}
          data={[
            { title: 'Protein', value: data.proteinConsumed, color: '#f45c84' },
            { title: 'Carbs', value: data.carbsConsumed, color: '#f0c50f' },
            { title: 'Fats', value: data.fatConsumed, color: '#03c6fa' },
          ]}
        />

      </div>



    </>
  )
}
