import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const EditUser = ({ users, onUpdateUser }) => {
    //Font
    const font = {fontFamily: 'Lobster, cursive',fontWeight: 'bold'};
    let { id } = useParams();
    let history = useHistory();
    // Sử dụng hook form
    const { register, handleSubmit, errors } = useForm(); 
    const user = users.find(x => x.id === id);

    const [currentUser, setcurrentUser] = useState(user);
    
    const onHandleSubmit = (e) => {
        //e.preventDefault();
        onUpdateUser(currentUser);
        history.push('/admin/users');
        console.log(currentUser)
    }
    const onHandleChange = e => {
        var a = document.getElementById("active");
        console.log(1, a.value);
        var active = (a.value == 0 ? false : true);
        console.log(2, active)
        const { name, value } = e.target;
        setcurrentUser({
            ...currentUser,
            [name]: value,
            is_active: active
        })
    }
    return (
        <div className="d-flex justify-content-center row">
            <div className="col-12 text-center">
                <h3 style={font}>Edit User</h3>
            </div>
            <form action="" className="w-50"  onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-group">
                    <label htmlFor="productName">Fullname</label>
                    <input 
                        type="text" 
                        name="fullname" 
                        aria-describedby="nameHelp"
                        value={currentUser.fullname} 
                        className="form-control" 
                        readOnly/>
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Username</label>
                    <input 
                        type="text" 
                        name="username" 
                        aria-describedby="nameHelp"
                        value={currentUser.username} 
                        className="form-control" readOnly/>
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Email</label>
                    <input 
                        type="text" 
                        name="email" 
                        aria-describedby="nameHelp"
                        value={currentUser.email} 
                        className="form-control" readOnly/>
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Address</label>
                    <input 
                        type="text" 
                        name="address" 
                        aria-describedby="nameHelp"
                        value={currentUser.address} 
                        className="form-control" readOnly/>
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Phonenumber</label>
                    <input 
                        type="text" 
                        name="phonenumber" 
                        aria-describedby="nameHelp"
                        value={currentUser.phonenumber} 
                        className="form-control" readOnly/>
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Active</label>
                    <select className="form-control" name="is_active" id="active" onChange={onHandleChange}>
                        <option value="0">InActive</option>
                        <option value="1">Active</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-info float-right mb-3 mt-3">Update</button>
            </form>
        </div>
    )
}

EditUser.propTypes = {
    users: PropTypes.array
}

export default EditUser
