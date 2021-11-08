import React, { useState } from 'react'
import './Todo.css'
import { Button, List, ListItem, ListItemText, Modal} from '@material-ui/core'
import db from './firebase'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        top: '20%',
        left: '20%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    },
  }));

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    const [input, setInput] = useState()

    const handleOpen = () => {
        setOpen(true);
    }

    const updateTodo = () => {
        // update the todo with the new input text
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, { merge: true})
        setOpen(false) 
    } 
    return (
    <>
        <Modal
        open={open}
        onClose={e => setOpen(false)}>
            <div className={classes.paper}>
                <h1>I am a modal</h1>
                <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
                <Button onClick={updateTodo}>Update Todo</Button>
            </div>
        </Modal>
            <List className="todo__list">
                <ListItem>
                    <ListItemText primary={props.todo.todo} secondary="Dummy deadline ⏰" />
                </ListItem>
                <button onClick={e => setOpen(true)}>Edit</button>
                <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}/>
            </List>
        </>
    )
}

export default Todo

