import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const CommentsManager = ({ posts, comments}) => {
    const countInPost = (id) => {
        let cmt = comments.filter(x => x.post_id == id);
        return cmt.length;
    }
    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">List Comments</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                         <table className="table table-striped table-bordered dt-responsive nowrap text-center" style={{width: '100%'}}>
                            <thead>
                                <tr>
                                    <th scope="col">Serial</th>
                                    <th scope="col">Post-name</th>
                                    <th scope="col">Count-comment</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.map(({ id, name, is_active }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index+1}</th>
                                        <td>{name}</td>
                                        <td>{countInPost(id)}</td>
                                        <td className="d-flex justify-content-center">
                                           <Link to={`comments/${id}`} className="btn bg-info text-white" ><i className="fas fa-eye"></i></Link>                                             
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

CommentsManager.propTypes = {
    comments: PropTypes.array,
    //onRemove: PropTypes.func
}

export default CommentsManager
