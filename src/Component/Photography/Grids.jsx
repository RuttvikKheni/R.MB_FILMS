import React, { useEffect, useState } from 'react';

let i = 0;
function Grids(props) {
    let [img, setImg] = useState({});


    useEffect(() => {
        fetch(`/api/photography/${props.match.params.type}`, { method: "get" }).then(data => data.json())
            .then((imgs) => {
                setImg(imgs);
                console.log(img);
            })
            .catch((err) => {
                console.log(err);
            });
    });


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
                    <div className="col-4 p-2 my-auto" style={{ borderRadius: "10px" }}>
                        <img style={{ borderRadius: "5px" }} className="img my-auto m-auto w-100" src={"https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"} alt="Wedding Img" />
                    </div>
                    <div className="col-4 p-2 my-auto" style={{ borderRadius: "10px" }}>
                        <img style={{ borderRadius: "5px" }} className="img my-auto m-auto w-100" src={"https://blog.matcharesident.com/wp-content/uploads/2019/07/iStock-944453634.jpg"} alt="Wedding Img" />
                    </div>
                    <div className="col-4 p-2 my-auto" style={{ borderRadius: "10px" }}>
                        <img style={{ borderRadius: "5px" }} className="img my-auto m-auto w-100" src={"https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"} alt="Wedding Img" />
                    </div>
                    <div className="col-4 p-2 my-auto" style={{ borderRadius: "10px" }}>
                        <img style={{ borderRadius: "5px" }} className="img my-auto m-auto w-100" src={"https://4.bp.blogspot.com/-OuIrYzKE1lM/WJ1nqskJ5pI/AAAAAAAAOww/v9JfD7Hb_Fwe_K1svBN7gz2A_BUKxbqGwCLcB/s400/mindblowing-awasome-wallpapers-imgs.jpg"} alt="Wedding Img" />
                    </div>
                    <div className="col-4 p-2 my-auto" style={{ borderRadius: "10px" }}>
                        <img style={{ borderRadius: "5px" }} className="img my-auto m-auto w-100" src={"https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"} alt="Wedding Img" />
                    </div>
                    <div className="col-4 p-2 my-auto" style={{ borderRadius: "10px" }}>
                        <img style={{ borderRadius: "5px" }} className="img my-auto m-auto w-100" src={"https://cdn.sisense.com/wp-content/uploads/imgs-logo1000px-1.gif"} alt="Wedding Img" />
                    </div>
                    <div className="col-4 p-2 my-auto" style={{ borderRadius: "10px" }}>
                        <img style={{ borderRadius: "5px" }} className="img my-auto m-auto w-100" src={"https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"} alt="Wedding Img" />
                    </div>
                    <div className="col-4 p-2 my-auto" style={{ borderRadius: "10px" }}>
                        <img style={{ borderRadius: "5px" }} className="img my-auto m-auto w-100" src={"https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"} alt="Wedding Img" />
                    </div>
                    <div className="col-4 p-2 my-auto" style={{ borderRadius: "10px" }}>
                        <img style={{ borderRadius: "5px" }} className="img my-auto m-auto w-100" src={"https://4.bp.blogspot.com/-OuIrYzKE1lM/WJ1nqskJ5pI/AAAAAAAAOww/v9JfD7Hb_Fwe_K1svBN7gz2A_BUKxbqGwCLcB/s400/mindblowing-awasome-wallpapers-imgs.jpg"} alt="Wedding Img" />
                    </div>
                    <div className="col-4 p-2 my-auto" style={{ borderRadius: "10px" }}>
                        <img style={{ borderRadius: "5px" }} className="img my-auto m-auto w-100" src={"https://blog.matcharesident.com/wp-content/uploads/2019/07/iStock-944453634.jpg"} alt="Wedding Img" />
                    </div>
                    <div className="col-4 p-2 my-auto" style={{ borderRadius: "10px" }}>
                        <img style={{ borderRadius: "5px" }} className="img my-auto m-auto w-100" src={"https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"} alt="Wedding Img" />
                    </div>
                    <div className="col-4 p-2 my-auto" style={{ borderRadius: "10px" }}>
                        <img style={{ borderRadius: "5px" }} className="img my-auto m-auto w-100" src={"https://cdn.sisense.com/wp-content/uploads/imgs-logo1000px-1.gif"} alt="Wedding Img" />
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Grids;