import React from 'react';
import './TeamGoals.scss';

import { BiDotsHorizontalRounded } from 'react-icons/bi';



export default function TeamGoals (){

    
return (

    <>
    <div className='team'>
        
<div className='team__top'>
<span className='team__top-heading'>Team Goals</span>
<span className='team__top-more'> <BiDotsHorizontalRounded /></span>
</div>
<div className='team__bottom'>
<div className='team__bottom-list'>
    <span>New Clients</span>
    <div className='team__bottom-goal'>    
    <span className='team__bottom-bar--green'></span> 
    <span>75%</span>
    </div>
</div>
<div className='team__bottom-list'> 
    <span>New Products</span>
    <div className='team__bottom-goal'>
    <span className='team__bottom-bar--red'></span> 
    <span>28%</span></div>

</div>
<div className='team__bottom-list'>
    <span>Reams of Paper</span>
    <div className='team__bottom-goal'>
    <span className='team__bottom-bar--blue'></span> 
    <span>62%</span></div>

</div>
<div className='team__bottom-list'>
    <span>Existing Clients</span>
    <div className='team__bottom-goal'>
    <span className='team__bottom-bar--yellow'></span> 
    <span>43%</span></div>

</div>
</div>
  </div>
    </>
)




}