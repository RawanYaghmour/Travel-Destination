import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './TourDetails.css';
const data = require('../../data/db.json');

function TourDetails() {
    const { id } = useParams();
    const result = data.find(item => item.id === id);

    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <section className="dark">
            <div className="container py-4">
                <article className="postcard">
                    <a className="postcard__img_link" href="#">
                        <img className="postcard__img" src={result.image} alt="Title" />
                    </a>
                    <div className="postcard__text">
                        <h1 className="postcard__title">{result.name}</h1>
                        <div className="postcard__bar"></div>
                        <div className="postcard__preview-txt"> {showFullDescription ? result.info : result.info.slice(0, 400) + ' ...'} </div>
                        <ul className="postcard__tagbox">
                            <li className="tag__item"><i className="fas fa-tag"></i> Price: {result.price}</li>
                            <li className="tag__item play">
                                <a href="#" onClick={toggleDescription}><i className="fas fa-play"></i> {showFullDescription ? 'See Less' : 'See More'}</a>
                            </li>
                        </ul>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default TourDetails;
