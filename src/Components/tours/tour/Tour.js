import React from 'react';
import './Tour.css';
import { Link } from 'react-router-dom';


function Tour(props) {
    return (
        <Link to={`/city/${props.id}`}>
            <section className="dark">
                <div className="container py-4">
                    <article className="postcard">
                        <a className="postcard__img_link" href="#">
                            <img className="postcard__img" src={props.image} alt="Title" />
                        </a>
                        <div className="postcard__text">
                            <h1 className="postcard__title">{props.name}</h1>
                        </div>
                    </article>
                </div>
            </section>
        </Link>
    )
}

export default Tour