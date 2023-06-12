import './Nav.scss'
import { Link } from "react-router-dom";
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
        <ul>
      <Link to = '/'>  <li className='nav__sec'>
      <img className="nav__sec-icon " src={dash} alt='dashboard-logo'></img>  <h3> Dashboard</h3>
      </li></Link>
      <Link to= {"/schedule"}> 
      <li className='nav__sec'>
      <img className="nav__sec-icon" src={schedule} alt='scheduling-logo'></img> <h3>Schedule</h3>
      </li> </Link>
     <Link to= {"/employees"}> <li  className='nav__sec'>
        
      <img className="nav__sec-icon"  src={employees} alt='employees-logo'></img> <h3>Employees</h3>
      
      </li>  </Link>
    <Link to= {"/survey"}>   <li className='nav__sec nav__sec--hr'>
      <img className="nav__sec-icon"  src={pieGraph} alt='pie-graph-logo'></img> <h3>Surveys</h3> 
      </li></Link>
      <li className='nav__sec nav__sec--settings'>
      <img className="nav__sec-icon"  src={settings} alt='settings-logo'></img> <h3>Settings</h3>
      </li>
      <li className='nav__sec nav__sec--help'>
      <img className="nav__sec-icon"  src={help} alt='help-logo'></img> <h3>Help</h3>
      </li>
      </ul>
      </div>  
    
      </section>
        </>
    )
} 