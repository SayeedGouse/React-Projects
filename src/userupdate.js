import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

//import {users} from './users';
import { v4 as uuidv4 } from 'uuid';

const FormDialog = (props) =>{
  const [open, setOpen] = React.useState(false);
  //const [user, setUsers] = React.useState(users);
  const [update, setUpdate] = React.useState({
       id:uuidv4(), img:'',name:'',age:''
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
const handlerInput = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setUpdate({...update, [name]:value});
}
const handleSubmit = (e) =>{
    e.preventDefault();
    
    props.updatePerson(update,props.id);
    setUpdate({img:'', name:'', age:''});
}
  return (
    <div>
       <Button variant="contained" size="small" color="primary" className='small-size' onClick={(props)=>handleClickOpen()}>
        update
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update Details</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name='img'
            value={update.img}
            label="Image address"
            type="text"
            fullWidth
            onChange={handlerInput}
            required
          />
          <TextField
            autoFocus
            margin="dense"
            name='name'
            value={update.name}
            label="Name"
            type="text"
            fullWidth
            onChange={handlerInput}
            required
          />
          <TextField
            autoFocus
            margin="dense"
            name='age'
            value={update.age}
            label="age"
            type="text"
            fullWidth
            onChange={handlerInput}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type ="submit" onClick={handleSubmit} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default FormDialog;