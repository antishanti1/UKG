import React from 'react';
import './PaperSales.scss';
import { BiDotsHorizontalRounded } from 'react-icons/bi';



export default function PaperSales (){
return (

    <>
    <div className='paper'>

   
    <div className='paper__top'>

    
<span className='paper__top-heading'>Paper Sales</span>
<span className='paper__top-more'><BiDotsHorizontalRounded /></span>
</div>
<div className='paper__middle'> 
<span>Letter</span>
<span>Legal</span>
<span>Cardstock</span>
<span>Envelopes</span>

</div>
<div className='paper__bottom'>
    
    <div className='paper__diagram'>

    </div>
    
     </div>
 </div>
    </>
)




}