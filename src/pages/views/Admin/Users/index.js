import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const UserManager = ({users}) => {
    return (
        <div>
            <div className="row">
                <div className="col-12 d-flex justify-content-end mb-3">
                    <Link to='/admin/posts/add' className="btn bg-success text-white"><i className="fas fa-plus pr-2"></i>Add</Link>
                </div>
            </div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">List Posts</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                         <table className="table table-striped table-bordered dt-responsive nowrap text-center" style={{width: '100%'}}>
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Fullname</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phonenumber</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Active</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(({ id, fullname, username, email, phonenumber, address, is_active }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index+1}</th>
                                        <td>{fullname}</td>
                                        <td>{username}</td>
                                        <td>{email}</td>
                                        <td>{phonenumber}</td>
                                        <td>{address}</td>
                                        <td>{is_active == true ? "Active" : "Inactive"}</td>
                                        <td className="d-flex justify-content-center">
                                            <Link to={`/admin/users/${id}`} className="btn bg-primary mx-3 text-white"><i className="fas fa-edit"></i></Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

UserManager.propTypes = {
    users: PropTypes.array,
}

export default UserManager
