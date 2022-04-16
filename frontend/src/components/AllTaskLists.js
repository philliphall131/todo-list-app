import { ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function AllTaskLists(props) {
   
  return (
    <ListGroup className="mb-2">
      {props.taskLists.map((list, index) => {
        return (
          <ListGroup.Item key={index} className={index % 2 ? "odd-list-item" : "even-list-item"}>
            <div className="list-item">
              <Link to={`/lists/${list.id}`}>{list.name}</Link>
              <Button onClick={()=>props.handleDelete(list.id)} variant="danger">Delete</Button>
            </div>
          </ListGroup.Item>)
        })}
    </ListGroup>
  )
}

export default AllTaskLists;
