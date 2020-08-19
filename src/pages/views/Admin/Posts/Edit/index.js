import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Editor } from '@tinymce/tinymce-react';
import firebase from '../../../../../firebase';

const EditPost = ({ posts, onUpdate, cate_name }) => {
    const font = {fontFamily: 'Lobster, cursive',fontWeight: 'bold'};
    let { id } = useParams();
    let history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const post = posts.find(post => post.id === id);
   

    const [currentPost, setCurrentPost] = useState(post);
    const [image, setImage] = useState(currentPost.image);
    console.log("1 - Ảnh ở data", currentPost)
    console.log("2 - Ảnh ở state", image)

    const onHandleSubmit = (e) => {
        if(document.querySelector("#image").value===""){
            onUpdate(currentPost);
            history.push('/admin/posts');
        }else{
            let file = e.image[0];
            let storageRef = firebase.storage().ref(`images/${file.name}`);
            storageRef.put(file).then(function () {
                storageRef.getDownloadURL().then((url) => {
                    console.log("3 - Link ảnh mới",url);
                    setImage(url)
                }).then(item => {
                    // Tạo object mới chứa toàn bộ thông tin từ input
                    setCurrentPost({
                        ...currentPost,
                        image: item,
                        
                    })
                    onUpdate(currentPost);
                    console.log("4 - New Data", currentPost)
                    //history.push('/admin/posts');
                })
            }); 
            console.log("img 2",image)                                    
        }
        // onUpdate(currentPost);
        // history.push('/admin/posts');
    }
        // for(let j = 0; j < editCate.length; j++){
        //     if(editCate[j].value == post.cate_id){
        //         editCate[j].selected = true;
        //     } 
        // }

    const [content, setContent] = useState(currentPost.content);
    
    // const onHandleChangeImage = e => {
    //     if(document.querySelector("#image").value === ""){
    //         setImage(currentPost.image)
    //     }else{
    //         setImage(e.target.files[0]);
    //         console.log("dỗi", image)
    //     }
    // }

    const onHandleChange = e => {
        const { name, value } = e.target;
        setCurrentPost({
            ...currentPost,
            [name]: value,
            content: content
        })
    }

    const changeText = (content, editor) =>{
        setContent(content);
    }

    return (
        <div className="d-flex justify-content-center row">
            <div className="col-12 text-center">
                <h3 style={font}>Edit Post</h3>
            </div>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)} className="w-50">
                <div className="form-group">
                    <label htmlFor="selectOption">Cate-name</label>
                    {/* <input className="form-control" type="text" value={name_cate} readOnly/> */}
                    <select className="form-control" id="cate_id" name="cate_id" ref={register()} onChange={onHandleChange}>
                        {cate_name.map(({ id, name }, index) => (
                            <option key={index} selected={currentPost.cate_id == id} value={id}>{name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Title</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={currentPost.name} 
                        onChange={onHandleChange} 
                        ref={register({ required: true, minLength: 5 })}
                        aria-describedby="nameHelp"
                        className="form-control" />
                    <small id="nameHelp" className="form-text text-danger">
                        {errors.name && errors.name.type === "required" && <span>This field is required</span>}
                        {errors.name && errors.name.type === "minLength" && <span>Min Length 5</span>}
                    </small>
                </div>
                
                <div className="form-group">
                    <div className="row d-flex justify-content-center">
                        <div className="col-6 ">
                            <img src={currentPost.image} className="img-fluid" />
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input
                        type="file"
                        name="image"
                        className="form-control"
                        id="image"
                        // onChange={onHandleChangeImage} 
                        ref={register()}
                    />
                </div>
                {/* <div className="form-group">
                    <label htmlFor="productPrice">Image</label>
                    <div className="input-group">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="inputGroupFile02" name="image" ref={register({ required: true })}
                            />
                            <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
                        </div>
                    </div>
                    <small id="imageHelp" className="form-text text-danger">{errors.image && <span>This field is required</span>}</small>
                </div> */}
                <div className="form-group">
                    <label htmlFor="content">Description</label>
                    {/* <textarea 
                        className="form-control" 
                        rows="7" 
                        name="content" 
                        id="content" 
                        ref={register({ required: true, minLength: 10 })}
                        aria-describedby="contentHelp"
                        onChange={onHandleChange} 
                    >
                        {currentPost.content}
                    </textarea>
                    <small id="contentHelp" className="form-text text-danger">
                        {errors.content && errors.content.type === "required" && <span>This field is required</span>}
                        {errors.content && errors.content.type === "minLength" && <span>Min Length 10</span>}
                    </small> */}

                    <Editor
                        textareaName="content"
                        initialValue="<p>Description of your post</p>"
                        init={{
                        height: 300
                        }}
                        value = {currentPost.content}
                        onEditorChange={changeText}
                        onChange={onHandleChange} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="is_active">Active</label>
                    <select className="form-control" id="is_active" name="is_active" ref={register()} onChange={onHandleChange} >
                        <option value="1" selected={currentPost.cate_id == id}>Active</option>
                        <option value="0" selected={currentPost.cate_id == id}>InActive</option>
                    </select>
                </div>
                <button className="btn btn-info float-right">Update</button>
            </form>
        </div>
    )
}

EditPost.propTypes = {
    posts: PropTypes.array
}

export default EditPost
