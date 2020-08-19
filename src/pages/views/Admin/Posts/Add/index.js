import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Editor } from '@tinymce/tinymce-react';
import firebase from '../../../../../firebase';

const AddProduct = ({ onAdd, cate_name }) => {
   
    //Date
    const today = new Date(),
    date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    //Font
    const font = {fontFamily: 'Lobster, cursive',fontWeight: 'bold'};
    const { register, handleSubmit, errors } = useForm(); // Sử dụng hook form
    const user = JSON.parse(localStorage.getItem("user"));
    let history = useHistory();

  
    const newCate = cate_name.filter(x => x.id !== "1");


    const [content, setContent] = useState("");

    const onHandleSubmit = (data) => {
        console.log(data.image[0]);
        let file = data.image[0];
        // tạo reference chứa ảnh trên firesbase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        // đẩy ảnh lên đường dẫn trên
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                console.log(url);
                // Tạo object mới chứa toàn bộ thông tin từ input
                const newData = {
                    user_id: user[0].id,
                    date: date,
                    is_active: 1,
                    ...data,
                    content,
                    image: url
                }
                console.log(newData);
                // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
                onAdd(newData)
                history.push('/admin/posts');
            })
        });
        
    }

    const changeText = (content, editor) =>{
        setContent(content);
    }

    return (
        <div className="d-flex justify-content-center row">
            <div className="col-12 text-center">
                <h3 style={font}>Add Post</h3>
            </div>
            <form action="" className="w-50" onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-group">
                    <label htmlFor="cate_id">Cate-name</label>
                    <select className="form-control" id="cate_id" name="cate_id" ref={register()}>
                        <option selected value="1">-- Name --</option>
                        {newCate.map(({ id, name }, index) => (
                            <option key={index} value={id}>{name}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Title</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="productName"
                        ref={register({ required: true, minLength: 5, pattern: /^[a-zA-Z]+[a-zA-Z0-9 ]+$/i  })}
                        aria-describedby="nameHelp"
                    />
                    <small id="nameHelp" className="form-text text-danger">
                        {errors.name && errors.name.type === "required" && <span>This field is required</span>}
                        {errors.name && errors.name.type === "minLength" && <span>Min Length 5</span>}
                        {errors.name && errors.name.type === "pattern" && <span>Can't not have space in name</span>}
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="productPrice">Image</label>
                    <div className="input-group">
                        <div className="custom-file">
                            <input type="file"
                                className="custom-file-input"
                                id="inputGroupFile02"
                                name="image"
                                ref={register({required: true})}
                            />
                            <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
                        </div>
                    </div>
                    <small id="imageHelp" className="form-text text-danger">{errors.image && <span>This field is required</span>}</small>
                </div>

                {/* <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input
                        type="text"
                        name="image"
                        className="form-control"
                        id="image"
                        ref={register({ required: true})}
                        aria-describedby="nameHelp"
                    />
                    <small id="nameHelp" className="form-text text-danger">
                        {errors.image && <span>This field is required</span>}
                    </small>
                </div> */}
                <div className="form-group">
                    <label htmlFor="content">Description</label>
                    <Editor
                        textareaName="content"
                        initialValue="<p>Description of your post</p>"
                        init={{
                            height: 500,
                            menubar: false,
                            plugins: [
                              'advlist autolink lists link image charmap print preview anchor',
                              'searchreplace visualblocks code fullscreen',
                              'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar:
                              'undo redo | formatselect | bold italic backcolor | \
                              alignleft aligncenter alignright alignjustify | \
                              bullist numlist outdent indent | removeformat | help'
                          }}
                        onEditorChange={changeText}
                    />

                    {/* <textarea 
                        className="form-control" 
                        rows="7" 
                        name="content" 
                        id="content" 
                        ref={register({ required: true, minLength: 10 })}
                        aria-describedby="contentHelp"
                    >
                    </textarea> */}
                    {/* <small id="contentHelp" className="form-text text-danger">
                        {errors.content && errors.content.type === "required" && <span>This field is required</span>}
                        {errors.content && errors.content.type === "minLength" && <span>Min Length 10</span>}
                    </small> */}
                </div>
                <button type="submit" className="btn btn-primary my-4 float-right">Add posts</button>
            </form>
        </div>
    )
}

AddProduct.propTypes = {
    onAdd: PropTypes.func
}

export default AddProduct