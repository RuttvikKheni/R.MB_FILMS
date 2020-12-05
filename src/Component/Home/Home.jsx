import Axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get('/api/sliderImg')
            .then((data) => {
                console.log(data);
                setData(data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [setData]);

    return (
        <div>
            <div style={{ width: "100%" }} id="carouselExampleCaptions" className="col-11 col-sm-11 col-md-10 col-lg-8 col-xl-8 mx-auto carousel p-5 slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    {
                        data.map((value, key) => {
                            return (
                                <div className={`carousel-item ${key == 0 ? "active" : null}`}>
                                    <img src={Axios.defaults.baseURL + "/public/profile/home/" + value.imgName} className="d-block w-100" alt="Slider Images" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>{value.imgData}</h5>
                                    </div>
                                </div>)
                        })
                    }
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </a>
            </div>
        </div>
    );
}

export default Home;