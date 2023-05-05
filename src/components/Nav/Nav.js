import './Nav.scss'
import ukglogo from '../../assets/icons/TeamWiseLogo.svg'
import dash from '../../assets/icons/dashboard-icon.svg'
import schedule from '../../assets/icons/ScheduleIcon.svg'
import employees from '../../assets/icons/EmployeesIcon.svg'
import pieGraph from '../../assets/icons/pie-graph-icon.svg'
import settings from '../../assets/icons/SettingsIcon.svg'
import help from '../../assets/icons/HelpIcon.svg'





export default function Nav() {
    return (
        <> 
        <section className='nav'>
        <div><img className="nav__logo" src={ukglogo} alt='ukg-logo'></img></div>
      <div className='nav__sec'>
      <img className="nav__logo" src={dash} alt='dashboard-logo'></img> <h3> Dashboard</h3>
      </div>
      <div className='nav__sec'>
      <img className="nav__sec-icon" src={schedule} alt='scheduling-logo'></img> <h3>Scheduling</h3>
      </div>
      <div  className='nav__sec'>
      <img className="nav__sec-icon"  src={employees} alt='employees-logo'></img> <h3>Emloyees</h3>
      </div>
      <div className='nav__sec'>
      <img className="nav__sec-icon"  src={pieGraph} alt='pie-graph-logo'></img> <h3>Results</h3>
      </div>
      <div className='nav__sec'>
      <img className="nav__sec-icon"  src={settings} alt='settings-logo'></img> <h3>Settings</h3>
      </div>
      <div className='nav__sec'>
      <img className="nav__sec-icon"  src={help} alt='help-logo'></img> <h3>Help</h3>
      </div>
      </section>
        </>
    )
} 