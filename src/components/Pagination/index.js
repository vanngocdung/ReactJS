import React from 'react'
import PropTypes from 'prop-types'

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];
    
    for(let i = 1; i<= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <button onClick={()=> paginate(number)} className="page-link">
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

Pagination.propTypes = {

}

export default Pagination
