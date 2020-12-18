

import React from 'react';
import {users} from './users';
import { v4 as uuidv4 } from 'uuid';
//import 'bootstrap/dist/css/bootstrap.min.css';

const Form = (props) => {
    const [value, setValue] = React.useState(users.length);
    //const [person, setPerson] = React.useState(users);
    const [user, setUser] = React.useState({
        img:'',name:'',age:'',id:uuidv4()
    });
    const inputHandler = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setUser({...user, [name]: value});
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        
        if(user.img && user.name && user.age){
            props.addUser(user);
            setUser({img:'',name:'',age:''})
            // setValue(person.length);
        }else{
            alert('Please fill the Details');
        }
    }
    return (
        <>
            <h1>Add Notification</h1>
            <div className="underline"></div>
            <section className="section-container">
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Image Address</label>
                        <input type="text" className="form-control" 
                        name="img" 
                        value ={user.img} 
                        onChange={inputHandler} 
                        placeholder="Image Address"
                        required
                        />
                        <small id="emailHelp" className="form-text text-muted">Please enter valid image address.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Name</label>
                        <input type="text" className="form-control" 
                        name="name" 
                        value ={user.name} 
                        onChange={inputHandler} 
                        required
                        placeholder="Name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Age</label>
                        <input type="text" className="form-control" 
                        name="age" 
                        value ={user.age} 
                        onChange={inputHandler} 
                        required
                        placeholder='Age'/>
                    </div>
                    <button type="submit" className="btn-cust" onClick={submitHandler}>Add</button>
                </form>
            </section>
        </>
    )
}
export default Form;