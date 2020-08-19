import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const DetailComments = ({comments, users, posts, onRemoveComment}) => {
    const removeHandlecomment = (id) => {
        //console.log(id)
        onRemoveComment(id)
    }
    let { id } = useParams();
    const listCmt = comments.filter(comment => comment.post_id == id);
    const postName = posts.filter(post => post.id == id);
    
    const notification = () =>{
        if(listCmt.length == 0){
            return " No comments in this post!"
        }else{
            return listCmt.length + " Comments in the post: " + postName[0].name
        }
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
    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">List Comments in posts</h6>
                </div>
                <div className="card-body">
                    
                    <div className="table-responsive">
                         <table className="table table-striped table-bordered dt-responsive nowrap text-center" style={{width: '100%'}}>
                            <thead>
                                <tr>
                                    <th scope="col">Serial</th>
                                    <th scope="col">Content</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">User-comment</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr className="text-center mt-4"><td colSpan="5"><p className="font-weight-bold">{notification()}</p></td></tr>
                                {listCmt.map(({ id , user_id, content, date, post_id}, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index+1}</th>
                                        <td>{content} </td>
                                        <td>{date} </td>
                                        <td>{showFullName(user_id)} </td>
                                        <td className="d-flex justify-content-center">
                                           <button className="btn bg-info text-white"  onClick={() => {if(window.confirm('Delete the item?')){removeHandlecomment(id)};}}><i className="fas fa-trash"></i></button>     
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

DetailComments.propTypes = {

}

export default DetailComments
