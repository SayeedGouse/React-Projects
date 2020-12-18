import React from 'react';
import Button from '@material-ui/core/Button';
import {users} from './users';
import FormDialog from './userupdate';
import Form from './form2';
//import { v4 as uuidv4 } from 'uuid';
//import 'bootstrap/dist/css/bootstrap.min.css';

const User = (props) => {
    debugger;
    const newPerson = props.people;
     //setPerson([...newPerson]);
    debugger;
    const [value, setValue] = React.useState(users.length);
    const [person, setPerson] = React.useState(users);
    const deleteAll = () =>{
        setPerson([]);
        setValue(0);
    }
    const removePerson = (id) =>{
        const newPerson = person.filter((name) =>{
            return name.id !== id;
        });
        setPerson(newPerson);
        setValue(newPerson.length);
    }
    const addNotification = (user) =>{
        debugger;
        setPerson([...person,user]);
        const newValue = person.length;
        setValue(newValue);
    }
    const updateForm = (update,id) =>{
        const index = person.findIndex((item) =>{return item.id === id})
        person.splice(index, 1, update);
        debugger;
        setPerson([...person]);
    }

    return (
        <>
            <Form addUser={addNotification}/>
            {/* <Form addUser={addNotification}/> */}
            <h1>birthdays Notification</h1>
            <div className="underline"></div>
            <section className="section-container">
                <h2>{person.length} birthdays today</h2>
                {person.map((employee) => {
                    //const [img, name, age, id] = employee;
                    return(
                        <article className="user" key={employee.id}>
                            <img src={employee.img} alt={employee.name} />
                            <div className="info">
                                <div>
                                    <h4>{employee.name}</h4>
                                    <p>{employee.age}</p>
                                </div>
                                <div className="align-right">
                                    {/* <button className="remove" onClick={()=>updateUser(employee.id)}>update user</button> */}
                                    <FormDialog id={employee.id} updatePerson={updateForm}></FormDialog>
                                    <div><Button variant="contained" size="small" color="primary" className='small-size' onClick={() => removePerson(employee.id)}>remove</Button></div>
                                </div>
                            </div>
                        </article>
                    );
                })}
                <button className="btn-cust" onClick={deleteAll}>Clear All</button>
            </section>
        </>
    )
}
export default User;