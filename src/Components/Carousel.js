import React, { useState } from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

let CarouselComponent = props => {
  let [currentSlide, setCurrentSlide] = useState(0)

  const responsive = {
    tablet: {
        breakpoint: { max: 768, min: 575 },
        items: 2,
        partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
      },
      mobile: {
        breakpoint: { max: 575, min: 0 },
        items: 1.2,
        partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
      }
  }

  const CustomArrow = ({ onClick, ...rest }) => {
    const { func, classes, carouselState } = rest
    setCurrentSlide(
      Math.floor(carouselState.slidesToShow + carouselState.currentSlide)
    )
    return (
      <img
        className={`position-absolute carousel-arrow carousel-arrow-${classes}`}
        onClick={() => onClick()}
        src={func === "Left" ? "https://media.graphcms.com/rmQy77PSFOOASGf0a6pg" : "https://media.graphcms.com/45kdX1VASpa0z3qBh0Dl"}
        alt="img"
      />
    )
  }

  return (
    <div className="multicarousel-wrapper">
      <Carousel
        ssr={props.ssr ? true : false}
        infinite={props.infinite ? true : false}
        partialVisbile={props.partialVisbile ? true : false}
        renderArrowsWhenDisabled={true}
        responsive={props.responsive ? props.responsive : responsive}
        swipeable={props.swipeable ? true : false}
        containerClass="multi-carousel"
        customLeftArrow={<CustomArrow func={"Left"} classes={"left"} />}
        customRightArrow={<CustomArrow func={"Right"} classes={"right"} />}
        customTransition={props.customTransition && props.customTransition}
        beforeChange= {props.onChange}
      >
        {props.children}
      </Carousel>
      {props.status && (
        <div className={`Status p14 ${props.statusClassName}`}>
          <p>
            {props.statusText} {currentSlide}/{props.children.length} {props.statusTextRight}
          </p>
        </div>
      )}
    </div>
  )
}

export default CarouselComponent
