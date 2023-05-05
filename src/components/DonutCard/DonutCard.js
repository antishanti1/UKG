import './DonutCard.scss';
import dots from '../../assets/icons/kabab-menu.svg'
import Donut from '../Donut/Donut'

function DonutCard() {

    

    return (
        <>
        <div className='donut-card'>
            <div className='donut-card__top'>
                <span className='donut-card__top-heading'>Team Happiness</span>
                <img alt='more-info' src={dots}></img>
            </div>
            <Donut />
        </div>
        </>
    )
}

export default DonutCard;
