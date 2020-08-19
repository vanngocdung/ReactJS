import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const Account = ({users, onUpdateUser}) => {
    let { id } = useParams();
    let history = useHistory();
    // Sử dụng hook form
    const { register, handleSubmit, errors } = useForm(); 
    const user = users.find(x => x.id === id);

    const [currentUser, setcurrentUser] = useState(user);

    const onHandleSubmit = (e) => {
        //e.preventDefault();
        onUpdateUser(currentUser);
        history.push(`/account/${id}`);
        console.log(currentUser)
    }

    const onHandleChange = e => {
        var a = document.getElementById("active");
        const { name, value } = e.target;
        setcurrentUser({
            ...currentUser,
            [name]: value
        })
    }

    return (
        <div className="container ">
            <div className="row">
                <div className="col-4 pt-4">
                    <ul className="list-group">
                            <li className="list-group-item text-muted">Activity <i className="fa fa-dashboard fa-1x" /></li>
                            <li className="list-group-item text-left"><span className="pull-left"><strong>Comments</strong></span> 125</li>
                            <li className="list-group-item text-left"><span className="pull-left"><strong>Posts</strong></span> 13</li>
                        </ul>
                </div>
                <div className="col-8">
                    <form className="form" onSubmit={handleSubmit(onHandleSubmit)} id="registrationForm">
                        <div className="form-group">
                            <div className="col-xs-6">
                                <label htmlFor="first_name"><h4>Full name</h4></label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="fullname" 
                                    id="fullname" 
                                    onChange={onHandleChange}
                                    value={currentUser.fullname}
                                    placeholder="Full name" 
                                    ref={register({required:true, minLength:5})}
                                    title="enter your first name if any." />
                            </div>
                            <small id="phonenumberHelp" className="form-text text-danger">
                                {errors.fullname && errors.fullname.type === "minLength" && <span>Min length is 5</span>}
                                {errors.fullname && errors.fullname.type === "required" && <span>This field is required</span>}
                            </small>
                        </div>
                        <div className="form-group">
                            <div className="col-xs-6">
                                <label htmlFor="last_name"><h4>User name</h4></label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="username" 
                                    id="username" 
                                    onChange={onHandleChange}
                                    ref={register({required:true})}
                                    value={currentUser.username}
                                    placeholder="User name" 
                                    title="enter your last name if any." />
                            </div>
                            <small id="phonenumberHelp" className="form-text text-danger">
                                {errors.fullname  && <span>This field is required</span>}
                            </small>
                        </div>
                        <div className="form-group">
                            <div className="col-xs-6">
                                <label htmlFor="mobile"><h4>Mobile</h4></label>
                                <input type="text" className="form-control" name="mobile" id="mobile" placeholder="enter mobile number" title="enter your mobile number if any." />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-xs-6">
                                <label htmlFor="email"><h4>Email</h4></label>
                                <input type="email" className="form-control" name="email" id="email" placeholder="you@email.com" title="enter your email." />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-xs-6">
                                <label htmlFor="email"><h4>Location</h4></label>
                                <input type="email" className="form-control" id="location" placeholder="somewhere" title="enter a location" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-xs-6">
                                <label htmlFor="password"><h4>Password</h4></label>
                                <input type="password" className="form-control" name="password" id="password" placeholder="password" title="enter your password." />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-xs-6">
                                <label htmlFor="password2"><h4>Verify</h4></label>
                                <input type="password" className="form-control" name="password2" id="password2" placeholder="password2" title="enter your password2." />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-xs-12">
                                <br />
                                <button className="btn btn-lg btn-success" type="submit"><i className="glyphicon glyphicon-ok-sign" /> Save</button>
                                <button className="btn btn-lg" type="reset"><i className="glyphicon glyphicon-repeat" /> Reset</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

Account.propTypes = {

}

export default Account
