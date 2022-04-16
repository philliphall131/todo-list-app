import AllTaskLists from "../components/AllTaskLists";
import { Button } from "react-bootstrap";
import NewTaskList from "../components/NewTaskList";
import { useState, useEffect } from "react";
import ToDoAPI from "../utils/todo_utils.js";
import { useNavigate } from "react-router-dom";

function HomePage(props) {
  // locals
  let navigate = useNavigate()
  // states
  const [show, setShow] = useState(false);
  const [taskLists, setTaskLists] = useState([])

  // effects
  useEffect(()=>{
    updateTaskLists()
  }, [props.user])

  // events
  const updateTaskLists = async ()=>{
    let lists = await ToDoAPI.fetchAllLists()
    if (lists){
      setTaskLists(lists)
    } else {
      setTaskLists([])
    }
  }

  // delete a task list
  const handleDelete = async (listId)=>{
    let del = await ToDoAPI.deleteList(listId)
    if (del==='') { 
      updateTaskLists()
    } else {
      console.log('Error deleting list')
    }
  }

  // show/hide the create new list modal
  const handleShow = () => setShow(true);
  const handleClose = () => {
    updateTaskLists()
    setShow(false);
  }

  return (
    <div>
        <h3>My Lists</h3>
        <h3>Username: {props.user}</h3>
        <AllTaskLists taskLists={taskLists} handleDelete={handleDelete}/>
        <Button variant="primary" onClick={handleShow}>Add New List</Button>
        <NewTaskList show={show} handleClose={handleClose}/>
    </div>
  );
}

export default HomePage;