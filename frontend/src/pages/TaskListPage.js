import { Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ToDoAPI from "../utils/todo_utils.js";
import OneTaskList from "../components/OneTaskList.js";
import NewTask from "../components/NewTask.js";

function TaskListPage(props) {
  // locals
  const params = useParams()
  let listId = params.listID
  let navigate = useNavigate()
  //states
  const [taskList, setTaskList] = useState(null)
  const [showModal, setShowModal] = useState(false)
  //effects  
  useEffect(()=>{
    updateTaskList()
  }, [listId, props.user])

  // events
  const updateTaskList = async ()=>{
    let updatedList = await ToDoAPI.fetchOneList(listId)
    setTaskList(updatedList)
  }

  // delete a task
  const handleDelete = async (taskId)=>{
    let del = await ToDoAPI.deleteTask(taskId)
    if (del==='') { 
      updateTaskList()
    } else {
      console.log('Error deleting task')
    }
  }

  // show/hide the create new task modal
  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    updateTaskList()
    setShowModal(false);
  }

  // handle a checkbox change
  const handleCheckbox = async (id, value) => {
    let checkFlip = await ToDoAPI.changeTaskComplete(id, {'completed': value})
    if (checkFlip) { 
      updateTaskList()
    } else {
      console.log('Error deleting task')
    }
  }

  return (
    <div>
        <h3>{taskList ? taskList.name : ''}</h3>
        <OneTaskList tasks={taskList ? taskList.tasks : []} handleDelete={handleDelete} complete={false} handleCheckbox={handleCheckbox}/>
        <Button variant="primary" onClick={handleShow}>Add New Task</Button>
        <OneTaskList tasks={taskList ? taskList.tasks : []} handleDelete={handleDelete} complete={true} handleCheckbox={handleCheckbox}/>
        <NewTask showModal={showModal} handleClose={handleClose} listId={listId}/>
    </div>
  );
}

export default TaskListPage;