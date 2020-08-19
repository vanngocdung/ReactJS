import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const PostDetail = ({id,posts, categories, comments, onAddComment, users}) => {
    const post = posts.filter(x => x.id == id);
    const font = {fontFamily: 'Lobster, cursive', color: '#11aa59'};
    
    //Date
    const today = new Date(),
    date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear(); 

    const { register, handleSubmit, errors } = useForm(); // Sử dụng hook form
    let history = useHistory();

    var user = JSON.parse(localStorage.getItem('user'));
   
    const onHandleSubmit = (data) => {
        const newData = {
            post_id: id,
            user_id: user[0].id,
            date: date,
            ...data,
        }
        console.log(newData);
        onAddComment(newData);
        document.querySelector("#formcmt").reset();
    }


    // const showFullName = (user_id) => {
    //     var fullName;
    //     for(let j = 0; j < users.length; j++){
    //         if(users[j].id == user_id){
    //             fullName = users[j].fullname;
    //             return fullName;
    //         }
    //     }
    // }

    const showUserName = (id) => {
        var username;
        for(var i = 0; i < users.length; i++){
            if(users[i].id == id){
                username = users[i].username;
                return username;
            }
        }
    }

    const form = () => {
        var boolean = localStorage.getItem('boolean');
    if(boolean == "true"){
        return (
            <div>
                <h3 className="text-dark"> Leave a comment</h3>
                <div className="row bg-warningg px-4 pb-4">
                    <div className="col-12">
                        <form id="formcmt" onSubmit={handleSubmit(onHandleSubmit)}>
                            <label htmlFor="formGroupExampleInput2">Message</label>
                            <div className="row">
                                <div className="col-10">
                                    <textarea ref={register({ required: true})} className="form-control" aria-describedby="contentHelp" name="content" rows="3" placeholder=" Post yout comment...."></textarea>
                                    <small id="contentHelp" className="form-text text-danger">
                                        {errors.content && <span>This field is required</span>}
                                    </small>
                                </div>
                                <div className="col-2">
                                    <button className="btn bg-success py-4 px-4 text-white" type="submit">Post</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }else{
        return " ";
    }
    }
    
    //comment in post\
    const ListComments = comments.filter(y => y.post_id == id);
    const text = (x) => {
        var details = document.getElementById("details");
        return <p dangerouslySetInnerHTML={{ __html: x }}></p>
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
        <div className="container-fluid">
            <div className="container">
            {post.map(({id, name, image, user_id, date, content}, index)=>(
                <div key={index}>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <h3 style={font} className="pt-3 text-left">{name}</h3>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center mt-3">
                        <div className="col-8">
                            <img src={image} className=" img-fluid d-block w-100" alt=""/>
                        </div>
                    </div>
                    <div className="col-12 text-justify pt-3">
                        <p>
                            {text(content)}
                        </p>
                        <div className="text-right">
                            <span><i>Date: {date}</i></span><br/>
                            <span><i>User: {showFullName(user_id)}</i></span>
                        </div>
                    </div>
                </div>
            ))}

            <div className="col-12">
                {form()}
            </div>

                <div className="row px-4">
                    {ListComments.map(({user_id, id, content, date}, index)=> (
                        <div className="col-12 pl-1 mb-2" key={index}>
                            <h5 className="text-dark d-inline pr-2"><b>{showFullName(user_id)}: </b></h5>
                            <span className="font-1">{content}</span>
                            <p className="text-dark mt-1"><span className="pr-3"><i>Date: {date}</i></span> <span className="pr-3"><i>User_name: {showUserName(user_id)}</i></span> <span><i className="fas fa-sms"> </i> </span></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

PostDetail.propTypes = {
    onAddComment: PropTypes.func
}

export default PostDetail
