import React, { Component } from 'react';

class About extends Component {
    constructor() {
        super()
        this.state = {
            img: []
        }
    }
    componentDidMount() {
        fetch("./api/about", { method: "get" })
            .then(data => data.json())
            .then(image => this.setState({ img: image }));
    }
    render() {
        return (
            <div>
                <div className=" col-11 col-md-10 col-lg-8 col-xl-8 mx-auto my-4">
                    <div className="column" style={{ backgroundColor: " #FFF", paddingBottom: "5px", borderRadius: "50px" }}>
                        <div className="p-4">
                            <img style={{ borderRadius: "50px" }} src={this.state.img} class="card-img-top" alt='img' />
                        </div>
                        <div class="card-body">
                            <div>
                                <div className="border" style={{ backgroundColor: "#7ee5e9", borderRadius: "20px" }}>
                                    <div className=" col-8 mx-auto border-bottom p-3">
                                        <h1 style={{ textAlign: "center", backgroundColor: "white", borderRadius: "50px" }}>Meet's Borad</h1>
                                    </div>
                                    <div className=" col-10 mx-auto p-3">
                                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                                <div className="row m-1">
                                    <div className="col-3 border p-2" style={{ borderRadius: "10px", backgroundColor: "#7ee5e9" }}>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a rel="noreferrer" target="_blank" href="https://instagram.com/mb_films_9_?igshid=18zme27si1fsb" class="btn" style={{ color: "#FFF", background: "linear-gradient(200deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)", borderRadius: "10px" }}><i class="fa fa-instagram" aria-hidden="true"></i> Instagram</a>
                                    </div>
                                    <div className="col-3 border p-2" style={{ borderRadius: "10px", backgroundColor: "#7ee5e9" }}>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a rel="noreferrer" target="_blank" href="https://www.youtube.com/channel/UCbRsPqafjvcnsRPOPuSjibQ" class="btn" style={{ color: "#FFF", background: "linear-gradient(200deg, #ff0000, #282828)", borderRadius: "10px" }}><i class="fa fa-youtube-play" aria-hidden="true"></i> Youtube</a>
                                    </div>
                                    <div className="col-3 border p-2" style={{ borderRadius: "10px", backgroundColor: "#7ee5e9" }}>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a rel="noreferrer" target="_blank" href="https://www.facebook.com/meets.borad.5" class="btn" style={{ color: "#FFF", background: "linear-gradient(25deg, #3b5998, #FFFFFF)", borderRadius: "10px" }}><i class="fa fa-facebook-official" aria-hidden="true"></i> FaceBook</a>
                                    </div>
                                    <div className="col-3 border p-2" style={{ borderRadius: "10px", backgroundColor: "#7ee5e9" }}>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a rel="noreferrer" target="_blank" href="#" class="btn" style={{ color: "#FFF", background: "linear-gradient(25deg, #E5FFCC, #1EBEA5, #00E676, #D0E9EA, #EDF8F5, #ffffff)", borderRadius: "10px" }}><i class="fa fa-whatsapp" aria-hidden="true"></i> Whatsapp</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default About;