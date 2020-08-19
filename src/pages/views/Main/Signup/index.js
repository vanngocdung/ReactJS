import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Signup = ({onAddUser}) => {
    const title = {fontSize: '26px',fontFamily: 'Rock Salt , cursive', textAlign: 'center'};
    const cursor = {cursor: 'pointer'};
    
    const { register, handleSubmit, errors } = useForm(); // Sử dụng hook form
    let history = useHistory();

    const onHandleSubmit = (data) => {
        if(data.password !== data.confirm){
            document.querySelector("#err").innerHTML = "Fail to confirm password"
        }else{
            document.querySelector("#err").innerHTML = "";
            const newData = {
                is_active: 0,
                ...data,
            }
            console.log(newData)
            onAddUser(newData);
            document.querySelector("#myModal").style.display = "block";
            //history.push('/signin');
        }
        //onAddUser(newData);
        //history.push('/admin/posts');
    }

    const close = () => {
        document.querySelector("#myModal").style.display = "none";
        document.querySelector("form").reset();
    }

 
    return (
        <div className='container'>
            <div className="mt-5">
                <div className="row">
                    <div className='col-12 text-left'><Link to="/"><i className="fas fa-home text-secondary" style={cursor}></i></Link></div>
                </div>
                <p style={title} className="mb-4">
                    Signup with blooger
                </p>
                <div className="row d-flex justify-content-center">
                    <div className="col-5">
                        <form onSubmit={handleSubmit(onHandleSubmit)}>
                            <div className="col-auto mb-4">
                                <label className="sr-only" htmlFor="inlineFormInputGroup">Fullname</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><i className="fas fa-user"></i></div>
                                    </div>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="fullname" 
                                        ref={register({ required: true, pattern: /^[a-zA-Z]+[a-zA-Z ]+$/i})}
                                        aria-describedby="fullnameHelp"
                                        id="inlineFormInputGroup" 
                                        placeholder="Fullname"/>
                                </div>
                                <small id="fulnameHelp" className="form-text text-danger">
                                    {errors.fullname && errors.fullname.type === "required" && <span>This field is required</span>}
                                    {errors.fullname && errors.fullname.type === "pattern" && <span>Can't not have space in name</span>}
                                </small>
                            </div>

                            <div className="col-auto mb-4">
                                <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><i className="fas fa-user"></i></div>
                                    </div>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="username" 
                                        ref={register({ required: true, pattern: /^[a-zA-Z]+$/i, minLength: 5 })}
                                        aria-describedby="usernameHelp"
                                        id="inlineFormInputGroup" 
                                        placeholder="Username"/>
                                </div>
                                <small id="usernameHelp" className="form-text text-danger">
                                    {errors.username && errors.username.type === "minLength" && <span>Min Length 5</span>}
                                    {errors.username && errors.username.type === "required" && <span>This field is required</span>}
                                    {errors.username && errors.username.type === "pattern" && <span>Can't not have space in name</span>}
                                </small>
                            </div>


                            <div className="col-auto mb-4">
                                <label className="sr-only" htmlFor="inlineFormInputGroup">Password</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><i className="fas fa-key"></i></div>
                                    </div>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        name="password"
                                        ref={register({ required: true, minLength: 6 })}
                                        aria-describedby="passwordHelp" 
                                        id="inlineFormInputGroup" 
                                        placeholder="Password"/>
                                </div>
                                <small id="passwordHelp" className="form-text text-danger">
                                    {errors.password && errors.password.type === "minLength" && <span>Min Length 5</span>}
                                    {errors.password && errors.password.type === "required" && <span>This field is required</span>}
                                </small>
                            </div>

                            <div className="col-auto mb-4">
                                <label className="sr-only" htmlFor="inlineFormInputGroup">Password</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><i className="fas fa-key"></i></div>
                                    </div>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        name="confirm"
                                        ref={register({ required: true})}
                                        aria-describedby="confirmHelp" 
                                        id="inlineFormInputGroup" 
                                        placeholder="Confirm password"/>
                                </div>
                                <small id="passwordHelp" className="form-text text-danger">
                                    {errors.confirm && <span>This field is required</span>}
                                </small>
                                <small id="err" className="form-text text-danger"></small>
                            </div>

                            <div className="col-auto mb-4">
                                <label className="sr-only" htmlFor="inlineFormInputGroup">Email</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><i className="fas fa-envelope"></i></div>
                                    </div>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        name="email" 
                                        ref={register({ required: true })}
                                        aria-describedby="emailHelp"
                                        id="inlineFormInputGroup" 
                                        placeholder="Email"/>
                                </div>
                                <small id="emailHelp" className="form-text text-danger">
                                    {errors.email && <span>This field is required</span>}
                                </small>
                            </div>

                            <div className="col-auto mb-4">
                                <label className="sr-only" htmlFor="inlineFormInputGroup">Phonenumber</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><i className="fas fa-phone"></i></div>
                                    </div>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="phonenumber" 
                                        ref={register({ required: true, pattern: /^0[0-9]{9}$/i })}
                                        aria-describedby="phonenumberHelp"
                                        id="inlineFormInputGroup" 
                                        placeholder="Phonenumber"/>
                                </div>
                                <small id="phonenumberHelp" className="form-text text-danger">
                                    {errors.phonenumber && errors.phonenumber.type === "pattern" && <span>The number phone is number and length is 10</span>}
                                    {errors.phonenumber && errors.phonenumber.type === "required" && <span>This field is required</span>}
                                </small>
                            </div>

                            <div className="col-auto mb-4">
                                <label className="sr-only" htmlFor="inlineFormInputGroup">Address</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><i className="fas fa-map-marker-alt"></i></div>
                                    </div>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="address" 
                                        ref={register({ required: true })}
                                        aria-describedby="addressHelp"
                                        id="inlineFormInputGroup" 
                                        placeholder="Address"/>
                                </div>
                                <small id="addressHelp" className="form-text text-danger">
                                    {errors.address && <span>This field is required</span>}
                                </small>
                            </div>
                            <div className="col-auto mt-2">
                                <input type="submit" value="Sign up" className="btn bg-primary text-white form-control mb-3" />
                            </div>
                        </form>
                        <p className="text-center">Are you a member? <Link to="/signin" className="text-dark">Sign in now</Link> <svg className="icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="assets/images/icons.svg#arrow-right" /></svg></p>
                    </div>

                    <div className="modal" id="myModal">
                        <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                            Congratulations! Creat account successfully!
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={close}>Close</button>
                                <Link to="/signin" className="btn btn-info">OK</Link>
                            </div>               
                        </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
      );
}

Signup.propTypes = {

}

export default Signup
