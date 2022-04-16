import { Button, Form } from 'react-bootstrap';

function Task(props) {

  const checkBox = (evt, id) => {
    props.handleCheckbox(id, evt.target.checked)
  }
 
  return (
    <div className="task">
        <span>
        <Form.Check id={`check-${props.task.id}`} aria-label="option 1" defaultChecked={props.task.completed} onChange={(e)=>checkBox(e, props.task.id)}/>
        <span>{props.task && props.task.name}</span>
        </span>
        <span>
          <span className="px-2">Due Date: {props.task && props.task.due_date}</span>
          <Button onClick={()=>props.handleDelete(props.task.id)} variant="danger">Delete</Button>
        </span>
    </div>
  )
}

export default Task;