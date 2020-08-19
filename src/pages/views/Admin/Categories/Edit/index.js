import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const EditCategory = ({ categories, onUpdateCategory }) => {
    //Font
    const font = {fontFamily: 'Lobster, cursive',fontWeight: 'bold'};
    let { id } = useParams();
    let history = useHistory();
    // Sử dụng hook form
    const { register, handleSubmit, errors } = useForm(); 
    const category = categories.find(category => category.id === id);

    const [currentCategory, setcurrentCategory] = useState(category);
    const onHandleSubmit = (e) => {
        //e.preventDefault();
        onUpdateCategory(currentCategory);
        history.push('/admin/categories');
    }
    const onHandleChange = e => {
        const { name, value } = e.target;
        setcurrentCategory({
            ...currentCategory,
            [name]: value
        })
    }
    return (
        <div className="d-flex justify-content-center row">
            <div className="col-12 text-center">
                <h3 style={font}>Edit Category</h3>
            </div>
            <form action="" className="w-50"  onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-group">
                    <label htmlFor="productName">Cate-name</label>
                    <input 
                        type="text" 
                        name="name" 
                        ref={register({ required: true, minLength: 3 })}
                        aria-describedby="nameHelp"
                        value={currentCategory.name} 
                        onChange={onHandleChange} 
                        className="form-control" />
                    <small id="nameHelp" className="form-text text-danger">
                        {errors.name && errors.name.type === "required" && <span>This field is required</span>}
                        {errors.name && errors.name.type === "minLength" && <span>Min Length 3</span>}
                    </small>
                </div>
                <button type="submit" className="btn btn-info float-right">Update</button>
            </form>
        </div>
    )
}

EditCategory.propTypes = {
    categories: PropTypes.array
}

export default EditCategory
