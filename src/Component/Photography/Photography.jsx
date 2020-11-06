import React, { useEffect, useState } from 'react';
import Card from './Card';



import './Phototgraphy.css';

const Photography = () => {
    let [photographyImg, setPhotographyImg] = useState([]);
    useEffect(() => {
        fetch('./api/photography', { method: "get" }).then(data => data.json())
            .then((imgs) => {
                setPhotographyImg(imgs);
            })
            .catch((err) => {
                // console.log(err);
            });
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