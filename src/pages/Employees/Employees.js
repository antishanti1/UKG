import './Employees.scss';
import notification from '../../assets/icons/NotificationIcon.svg';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
// import { Line } from 'react-chartjs-2';
import empData from '../../data/employees.json';
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
//   } from 'chart.js';

  // ChartJS.register(
  //   CategoryScale,
  //   LinearScale,
  //   PointElement,
  //   LineElement,
  //   Title,
  //   Tooltip,
  //   Legend
  // );



export default function Employees() {
    const employeeData = empData.employees;

    return (
        <div className='emp'>
         <div className='header'>
                <h1 className='header__heading'>Surveys</h1>
                <div className='header-right'>
                    <div alt='profile-picture' className='header-right__profile'></div>
                    <img alt='notification-icon' className='header-right__notification' src={notification}></img>
                </div>
            </div>
            
            <div className='emp-main'>
        {employeeData.map((employee) => (
          <EmployeeCard key={employee.name} employee={employee} />
        ))}
      </div>

        </div>
    )
}

function EmployeeCard({ employee }) {
    const { name, department,image, engagement, effectiveness, culture, wellbeing } = employee;
  
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data = {
      labels,
      datasets: [
        {
        label: 'Engagement',
          data: engagement,
          backgroundColor: '#cee0ed',
          borderColor: '#34a0e8',
          borderWidth: 2,
        },
        {
        label: 'Effectiveness',
        data: effectiveness,
          backgroundColor: '#f9e7e7',
          borderColor: '#f33535',
          borderWidth: 2,
        },
        {
            label: 'Culture',
            data: culture,
              backgroundColor: '#e2f3e3',
              borderColor: '#2cae39',
              borderWidth: 2,
            },
{
                label: 'Wellbeing',
                data: wellbeing,
                  backgroundColor: '#f5f2df',
                  borderColor: '#e0cf3d',
                  borderWidth: 2,
                },     
      ],
    };

    return (
        <div className='emp-main__container'>
          <div className='emp-main__top'>
            <div className='emp-main__top-left'>
              <div>
                <img
                  className='emp-main__img'
                  src={image}
                  alt='profile'
                ></img>
              </div>
              <div className='emp-main__top-right'>
                <span className='emp-main__name'>{name}</span>
                <span className='emp-main__title'>{department}</span>
              </div>
            </div>
            <div>
              <span className='emp-main__dots'>
                <BiDotsHorizontalRounded />
              </span>
            </div>
          </div>
          <div className='emp-main__bottom'>
          {/* <Line
  data={data}
  options={{
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        min: 0,
        stepSize: 20,
        ticks: {
          callback: function (value) {
            return value + '%';
          },
        },
      },
    },
  }}
/> */}
          </div>
        </div>
      );
    }
