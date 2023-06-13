
import './PaperSales.scss';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { Line } from 'react-chartjs-2';




export default function PaperSales (){

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: 'Letter',
            data: [33, 53, 75, 41, 44, 65, 55],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 1)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
          {
            label: 'Legal',
            data: [10, 66, 65, 5, 2, 55, 55],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 1)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            label: 'Cardstock',
            data: [10, 35, 9, 6, 2, 55, 55],
            fill: true,
            backgroundColor: 'rgba(255, 206, 86, 1)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1,
          },
          {
            label: 'Envelopes',
            data: [10, 4, 55, 8, 2, 87, 55],
            fill: false,
            backgroundColor: 'rgba(75, 192, 192, 1)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
          
        ],
      };
      

      const options = {
        scales: {
            yAxes: [{
                ticks: {
                  beginAtZero: false,
                  min: 0,
                  stepSize: 2,
                }
              }],
         
        
        },  
        };
      
     

return (
    <>
    <div className='paper'>
    <div className='paper__top'>
<span className='paper__top-heading'>Paper Sales</span>
<span className='paper__top-more'><BiDotsHorizontalRounded /></span>
</div>
{/*   */}
<div className='paper__bottom'>
    
    <div className='paper__diagram'>

              <Line data={data} options= {options} />

    </div>

     </div>
 </div>
    </>
)




}