import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
 
import React, { Component } from 'react'
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 6 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
export default class listfavoris extends Component {
    render() {
        console.log(this.props.films)
        return (
            <div>
   <h2>List favourite films</h2>
<Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
 
{
    
this.props.films.map(el => <div className="logo_movies"><h6>{el.nom.toUpperCase()}</h6><img className="imgCar" src={el.img}/></div>)}
</Carousel>
            </div>
        )
    }
}
