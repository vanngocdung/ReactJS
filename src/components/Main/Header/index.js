import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const Header = props => {
    let history = useHistory();
    const sizeValue = {fontSize: '20px'};
    const backgroundColor = {backgroundColor: '#ededeb'};

    const boolean = localStorage.getItem("boolean");
    const user = JSON.parse(localStorage.getItem("user"));
    const logOut = () =>{
        localStorage.setItem("boolean", false)
        history.push("/signin");
    }
    const show = () =>{
        if(boolean == "true"){
            return (
                <div>
                    <span><i><b>Hello: {user[0].fullname}</b></i> </span>
                    <span><button data-toggle="modal" data-target="#myModal" className="pl-3 btn btn-default"><i className="fas fa-sign-out-alt"></i></button></span>
                </div>
            )
        }else{
            return  (
                <div>
                    <Link className="btn btn-info mr-2" to="/signin">Sign in</Link>
                    <Link className="btn btn-info" to="/signup">Sign up</Link>
                </div>
            )
        }
    }
    return (
        <div style={backgroundColor} className="container-fluid" >
            <div className="container pt-2 pb-2">
                <div className="row text-dark d-flex justify-content-between">
                    <div>
                        <span style={sizeValue}><i className="fas fa-crown pr-2"></i></span>
                        <span style={sizeValue} className="font-weight-bold">FROM UP NORTH <sup><span className="font-weight-normal">ND</span></sup></span>
                    </div>
                    <div>
                       
                    </div>
                    <div id="sign">
                        {show()}
                    </div>
                </div>
                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Logout now?</h5>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-info" onClick={logOut}>OK</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

Header.propTypes = {

}

export default Header
