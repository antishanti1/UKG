import React from 'react';
import { Pie } from 'react-chartjs-2';
import calculatePsychSafetyScore from "../ChartInfo/ChartInfo";


function Donut({ calculatePsychSafetyScore }) {
    const data1 = {
        labels: Object.keys(calculatePsychSafetyScore.results[0].emotions),
        datasets: [
          {
            data: Object.values(calculatePsychSafetyScore.results[0].emotions),
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#00FA9A',
              '#8B008B',
              '#FF4500',
              '#FFCE56',
              '#1E90FF',
              '#FF69B4',
              '#2E8B57',
              '#00FA9A',
              '#FFCE56',
              '#8B008B',
            ],
          }
        ]
    }
    const options = {
        legend: {
          position: 'center',
          align: 'start',
          labels: {
            boxWidth: 10,
            padding: 10,
          },
        },
      };
  return (
    <>
    <div className='chart-container'>
      <h2 style={{ textAlign: 'center' }}>Doughnut Chart</h2>
      <Pie
        data={data1}
        options={{
          plugins: {
            title: {
              display: true,
              text: 'Invocation'
            },
          legend: true
          }
        }}
      />
    </div>
    </>
  );
}
export default Donut;







