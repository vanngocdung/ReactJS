import React from 'react';
import Header from '../../components/Main/Header'
import Footer from '../../components/Main/Footer'
import Navbar from '../../components/Main/NavBar';
//import CSS
import '../../assets/css/main/sb-admin-2.min.scss'
import '../../assets/css/main/main.scss'
export default ({ children }) => {

    return (
        <div className="main-page">
            <Header />
            <Navbar />
            <div className="content">
                {children}
            </div>
            <Footer />
        </div>
    )
}
