import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const PostsManager = ({ posts, onRemove, cate_name, users }) => {
    console.log(users)
    const removeHandle = (id) => {
        onRemove(id)
    }

    const showFullName = (user_id) => {
        var fullname;
        for(let j = 0; j < users.length; j++){
            if(users[j].id == user_id){
                fullname = users[j].fullname;
                return fullname;
            }
        }
    }
    
    const showName = (id) =>{
        var name_cate;
        for(var i = 0; i < cate_name.length; i++){
            if(cate_name[i].id == id){
                name_cate = cate_name[i].name;
                return name_cate;
            }
        }
    }
    localStorage.setItem('posts', JSON.stringify(posts))
    

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
                                    <th scope="col">Title</th>
                                    <th scope="col">Cate-name</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Active</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.map(({ id, name, image, cate_id, date, user_id, is_active }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index+1}</th>
                                        <td>{name}</td>
                                        <td>
                                            {showName(cate_id)}
                                        </td>
                                        <td><img src={image} alt="" width="50" /></td>
                                        <td>{date}</td>
                                        <td>{showFullName(user_id)}</td>
                                        <td>{is_active == 1 ? "Active" : "Inactive"}</td>
                                        <td className="d-flex justify-content-center">
                                            <Link to={`/admin/posts/${id}`} className="btn bg-primary mr-3 text-white"><i className="fas fa-edit"></i></Link>
                                            {/* <button className="btn btn-danger" onClick={() => removeHandle(id)} ><i className="fas fa-trash"></i></button>  */}
                                            <button className="btn bg-danger text-white" onClick={() => {if(window.confirm('Delete the item?')){removeHandle(id)};}}><i className="fas fa-trash"></i></button>                                             
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

PostsManager.propTypes = {
    posts: PropTypes.array,
    onRemove: PropTypes.func
}

export default PostsManager
