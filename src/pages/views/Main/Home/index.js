import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Pagination from '../../../../components/Pagination';

const Home = ({posts, cate_name,users, loading, postsPerPage,totalPosts,paginate,}) => {
    const font = {fontFamily: 'Lobster, cursive',fontWeight: 'bold'};
    const height = {height: '150px'};
    const backgroundColor = {backgroundColor: 'rgb(250 248 248)', boxShadow: '6px 5px 9px rgb(217 217 217)'};
    
    const showFullName = (user_id) => {
        var fullname;
        for(let j = 0; j < users.length; j++){
            if(users[j].id == user_id){
                fullname = users[j].fullname;
                return fullname;
            }
        }
    }

    const listPosts = posts.filter(x => x.is_active == 1);
    //.filter(x => x.is_active === 1)

    //SEARCH
    const [search, setSearch] = useState("");
    // const [filteredPosts, setFilteredPosts] = useState([]);

    // useEffect(() => {
    //     setFilteredPosts(
    //         listPosts.filter(post =>
    //         post.name.toLowerCase().includes(search.toLowerCase())
    //       )
    //     );
    //   }, [search, listPosts]);

    const filteredPosts = listPosts.filter(post =>
        post.name.toLowerCase().includes(search.toLowerCase())
    )
    const text = (x) => {
        return <p dangerouslySetInnerHTML={{ __html: x }}></p>
    }
    return (
        <div className='container-fluid'>
            {/* Banner */}
            <div className="container pl-0 pr-0">
                <img className="d-block w-100" src="https://tintucdothi.com/wp-content/uploads/2019/04/banner.png" alt="First slide" />
            </div>
            {/* List post */}
            <div className='container'>

                <div className="row mt-5">
                    <div className="col-12">
                        <h2 className="" style={font}>All Posts</h2>
                    </div>
                </div>

                <div className="row mb-4 d-flex justify-content-end">
                    <div className="col-4">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={e => setSearch(e.target.value)} />
                    </div>
                </div>

                <div className="row mb-3">
                        {filteredPosts.map(({name,id, cate_id, content, date,user_id, image},index) => (
                            <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 text-center text-dark mb-5" key={index}>
                                <div className="border" style={backgroundColor}>
                                    <div className="mt-3 mx-3 mb-2" style={height}>
                                    <Link to={`/postdetail/${id}`}> <img className="img-fluid h-100 w-100" src={image} /></Link>
                                    </div>
                                    <h5 className="font-weight-bold text-truncate px-3"><Link to={`/postdetail/${id}`}>{name}</Link> </h5>
                                    <div className="row px-3">
                                        <p className="col-12 text-truncate" style={{height:'25px'}}>
                                            
                                                {text(content)}
                                            
                                        </p>
                                    </div>
                                    <div className="text-right text-dark pr-2 mt-2">
                                        <p><span>Date: {date}</span><br/> <span>User: {showFullName(user_id)}</span> </p> 
                                    </div>
                                    <div className="text-right pb-2">
                                    <Link to={`/postdetail/${id}`} className="text-dark pr-2"><i><b>Xem thêm</b></i> </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                <div className="row d-flex justify-content-end pr-5">
                    <Pagination postsPerPage ={postsPerPage} totalPosts={totalPosts} paginate={paginate}></Pagination>
                </div>
            </div>
        </div>
    )
}

Home.propTypes = {

}

export default Home
