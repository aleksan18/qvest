import React from 'react';
import "./card.css";

const Card = ({currentDate,task,configureDate,calcHours}) => {
    if(task.state === "LOCKED"){
        const questionDate = new Date(task.unlockedAt);
        let printTime =calcHours(questionDate);
        let printTimeDays =  Math.round(printTime/24);
        return(
            <div className='card--locked'>
                <div className='card__img'><img   src='/lockedImage.png' alt=''></img> </div>
                <div className='card__text'> Ask a question  </div>
                <div className='card__action'> Unlocks in {printTime <= 24 ?(<> {printTime} hours</>):( <> {printTimeDays} days </>)}  <img src='lock.png' alt=''></img>  </div>
                
            </div>
        )
    }else if(task.state === "ASK" || task.state === "ANSWER"){
        return(
            <div className='card--pending'>
                 <div className='card__img'><img  src={'/'+task.state.toLowerCase()+'Image.png'} alt=''>
                </img></div>
                <div className='card__text'>{task.state.charAt(0)+task.state.substring(1).toLowerCase()}  a question  </div>
                <div className='card__action'><img src='arrow.png' alt=''></img></div>
            </div>
        )
        
    }else if (task.state ==="ASKED" || task.state === "ANSWERED"){
        const displayDate = configureDate(task.answerSentAt)
        return (   
               <div className='card--completed'>
                     <div className='card__img'><img  src={'/'+task.state.toLowerCase()+'Image.png'} alt=''>
                    </img></div>
                    <div className='card__text'>You {task.state.toLowerCase()}  a question   </div>
                    <div className='card__action--pending'><span className='.card--completed__date'>{displayDate}</span><img src='arrow.png' alt=''></img></div>
               </div>
        );
    }
 
}

export default Card;
