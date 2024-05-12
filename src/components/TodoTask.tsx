import React from "react";
import { ITask } from "../interfaces/ITask";

interface Props{
    task:ITask;
    completeTask(taskName:string):void;
}

const TodoTask= ({task,completeTask}:Props) =>{
    return(
        <div className="task">
            <div className="content">
                <span>
                    {task.taskName}
                </span>
                <span>
                    {task.deadLine}
                </span>
            </div>
            <button onClick={()=>{
                completeTask(task.taskName)
            }}>X</button>
        </div>
    );
}

export default TodoTask;