import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => {
    const size = {fontSize: '26px',fontFamily: 'Rock Salt , cursive' };
    const backgroundColor = {backgroundColor: '#ededeb'};
    return (
        <div className="container-fluid" style={backgroundColor}>
            <div className="container mt-5">
            <section>
                <div className="row py-3">
                    <div className="col-lg-3 col-md-12 col-xl-3 col-sm-12">
                        <p className="text-danger font-weight-bold pt-1" style={size}>FROM UP NORTH</p>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-9 col-xl-9">
                        <div className="col-12 mt-2 pt-1 px-0 text-dark">
                            <h5 className>INFORMATION</h5>
                            <p>Dich Vong, Cau Giay, TP.Ha Noi</p>
                        </div>
                        <div className="row pt-2">
                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 text-dark">
                                <div>
                                    <p>Copyright © 1997-2018 Dulichvietnam.com.vn</p>
                                    <p>Giấy phép số 1773 / GP - TTĐT.</p>
                                    <p>Chịu trách nhiệm nội dung: Ông Lê Đại Nam</p>
                                </div>
                            </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 text-dark">
                            <p>Hà Nội: Hồng Hà, Ba Đình - (024) 37633222</p>
                            <p>Đà Nẵng: Bạch Đằng, quận Hải Châu - (0236) 6271919</p>
                            <p>Hồ Chí Minh: Phan Kế Bính, quận 1 - (028) 62955333</p>
                            <p>Email: info@dulichvietnam.com.vn - 0903 222 225</p>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            </div>
        </div>
    )
}

Footer.propTypes = {

}

export default Footer
