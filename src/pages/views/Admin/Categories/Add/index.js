import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const AddCategory = ({ onAddCate }) => {
    const font = {fontFamily: 'Lobster, cursive',fontWeight: 'bold'};
    const { register, handleSubmit, errors } = useForm(); // Sử dụng hook form
    let history = useHistory();

    const onHandleSubmitCate = (data) => {
        const newData = {
            ...data
        }
        onAddCate(newData);
        history.push('/admin/categories');
    }
    return (
        <div className="d-flex justify-content-center row">
            <div className="col-12 text-center">
                <h3 style={font}>Add Category</h3>
            </div>
            <form action="" className="w-50" onSubmit={handleSubmit(onHandleSubmitCate)}>
                <div className="form-group">
                    <label htmlFor="cateName">Name category</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="cateName"
                        ref={register({ required: true, minLength: 3, pattern: /^[a-zA-Z]+[a-zA-Z0-9 ]+$/i })}
                        aria-describedby="nameHelp"
                    />
                    <small id="nameHelp" className="form-text text-danger">
                        {errors.name && errors.name.type === "required" && <span>This field is required</span>}
                        {errors.name && errors.name.type === "minLength" && <span>Min Length 3</span>}
                        {errors.name && errors.name.type === "pattern" && <span>Can't not have space in name</span>}
                    </small>
                </div>
                <button type="submit" className="btn btn-primary">Send</button>
            </form>
        </div>
    )
}

AddCategory.propTypes = {
    onAddCate: PropTypes.func
}

export default AddCategory
