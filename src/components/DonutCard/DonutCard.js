import './DonutCard.scss';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import Donut from '../Donut/Donut'

function DonutCard() {

    

    return (
        <>
        <div className='donut-card'>
            <div className='donut-card__top'>
                <span className='donut-card__top-heading'>Psych Safety Score</span>
                <span className='donut-card__top-more'><BiDotsHorizontalRounded /></span>
            </div>
            <Donut />
        </div>
        </>
    )
}

export default DonutCard;
