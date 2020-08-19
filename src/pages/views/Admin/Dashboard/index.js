import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Dashboard = ({posts, categories, users, comments}) => {
    console.log(posts)
    console.log(posts.length)
    return (
        <div>
            <div className="row">
                <div className="col-lg-3 col-6">
                    <div className="small-box bg-info p-3">
                        <div className="text-white">
                            <h1 className="font-weight-bold">{categories.length} </h1>

                            <p>Categories</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-bag"></i>
                        </div>
                        <Link to="/admin/categories" className="small-box-footer text-white">More info <i className="fas fa-arrow-circle-right"></i></Link>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="small-box bg-warning p-3">
                        <div className="text-white">
                            <h1 className="font-weight-bold">{posts.length}</h1>

                            <p>Posts</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-bag"></i>
                        </div>
                        <Link to="/admin/posts" className="small-box-footer text-white">More info <i className="fas fa-arrow-circle-right"></i></Link>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="small-box bg-success p-3">
                        <div className="text-white">
                            <h1 className="font-weight-bold">0</h1>

                            <p>Contact</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-bag"></i>
                        </div>
                        <Link to="/admin/categories" className="small-box-footer text-white">More info <i className="fas fa-arrow-circle-right"></i></Link>
                    </div>
                </div>
                <div className="col-lg-3 col-6">
                    <div className="small-box bg-secondary p-3">
                        <div className="text-white">
                            <h1 className="font-weight-bold">{users.length}</h1>

                            <p>Users</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-bag"></i>
                        </div>
                        <Link to="/admin/categories" className="small-box-footer text-white">More info <i className="fas fa-arrow-circle-right"></i></Link>
                    </div>
                </div>

                <div className="col-lg-3 col-6 mt-3">
                    <div className="small-box bg-primary p-3">
                        <div className="text-white">
                            <h1 className="font-weight-bold">{comments.length}</h1>

                            <p>Comments</p>
                        </div>
                        <div className="icon">
                            <i className="ion ion-bag"></i>
                        </div>
                        <Link to="/admin/categories" className="small-box-footer text-white">More info <i className="fas fa-arrow-circle-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

Dashboard.propTypes = {

}

export default Dashboard
