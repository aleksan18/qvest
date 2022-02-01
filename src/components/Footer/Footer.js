import React,{useContext} from 'react';
import "./footer.css";
import { TaskContext } from '../../context/TaskProvider';
const Footer = () => {
    const {tasksState} = useContext(TaskContext);
    const pending = tasksState.filter(task=>task.state === "ASK" || task.state === "ANSWER" );
    return (
        <div>
            <footer>
                { !pending.length ? (<div className='footer__activity--start'></div>):(<div className='footer__activity--start'>{pending.length} pending task</div>) }
                <div className='footer__activity--end'> My Activity  </div> 
            </footer>
        </div>
    );
}

export default Footer;
