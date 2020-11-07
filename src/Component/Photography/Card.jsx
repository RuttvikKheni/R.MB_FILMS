import Axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ catagory, text, imgs }) => {
    return (
        <>
            <div className="col-sl-6 col-md-6 col-lg-6 col-xl-6 mx-auto mt-4">
                <div className="card">
                    <div id={catagory} className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            {
                                imgs.map((val, i) => (
                                    <div key={i} className={`carousel-item ${i === 0 && 'active'}`}>
                                        <img style={{ width: "100%" }} src={Axios.defaults.baseURL + val} className="d-block w-100" alt="Slider Images" />
                                    </div>
                                ))
                            }
                        </div>
                        <a className="carousel-control-prev" href={"#" + catagory} role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        </a>
                        <a className="carousel-control-next" href={"#" + catagory} role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        </a>
                    </div>
                    {/* <img className="card-img-top" src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" alt="Card image cap" /> */}
                    <div className="card-body">
                        <div className="m-auto p-1 col-8" style={{ textAlign: "center", backgroundColor: "#7ee5e9", borderRadius: "50px" }}>
                            <h3>{catagory}</h3>
                        </div>
                        {/* <h5 className="card-title">{catagory}</h5> */}
                        <div className="m-2">
                            <p className="card-text">{text}</p>
                        </div>
                        <Link to={`photography/${catagory}`} className="btn" style={{ backgroundColor: "#7ee5e9" }} >See More</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;