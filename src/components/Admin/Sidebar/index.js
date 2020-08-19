import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Sidebar = props => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/admin">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink" />
                </div>
                <div className="sidebar-brand-text mx-3">Blogger Admin <sup>2</sup></div>
            </Link>
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item">
                <Link className="nav-link" to="/admin">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Dashboard</span></Link>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider" />
            {/* Heading */}
            <div className="sidebar-heading">
                Manager
    </div>
            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <i className="fas fa-fw fa-cog" />
                    <span>Categories</span>
                </a>
                <div id="collapseOne" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Manager Categories:</h6>
                        <Link to='/admin/categories' className="collapse-item">List categories</Link>
                        <Link to='/admin/categories/add' className="collapse-item">Add category</Link>
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog" />
                    <span>Posts</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Manager Post:</h6>
                        <Link to='/admin/posts' className="collapse-item">List Posts</Link>
                        <Link to='/admin/posts/add' className="collapse-item">Add Post</Link>
                    </div>
                </div>
            </li>

            <li className="nav-item">
                <Link className="nav-link collapsed" to="/admin/users">
                    <i className="fas fa-fw fa-cog" />
                    <span>User</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link collapsed" to="/admin/comments">
                    <i className="fas fa-fw fa-cog" />
                    <span>Comments</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link collapsed" to="/admin/contacts">
                    <i className="fas fa-fw fa-cog" />
                    <span>Contacts</span>
                </Link>
            </li>
            <hr className="sidebar-divider" />
            {/* Sidebar Toggler (Sidebar) */}
            <div className="text-center d-none d-md-inline">
                <Link to="/">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </Link>
            </div>
        </ul>
    )
}

Sidebar.propTypes = {

}

export default Sidebar
