import Axios from 'axios';
import React, { useEffect, useState } from 'react';

function Client(props) {

    let [client, setClient] = useState({ imgs: [] });

    useEffect(() => {
        Axios.get(`/api/clients/${props.match.params.client}`)
            .then(function (data) {
                setClient(data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [setClient])

    return (
        <div>
            <div className="col-sm-12 col-md-10 col-lg-10 col-xl-10 mx-auto">
                <div className="my-3" style={{ textAlign: "center" }}>
                    <div className="col-6 mx-auto p-2 m-2" style={{ borderRadius: "100px", background: "#fff" }}>
                        <h1>{client.clientName}</h1>
                    </div>
                    <div className="my-3">
                        <p>{client.discription}</p>
                    </div>
                </div>
                <div className="row">
                    {
                        client.imgs.map((val, i) => {
                            return (
                                < div className="col-4 p-2 my-auto" style={{ borderRadius: "10px" }}>
                                    <img style={{ borderRadius: "5px" }} className="img my-auto m-auto w-100" src={val} alt="Clients Images" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    );
}

export default Client;