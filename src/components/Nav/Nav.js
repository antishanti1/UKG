import './Nav.scss'
import ukglogo from '../../assets/icons/TeamWiseLogo.svg'
import dunderMifflin from '../../assets/icons/dunder-mifflin-logo.svg'
import dash from '../../assets/icons/dashboard-icon.svg'
import schedule from '../../assets/icons/ScheduleIcon.svg'
import employees from '../../assets/icons/TeamIcon.svg'
import pieGraph from '../../assets/icons/pie-graph-icon.svg'
import settings from '../../assets/icons/SettingsIcon.svg'
import help from '../../assets/icons/HelpIcon.svg'





export default function Nav() {

   
    return (
        <> 
        <section className='nav'>
        <div className='nav__top'><img className="nav__logo" src={ukglogo} alt='ukg-logo'></img>
       <img className="nav__logo" src={dunderMifflin} alt='dunder-mifflin-logo'></img></div>
       <div className='nav__bottom'>
      <div className='nav__sec'>
      <img className="nav__sec-icon " src={dash} alt='dashboard-logo'></img> <h3> Dashboard</h3>
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
      <hr className='nav__sec-hr'></hr>
      <div className='nav__sec nav__sec--settings'>
      <img className="nav__sec-icon"  src={settings} alt='settings-logo'></img> <h3>Settings</h3>
      </div>
      <div className='nav__sec nav__sec--help'>
      <img className="nav__sec-icon"  src={help} alt='help-logo'></img> <h3>Help</h3>
      </div>
      </div>
      </section>
        </>
    )
} 