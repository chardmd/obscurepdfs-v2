import React from "react";
import Slider from "react-slick";
import isNil from "lodash/isNil";
import { Link } from "gatsby";
import Img from "gatsby-image";

// react-bootstrap
import { Row, Col } from "react-bootstrap";

import useFeaturedArtists from "../../hooks/use-featured-artists";

// styles
import styles from "./Carousel.module.scss";

// carousel settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
  ],
  nextArrow: <PrevArrow />,
  prevArrow: <NextArrow />,
};

function PrevArrow({ className, style, onClick }) {
  return (
    <div
      className={`${className} ${styles.slickPrev}`}
      onClick={onClick}
      style={{ ...style }}
    />
  );
}

function NextArrow({ className, style, onClick }) {
  return (
    <div
      className={`${className} ${styles.slickNext}`}
      onClick={onClick}
      style={{ ...style }}
    />
  );
}

const Carousel = () => {
  const featuredArtists = useFeaturedArtists();
  return (
    <Row className="ml-0 mr-0 mb-2">
      <Col lg={12}>
        <Slider {...settings}>
          {featuredArtists.map((item, index) => {
            const {
              smallImage,
              authorName,
              birthdate,
              fields,
              collection = [],
            } = item;
            const { small } = smallImage.childImageSharp;
            const totalCount = isNil(collection) ? 0 : collection.length;
            return (
              <div key={index}>
                <div className={styles.imageWrapper}>
                  <Img fluid={{ ...small }} className="rounded-circle mb-2" />
                </div>
                <div className="text-muted text-center p-0 mb-1">
                  <Link to={fields.artistSlug} className={styles.artistLink}>
                    See {totalCount} Items
                  </Link>
                </div>
                <p className="card-text text-center p-0 m-0">
                  {authorName} {birthdate}
                </p>
              </div>
            );
          })}
        </Slider>
      </Col>
    </Row>
  );
};

export default Carousel;
