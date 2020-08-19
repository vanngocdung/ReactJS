import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Error404 = props => {
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        <span className="display-1 d-block">404</span>
                        <div className="mb-4 lead">The page you are looking for was not found.</div>
                        <Link to="/" className="btn btn-link">Back to Home</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

Error404.propTypes = {

}

export default Error404
