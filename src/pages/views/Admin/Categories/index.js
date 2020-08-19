import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Categories = ({ categories, onRemoveCate, posts }) => {
    const removeHandleCate = (id) => {
        //console.log(id)
        onRemoveCate(id)
    }
    localStorage.setItem('categories', JSON.stringify(categories))
    
    var count;
    const countPost = (id) => {
        count = (posts.filter(x => x.cate_id == id)).length;
        return count;
    }
    return (
        <div>
            <div className="row">
                <div className="col-12 d-flex justify-content-end mb-3">
                    <Link to='/admin/categories/add' className="btn bg-success text-white"><i className="fas fa-plus pr-2"></i> Add</Link>
                </div>
            </div>
            <div className="row card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">List Categories</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <section>
                            <table className="table table-striped table-bordered nowrap text-center" style={{width: '100%'}}>
                                <thead>
                                    <tr>
                                        <th>Serial</th>
                                        <th>Category-name</th>
                                        <th>Post in cate</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories.map(({ id, name }, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index+1}</th>
                                            <td>{name}</td>
                                            <td>{countPost(id)}</td>
                                            <td className="d-flex justify-content-center">
                                                <Link to={`/admin/categories/${id}`} className="btn btn-primary mr-3"><i className="fas fa-edit"></i></Link>
                                                <button className="btn btn-danger" onClick={() => {if(window.confirm('Delete the item?')){removeHandleCate(id)};}}><i className="fas fa-trash"></i></button>                                              
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            
                        </section>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

Categories.propTypes = {
    categories: PropTypes.array,
    onRemoveCate: PropTypes.func
}

export default Categories
