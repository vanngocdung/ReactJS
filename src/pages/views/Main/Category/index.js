import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
// {posts, categories}
const Category = ({id,posts, categories}) => {
    const font = {fontFamily: 'Lobster, cursive'};
    const height = {height: '130px'};
    const backgroundColor = {backgroundColor: 'rgb(250 248 248)', boxShadow: '6px 5px 9px rgb(217 217 217)'};
    
    // var id = props.match.params.id;
    
    const listPosts = posts.filter(x => x.cate_id == id && x.is_active == 1);
    const [lposts, setLposts] = useState(listPosts);

    const notification = () =>{
        if(listPosts.length == 0){
            return " No posts in this category!"
        }
    }
    
    return (
        <div className="container-fluid">
            <div className='container mt-5 pl-0 pr-0'>
                <div className="row">
                    <div className="col-4">
                        {/* Category */}
                        {categories.map(({id, name}, index)=>(
                            <div key={index}>
                                <p style={font}><Link to={`/category/${id}`} className="text-dark">{name}</Link></p>
                                <div className="dropdown-divider" />
                            </div>
                        ))}
                    </div>

                    <div className="col-8 pl-5">
                        {/* List post in Cateid */}
                        <h2 style={font}>{notification()}</h2>
                        {listPosts.map(({id, name, image, is_active, user_id,date, content }, index)=>(
                            <div className="border py-2 px-3 mb-4" style={backgroundColor} key={index}>
                                <div className="row no-gutters py-1">
                                    <div className="col-3">
                                        <div className="w-100 h-100">
                                            <Link to={`/postdetail/${id}`}><img src={image} className="d-block w-100" alt=""/></Link>
                                        </div>
                                    </div>
                                    <div className="col-9 pl-4">
                                        <Link to={`/postdetail/${id}`}><h5 className="font-weight-bold">{name} </h5></Link>
                                        <div className="row">
                                            <div className="col-12 text-truncate">
                                               {content}
                                            </div>
                                        </div>
                                        <div className="text-right text-dark pr-2">
                                            <p><span>Date: {date}</span> <span><i className="textx-dark">({user_id})</i></span> </p> 
                                        </div>
                                        <div className="text-right pb-1">
                                            <Link to={`/postdetail/${id}`} className="text-dark pr-2"><i><u>Xem thêm</u></i> </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>  
            </div>
        </div>
    )
}

Category.propTypes = {

}

export default Category
