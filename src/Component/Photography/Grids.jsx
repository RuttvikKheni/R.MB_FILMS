import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function Grids(props) {
    let [img, setImg] = useState({
        imgs: []
    });


    useEffect(() => {

        Axios.get(`/api/photography/${props.match.params.type}`)
            .then((data) => {
                console.log(data);
                setImg(data.data);
            })
            .catch((err) => {
                console.log(err);
            });

    }, [setImg]);


    return (
        <div>
            <div className="col-sm-12 col-md-10 col-lg-10 col-xl-10 mx-auto">
                <div className="my-3" style={{ textAlign: "center" }}>
                    <div className="col-6 mx-auto p-2 m-2" style={{ borderRadius: "100px", background: "#fff" }}>
                        <h1>{img.type}</h1>
                    </div>
                    <div className="my-3">
                        <p>{img.discription}</p>
                    </div>
                </div>
                <div className="row">
                    {
                        img.imgs.map((val, i) => {
                            return (
                                <div className="col-4 p-2 my-auto" style={{ borderRadius: "10px" }}>
                                    <img style={{ borderRadius: "5px" }} className="img my-auto m-auto w-100" src={Axios.defaults.baseURL + val} alt="Wedding Img" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    );
}

export default Grids;