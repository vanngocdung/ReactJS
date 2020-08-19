import React from 'react';
//import CSS
import '../../assets/css/main/sb-admin-2.min.scss';

export default ({ children }) => {
    return (
        <div className="container-fluid">
            <div className="main-page">
                {children}
            </div>
        </div>
    )
}
