import React from 'react'
import PropTypes from 'prop-types'

const Contact = props => {
    const font = {fontFamily: 'Lobster, cursive', color: '#11aa59'};
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-2">
                        <h3 style={font} className="pt-3 text-left">Contact Us</h3>
                    </div>
                    <div className="col-12 col-md-8 col-lg-6 mx-auto">
                        <form className="text-center border border-light" action="#" method="POST">
                            {/* Name */}
                            <input type="text" className="form-control mb-2" placeholder="Name" />
                            {/* Email */}
                            <input type="email" className="form-control mb-2" placeholder="E-mail" />
                            {/* Phone */}
                            <input type="number" className="form-control mb-2" placeholder="Phone" />
                            {/* content */}
                            <textarea name="content" className="form-control mb-2" cols={30} rows={7} placeholder="Massage" defaultValue={""} />
                            {/* Sign in button */}
                            <div className="col-12 text-right">
                            <button className="btn btn-success mt-2 mb-3 rounded-pill" type="submit">Send now <strong>&gt;</strong></button>
                            </div> 
                        </form>
                        {/* Default form subscription */}
                    </div>
                    <div className="col-12 col-md-12 col-lg-6 col-xl-6 mb-3">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251637.99536092742!2d105.61890391248471!3d9.779291669018683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x261139ff7bd20db4!2zUXXDoW4gY8OgIHBow6ogVGhpw6puIMOCbg!5e0!3m2!1svi!2s!4v1580287410795!5m2!1svi!2s" className="w-100 h-100" frameBorder={0} style={{border: 0}} allowFullScreen className="embed-responsive-i" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Contact.propTypes = {

}

export default Contact
