import React, { useContext } from 'react';
import "./tasks.css";
import Select from '../Select/Select';
import Card from '../Card/Card';
import { TaskContext } from '../../context/TaskProvider';
const Tasks = ({}) => {
    const {displayTasks,currentDate,configureDate,calcHours} = useContext(TaskContext);
    if(!displayTasks){
        return(
              
        <div className='App__body'>
        <div className='usergreeting'>Hi Michael Hansen </div>
        <div className='tasks__selection'><b>Tasks ({displayTasks.length})</b>
        <div>
                Showing <Select></Select>
        </div>
        </div>
        </div>

        )
    }else{
        return (
       
            <div className='App__body'>
            <div className='usergreeting'>Hi Michael Hansen </div>
            <div className='tasks__selection'><b>Tasks ({displayTasks.length})</b>
            <div>
                    Showing <Select></Select>
            </div>
            </div>
               
                <div className='body__cardarea'>
    
                    {displayTasks.map((task)=>{
                    return(
                    <Card calcHours={calcHours} currentDate={currentDate} task={task} configureDate={configureDate}></Card>
                    )
    
                    })}
    
                </div>
                </div>
        );
    }
   
}

export default Tasks;
