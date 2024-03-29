import React from "react";
import { Link } from "react-router-dom";
import graphic from '../img/graphic.png';

function Home() {
    return (
        <section className="d-flex align-items-center text-light text-center text-lg-start">
            <div className="container p-1">
                <div className="d-lg-flex align-items-center justify-content-between">
                    <div className="mb-3 mb-md-4 mb-lg-0">
                        <h1 className="display-1 fw-bold" id="lg-heading">Hi,<br />I'm Riley</h1>
                        <p className="lead my-4 fw-bold" id="lg-sub-heading">A web developer.</p>
                        <Link to="/work"><button className="btn btn-green">View My Work</button></Link>
                    </div>
                    <img className="img-fluid w-100 mt-4 mt-lg-0 mx-auto mx-lg-0 px-2" id="home-graphic" src={graphic} alt="Man using computer." />
                </div>
            </div>
        </section>
    );
}

export default Home;