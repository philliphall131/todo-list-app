import { Modal, Button, Form } from "react-bootstrap";
import ToDoAPI from "../utils/todo_utils.js";
import { useState } from  "react";

function NewTask(props) {

    const [formName, setFormName] = useState('')
    const [formDate, setFormDate] = useState('')

    const submitForm = async (evt)=>{
        let formInput = {
            'name': formName,
            'due_date': formDate,
            'taskList': props.listId
        }
        evt.preventDefault();
        await ToDoAPI.newTask(formInput)
            ? props.handleClose()
            : console.log('Problem with submiting form')
    }

    const updateInput = (evt)=>{

        if (evt.target.id == 'formListName'){
            setFormName(evt.target.value)
        } else {
            setFormDate(evt.target.value)
        }
    }

    return (
        <Modal show={props.showModal} onHide={props.handleClose}>
            <Modal.Header>
                <Modal.Title>Add a new task</Modal.Title>
            </Modal.Header>
            <Form onSubmit={(e)=>submitForm(e)}>
                <Modal.Body>
                        <Form.Group className="mb-3" controlId="formListName">
                            <Form.Label>What is your task?:</Form.Label>
                            <Form.Control onChange={(e)=>updateInput(e)} type="text" placeholder="Enter task" name='name'/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formListDate">
                            <Form.Label>When should this be complete?:</Form.Label>
                            <Form.Control onChange={(e)=>updateInput(e)} type="date" name="date"/>
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
  
  export default NewTask