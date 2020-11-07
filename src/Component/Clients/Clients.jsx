import React, { useEffect, useState } from 'react';
import $ from 'jquery'
import { Link } from 'react-router-dom';

const Clients = () => {

    let [Clients, setClients] = useState([]);


    useEffect(() => {

        $.ajax({
            method: "get",
            url: '/api/clients',
            dataType: "JSON",
            success: function (data) {
                console.log(data);
                setClients(data);
            },
            error: function (error) {
                console.log(error);
            }
        });
    }, [setClients])




    return (
        <>
            <div className="col-sl-12 col-md-10 col-lg-8 col-xl-8 mx-auto my-3">
                <div className="col-6 mx-auto p-2 m-2" style={{ textAlign: "center", borderRadius: "100px", background: "#fff" }}>
                    <h1 className="m-auto">{"Our Client's"}</h1>
                </div>
                <div className="row">
                    {
                        Clients.map((Client, i) => {
                            return (
                                <div className="col-4 p-3" style={{ swidth: "18rem" }}>
                                    <div id={Client.clientName} className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner">
                                            {
                                                Client.imgs.map((val, i) => (
                                                    <div key={i} className={`carousel-item ${i === 0 && 'active'}`}>
                                                        <img style={{ width: "100%" }} src={val} className="d-block w-100" alt="Slider Images" />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <a className="carousel-control-prev" href={"#" + Client.clientName} role="button" data-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        </a>
                                        <a className="carousel-control-next" href={"#" + Client.clientName} role="button" data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        </a>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{Client.clientName}</h5>
                                        <p className="card-text">{Client.discription}.</p>
                                        <Link to={"/Clients/" + Client.clientName} className="btn btn-primary">See More</Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div >
            </div >
        </>
    );
}

export default Clients;