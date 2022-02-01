import React,{ createContext, useState,useEffect,useCallback}  from 'react';
import { data } from '../service/data.service';
export const TaskContext = createContext();
const TaskProvider = ({children}) => {
    const [tasksState,setTasksState] = useState([{
      "id": "6044bc3f-85ad-4b19-8d4d-b77d32ef9b2b",
      "state": "LOCKED",
      "unlockedAt": "2021-05-04 16:00:00.00000"
    }]);
    const currentDate = new Date("2021-05-02 12:11:41.00000");
    const [displayTasks,setDisplayTasks] = useState([{
      "id": "6044bc3f-85ad-4b19-8d4d-b77d32ef9b2b",
      "state": "LOCKED",
      "unlockedAt": "2021-05-04 16:00:00.00000"
    }]);
    const loadData = useCallback(async()=>{
      const json=await data();
      console.log(json);
      if(!json){
        setDisplayTasks();
        setTasksState();
      }
      setTasksState(json);
      setDisplayTasks(json);
    },[])
    useEffect(()=>{
      loadData();
    },[]);
    const configureDate=(questionSentAt)=>{
      const sentAt = new Date(questionSentAt);
      const dateSent= sentAt.toDateString().split(" ");
      let hours = sentAt.getHours();
      const dayHalf= hours >= 12 ? "PM":"AM";
      hours= ((hours + 11) % 12 + 1);
      const sentAtTime= hours+":"+("0"+sentAt.getMinutes()).slice(-2);
      return `${dateSent[1]} ${dateSent[2]},${sentAtTime} ${dayHalf}`
    };
    const calcHours = (date)=>{
      return Math.round((date-currentDate)/(1000*3600));
    }
    const filter = (filter)=>{
      filter.preventDefault();
      console.log(filter.target.value); 
      if(filter.target.value === "Locked"){
       const filteredTasks= tasksState.filter(task=>task.state === "LOCKED");
       console.log(filteredTasks)
       setDisplayTasks(filteredTasks);
      }else if ( filter.target.value === "Pending" ){
        const filteredTasks= tasksState.filter(task=>task.state === "ASK" || task.state === "ANSWER" );
        console.log(filteredTasks)
        setDisplayTasks(filteredTasks);
      } else if ( filter.target.value === "Completed" ){
        const filteredTasks= tasksState.filter(task=>task.state === "ASKED" || task.state === "ANSWERED" );
        console.log(filteredTasks)
        setDisplayTasks(filteredTasks);
      }else{
        setDisplayTasks(tasksState);
      }
      console.log(tasksState);
    }

      return (
        <TaskContext.Provider value={{currentDate,tasksState,displayTasks,filter,configureDate,calcHours}}>
            {children}
        </TaskContext.Provider>
      );
  
}

export default TaskProvider;
