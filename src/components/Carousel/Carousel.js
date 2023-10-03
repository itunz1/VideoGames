import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMostPopular } from "../../redux/actions";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./Carousel.css"
import "./slick.css";
import "./slick-theme.css";

export default function SimpleSlider() {

    const dispatch = useDispatch();
    const popular = useSelector(state => state.mostPopular)

    useEffect(() => {
        dispatch(getMostPopular())
    }, [dispatch]);


    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,     
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };

    return (
        <>
            <h2 className="heading-secondary carousel-title"><strong>Most Popular Games!</strong></h2>
            <Slider {...settings}>
                {popular.results && popular.results.map((img, index) => {
                    return (
                        <div key={index}>
                            <Link to={`/videogame/${img.id}`}>
                            <img className="img-popular" src={img.background_image} alt='not found' />
                            <p className="title">{img.name}</p>
                            </Link>
                        </div>
                    )
                })}
            </Slider>
        </>
    );
}