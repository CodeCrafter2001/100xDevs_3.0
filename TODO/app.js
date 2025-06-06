let tasks=[];
const saveTasks= ()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
}
const addTask= ()=>{
    const taskInput=document.getElementById('taskInput');
    const text= taskInput.value.trim();
    if(text){
        tasks.push({text:text,completed:false});
   updateTaskList();
   saveTasks();
   taskInput.value= '';
    }
     
};
const ToggleTaskComplete=(index)=>{
    tasks[index].completed= !tasks[index].completed;
}

const deleteTask=(index)=>{
    tasks.splice(index,1);
    updateTaskList();

    saveTasks();
}
const editTask= (index)=>{
    const taskInput= document.getElementById("taskInput");
    taskInput.value= tasks[index].text;
    tasks.splice(index,1);
    updateTaskList();
    saveTasks();
}

const updateTaskList= ()=>{
    const taskList= document.getElementById('task-list');
    taskList.innerHTML='';
    tasks.forEach((task,index)=>{
        const listItem= document.createElement('li');
        listItem.innerHTML=`
<div class="taskItem">
    <div class="task ${task.completed ? "completed": ""}">
        <input type="checkbox" class="checkbox" ${task.completed ?"checked":""}/>
        <p>${task.text}</p> 
    </div>
    <div class="icons">
        <img src="pen1.png" onclick="editTask(${index})"/>
        <img src="recycle-bin1.png" onclick="deleteTask(${index})"/>
    </div>
</div>
`;
listItem.addEventListener("change",
    ()=>ToggleTaskComplete(index));
taskList.append(listItem);
    });
}
document.getElementById('newTask').addEventListener('click',function(e){
    e.preventDefault();
    addTask();
})