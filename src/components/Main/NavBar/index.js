import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Navbar = props => {
    const backgroundColor = {backgroundColor: '#ededeb'};
    const boxShadow = {boxShadow: '0px -1px 2px #000000'};
    var category = JSON.parse(localStorage.getItem("categories"));
    const boolean = localStorage.getItem("boolean");
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user[0].username, boolean)

    return (
        <div className="container-fluid">
            <div className="container d-flex justify-content-between pl-0 pr-0">
                <nav className="navbar navbar-expand-lg pb-0">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link pr-5 text-dark" to="/"><i className="fas fa-home pr-1"></i> Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle pr-5 text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-list-ul pr-1"></i> Category
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {category.map(({id, name}, index)=>(
                                        <Link className="dropdown-item" to={`/category/${id}`} key={index}>{name}</Link>
                                    ))}
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link pr-5 text-dark" to="/post"><i className="fas fa-edit pr-1"></i> Post</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link pr-5 text-dark" to="/contact"><i className="fas fa-envelope-open-text pr-1"></i> Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link pr-5 text-dark" to={`/account/${user[0].id}`}><i className="fas fa-user pr-1"></i> Account</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link pr-5 text-dark" to="/admin"><i className="fas fa-align-center pr-1"></i> Manager </Link>
                            </li>
                            
                        </ul>
                    </div>
                </nav>
                
                <div className="pt-3">
                    <span className="text-secondary">
                        <i className="fab fa-facebook-f px-2"></i>
                        <i className="fab fa-skype px-2"></i>
                        <i className="fab fa-twitter px-2"></i>
                        <i className="fas fa-envelope-open-text px-2"></i>
                        <i className="fab fa-instagram px-2"></i>
                    </span>
                </div>          
            </div>
            <hr style={boxShadow} className="container"/>
        </div>      
    )
}

Navbar.propTypes = {

}

export default Navbar
