import React from 'react';
import {
  Button,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Modal,
  TextField,
} from '@material-ui/core';
import DB from './db/firebase';
import { useState } from 'react';
import firebase from 'firebase';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import UpdateIcon from '@material-ui/icons/Update';

// Update popup style
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    marginLeft: 525,
    marginTop: 250,
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: 'center',
  },
}));

function TodoList(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');

  // delete from firebase
  const deleteTodo = () => {
    DB.collection('todos').doc(props.todo.id).delete();
  };

  // Modal close
  const handleClose = () => {
    setOpen(false);
  };

  // update todo from firebase
  const updateTodo = () => {
    DB.collection('todos').doc(props.todo.id).set(
      {
        todo: input,
        time: firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    setOpen(false);
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <div className={classes.paper}>
          <TextField
            label={props.todo.todo}
            type="text"
            variant="outlined"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <span className="space"></span>
          <Button
            onClick={updateTodo}
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            disabled={!input}
          >
            <span className="add-btn">
              <UpdateIcon />
              Update
            </span>
          </Button>
        </div>
      </Modal>
      <List>
        <ListItem button key={props.todo.id}>
          <ListItemText
            primary={props.todo.todo}
            // secondary={props.todo.time}
          />

          <Button
            variant="contained"
            color="primary"
            size="medium"
            onClick={(e) => setOpen(true)}
          >
            <EditIcon />
            <span>Edit</span>
          </Button>
          <span className="space"></span>
          <Button
            variant="contained"
            color="secondary"
            size="medium"
            onClick={deleteTodo}
          >
            <DeleteForeverIcon />
            <span>Remove</span>
          </Button>
        </ListItem>
      </List>
    </div>
  );
}

export default TodoList;
