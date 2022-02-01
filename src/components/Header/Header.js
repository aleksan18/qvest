import React,{useContext} from 'react';
import "./header.css";
import { TaskContext } from '../../context/TaskProvider';
const Header = () => {
    const {tasksState,currentDate,calcHours} = useContext(TaskContext);
    let unlock;
    let printTime;
    console.log(tasksState);
    if(tasksState.length === 1){
      unlock = new Date(tasksState[0].unlockedAt)
      console.log(unlock);
      printTime=calcHours(unlock);
      if(printTime > 24){
          printTime= Math.round(printTime/24)
      }
    }
    return (
        <div>
            <header >
                <div id='header'>
                    <div className='header__img' ><img src='/logo.png' alt=''></img></div>
                    <div className='header__text--middle'>Workplace culture in CRAFT</div>
                    <div className='header__text--end'>{ tasksState.length === 1 ? (<> Opens in {printTime} days</>):(<>Closes in 2 days</>)}</div>
                </div>
            </header>
        </div>
    );
}

export default Header;
