import './Nav.scss'
import ukglogo from '../../assets/icons/TeamWiseLogo.svg'
// import Dash from '../../assets/icons/ScheduleIcon.svg'
import sch from '../../assets/icons/ScheduleIcon.svg'
import emp from '../../assets/icons/EmployeesIcon.svg'
import sch from '../../assets/icons/ScheduleIcon.svg'
import sch from '../../assets/icons/ScheduleIcon.svg'
import sch from '../../assets/icons/ScheduleIcon.svg'




export default function Nav() {
    return (
        <> 
        <div><img className="nav__logo" src={ukglogo} alt='ukg-logo'></img></div>
      <div>
        <h3>Dashboard</h3>
      </div>
      <div>
        <h3>Scheduling</h3>
      </div>
      <div>
        <h3>Emloyees</h3>
      </div>
      <div>
        <h3>Results</h3>
      </div>
      <div>
        <h3>Settings</h3>
      </div>
      <div>
        <h3>Help</h3>
      </div>
   
        </>
    )
} 