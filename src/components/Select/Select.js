import React,{useContext} from 'react';
import { TaskContext } from '../../context/TaskProvider';
const Select = () => {
    const {tasksState,displayTasks,filter} = useContext(TaskContext);
    const pending = tasksState.filter(task=>task.state === "ASK" || task.state === "ANSWER" );
    const locked = tasksState.filter(task=>task.state === "LOCKED" );
    const completed = tasksState.filter(task=>task.state === "ASKED" || task.state === "ANSWERED");
    return (
  
           <select onChange={filter} >
                <option value="ALL">All ({tasksState.length})</option>
                <option value="Locked">Locked ({locked.length})</option>
                <option value="Pending">Pending ({pending.length})</option>
                <option value="Completed">Completed  ({completed.length})</option>
            </select>

    );
}

export default Select;
