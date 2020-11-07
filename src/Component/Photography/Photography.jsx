import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';



import './Phototgraphy.css';

const Photography = () => {
    let [photographyImg, setPhotographyImg] = useState([]);
    useEffect(() => {

        Axios.get('/api/photography')
            .then(data => {
                console.log(data.data);
                setPhotographyImg(data.data);
            })
            .catch((err) => {
                console.log(err);
            });



        // fetch('./api/photography', { method: "get" }).then(data => data.json())
        //     .then((imgs) => {
        //     })
        //     .catch((err) => {
        //         // console.log(err);
        //     });
    }, [setPhotographyImg])

    return (
        <>
            <div className="col-sl-12 col-md-10 col-lg-8 col-xl-8 mx-auto my-3">
                <div className="row mx-auto">
                    {photographyImg.map((val, i) => {
                        return <Card key={i} catagory={val.type} text={val.discription} imgs={val.imgs} />;
                    })}
                </div>
            </div>
        </>
    );
}

export default Photography;