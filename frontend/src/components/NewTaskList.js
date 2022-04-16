import { Modal, Button, Form } from "react-bootstrap";
import ToDoAPI from "../utils/todo_utils.js";
import { useState } from  "react";

function NewList(props) {

    const [nameInput, setNameInput] = useState('')

    const submitForm = async (evt)=>{
        evt.preventDefault();
        await ToDoAPI.newList(nameInput)
            ? props.handleClose()
            : console.log('Problem with submiting form')
    }

    const updateInput = (evt)=>{
        setNameInput(evt.target.value)
    }

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header>
                <Modal.Title>Create a new List</Modal.Title>
            </Modal.Header>
            <Form onSubmit={(e)=>submitForm(e)}>
                <Modal.Body>
                        <Form.Group className="mb-3" controlId="formListName">
                            <Form.Label>Give your list a name:</Form.Label>
                            <Form.Control onChange={(e)=>updateInput(e)} type="text" placeholder="Enter name" />
                        </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>Close</Button>
                    <Button type="submit" variant="primary">Save</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
  }
  
  export default NewList