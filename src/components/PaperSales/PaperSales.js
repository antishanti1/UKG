
import './PaperSales.scss';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import MyChart from './Chart';
import {GoPrimitiveDot} from 'react-icons/go';


export default function PaperSales (){

     

return (
    <>
    <div className='paper'>
    <div className='paper__top'>
<span className='paper__top-heading'>Paper Sales</span>
<span className='paper__top-more'><BiDotsHorizontalRounded /></span>
</div>
<div className='paper__middle'> 
<span className='paper__top-list'>
<GoPrimitiveDot size={20} style={{ color: 'red' }} />
 Letter</span>
<span className='paper__top-list'> 
<GoPrimitiveDot size={20} style={{ color: '#34a0e8' }} />
Legal</span>
<span className='paper__top-list'>   <GoPrimitiveDot size={20} style={{ color: '#e0cf3d' }} />
 Cardstock</span>
<span className='paper__top-list'>
<GoPrimitiveDot size={20} style={{ color: '#2cae39' }} />
     Envelopes</span>

</div>
<div className='paper__bottom'>
    
    <div className='paper__diagram'>
<MyChart />
    </div>
    
     </div>
 </div>
    </>
)




}