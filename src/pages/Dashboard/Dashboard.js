import '../Dashboard/Dashboard.scss';
import michaelPof from '../../assets/images/micheal-profile.png'
import paperSales from '../../assets/images/paper-sales.png'
import teamGoals from '../../assets/images/team-goals.png'
import upDates from '../../assets/images/upcoming-dates.png'
import notifications from '../../assets/images/notification-modal.png'
import Header from '../../components/Header/Header';
// import DonutCard from '../../components/DonutCard/DonutCard';


function Dashboard() {

    return (
        <>
        <div className='top'>
        <Header />
        <div className='container'>
        <div className='container__left'>
        <div className='michael'>  <img src={michaelPof} alt="chevron-icon" className="img" /></div>
        <div className='paper-sales'>  <img src={paperSales} alt="chevron-icon" className="det__content-icon" /></div>
       <div className='team-goals'><img src={teamGoals} alt="chevron-icon" className="det__content-icon" /></div> </div>

        <div className='container__right'>
            <div className='container__right-inside'>
         <div className='donut'>spych safety</div>
         <div className='notifications'> <img src={notifications} alt="chevron-icon" className="det__content-icon" /></div></div>
        <div className='upcoming-dates'><img src={upDates} alt="chevron-icon" className="det__content-icon" /></div>
        </div></div>
</div>
        </>
    )
}

export default Dashboard;