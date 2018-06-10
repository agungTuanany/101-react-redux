import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slideToshow: 1,
    slideToscroll: 1
};

const showGallery = ({ latestGallery }) => {
    if (latestGallery) {
        return (
            <Slider {...settings}>
                {latestGallery.map(item => {
                    return (
                        <Link
                            key={item.id}
                            className="slider-item"
                            to={`/galleries/${item.id}`}>
                            <div>
                                <img
                                    className="image"
                                    alt={item.images[0].img}
                                    src={`/images/galleries/${
                                        item.images[0].img
                                    }`}
                                />
                                <h3>{item.artist}</h3>
                            </div>
                        </Link>
                    );
                })}
            </Slider>
        );
    }
};

const Gallery = props => {
    console.log(props);
    return (
        <div className="home-gallery">
            <h2>Awesome Galleries</h2>
            {showGallery(props)}
        </div>
    );
};

export default Gallery;
