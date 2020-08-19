import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Signin = ({user}) => {
    const title = {fontSize: '26px',fontFamily: 'Rock Salt , cursive', textAlign: 'center'};
    const cursor = {cursor: 'pointer'}
    const { register, handleSubmit, errors } = useForm(); // Sử dụng hook form
    let history = useHistory();
    var boolean = false;
    

    const Close = () => {
        document.querySelector(".modal").style.display='none';
    }

    const onHandleSubmit = (data) => {
        const useracc = user.filter(x => x.username == data.username);
        console.log(0, useracc)
        if(useracc.length == 0) {
            document.querySelector("#err").innerHTML = "Don't have account. Sign up now?";
            document.querySelector(".modal").style.display = "block";
        }else{
            if(data.username == useracc[0].username && data.password == useracc[0].password && useracc[0].is_active == 1){
                //alert("Congralutation! ")
                document.querySelector("#myModal").style.display = "block";
                boolean = true;
                localStorage.setItem("user", JSON.stringify(useracc));
                localStorage.setItem("boolean", boolean);
            }else if(data.password !== useracc[0].password){
                document.querySelector("#err").innerHTML = "Wrong password. Try it now?";
                document.querySelector(".modal").style.display = "block";
            }else if(useracc[0].password !== 1){
                document.querySelector("#err").innerHTML = "Tai khoan bi chua kich hoat";
                document.querySelector(".modal").style.display = "block";
            }
        }
    }

    return (
        <div className='container'>
            <div className="mt-5">
                <div className="row">
                    <div className='col-12 text-left'><Link to="/"><i className="fas fa-home text-secondary" style={cursor}></i></Link></div>
                </div>
                <p style={title} className="mb-4">
                    Login with blooger
                </p>
                <div className="row d-flex justify-content-center">
                    <div className="col-5">
                        <form onSubmit={handleSubmit(onHandleSubmit)} id="form">

                            <div className="col-auto mb-4">
                                <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><i className="fas fa-user"></i></div>
                                    </div>
                                    <input 
                                        ref={register({ required: true})}
                                        type="text" 
                                        className="form-control" 
                                        name="username" 
                                        id="inlineFormInputGroup" 
                                        placeholder="Username"/><br/>
                                 </div>
                                <small id="usernameHelp" className="form-text text-danger">
                                    {errors.username && errors.username.type === "required" && <span>This field is required</span>}
                                </small>
                               
                            </div>

                            <div className="col-auto mb-4">
                                <label className="sr-only" htmlFor="inlineFormInputGroup">Password</label>
                                <div className="input-group mb-2">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><i className="fas fa-key"></i></div>
                                    </div>
                                    <input 
                                        ref={register({ required: true})}
                                        type="password" 
                                        className="form-control" 
                                        name="password" 
                                        id="inlineFormInputGroup" 
                                        placeholder="Password"/><br/>
                                </div>
                                <small id="passwordHelp" className="form-text text-danger d-block">
                                    {errors.password && errors.password.type === "required" && <span>This field is required</span>}
                                </small>
                            </div>
                            <div className="col-auto mt-2">
                                <input type="submit" value="Login" className="btn bg-primary text-white form-control mb-3" />
                            </div>
                        </form>
                       
                        <p className="text-center">Are you a member? <Link to="/signup" className="text-dark">Sign up now</Link> <svg className="icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="assets/images/icons.svg#arrow-right" /></svg></p>
                    </div>
                    
                </div>

                <div className="modal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Sign in</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"  onClick={Close}>
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p id="err" className="text-danger"></p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" id="close" onClick={Close}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                            Congratulations! Login successfully!
                            </div>
                            <div className="modal-footer">
                                <Link to="/" className="btn btn-info">OK</Link>
                            </div>               
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
      );
}

Signin.propTypes = {

}

export default Signin
