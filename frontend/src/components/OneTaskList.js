import { ListGroup } from "react-bootstrap";
import Task from "./Task";

function OneTaskList(props) {
  let is_completed = props.complete
  let filteredTasks = props.tasks.filter((task)=>(task.completed==props.complete))

  const renderTitle = () => {
    return (is_completed && filteredTasks.length > 0) 
      ? <h5 className="completed-tasks">Completed Tasks:</h5>
      : null
  }

  return (
    <div>
      { renderTitle() }
      <ListGroup>
        {filteredTasks.map((task) => {
          return (
            <ListGroup.Item key={ task.id }>
              <Task task={task} handleDelete={props.handleDelete} handleCheckbox={props.handleCheckbox}/>
            </ListGroup.Item>)
          })}
      </ListGroup>
    </div>
  )
}

export default OneTaskList;