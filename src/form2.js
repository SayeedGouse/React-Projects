

import React,{useState, useReducer} from 'react';
import {users} from './users';
import { v4 as uuidv4 } from 'uuid';
import {Model} from './model'
//import 'bootstrap/dist/css/bootstrap.min.css';
const reducer = (state,action) =>{
    if(action.type === 'ADD_ITEM'){
        const newPeople  = [...state.people,action.payload];
        return{
            ...state,
            people:newPeople,
            isModalOpen:true,
            modelContent:'Item Added'
        }

    }
}
const stateDefault ={
     people:[],
     isModalOpen:true,
     modelContent:''
}
const Form = (props) => {
    const [user, setUser] = useState({
     img:'',
     name:'',
     age:'',
     id:uuidv4()
});
    const [state, dispatch] = useReducer(reducer,stateDefault);
    const inputHandler = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setUser({...user, [name]: value,id:uuidv4()});
    }
    const submitHandler = (e) =>{
        e.preventDefault();
        
        if(user.img && user.name && user.age){

            dispatch({type:'ADD_ITEM',payload:user});
            //props.addUser({...state.people});
            setUser({img:'',name:'',age:''})
            // setValue(person.length);
        }else{
            alert('Please fill the Details');
        }
    }
    return (
        <>
            <h1 people={state.people}>Add Notification</h1>
            <div className="underline"></div>
            <section className="section-container">
                {state.isModalOpen && <Model modelContent={state.modelContent}/>}
                <form  onSubmit={submitHandler}>
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
                    <button type="submit" className="btn-cust">Add</button>
                </form>
            </section>
        </>
    )
}
export default Form;