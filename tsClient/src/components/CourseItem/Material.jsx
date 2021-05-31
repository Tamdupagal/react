import React, {useRef} from 'react'
import Slider from "react-slick";
import Box from '../Box/Box'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Material.scss'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'

function Material() {
    const sliderRef = useRef(null)
     const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         dotsClass: "carousel__dot"
    };
    return (
        <Box cls="content__container">
            <h1 className="content__topic">Topic #1 : Basic Information</h1>
            <Slider {...settings} ref={sliderRef}>
                <Box cls="item__box__1 item">
                    <p>IF College student :how would you manage time (between college and work)</p>
                    <textarea/>
                </Box>
                <Box cls="item__box__2 item">
                    <p>Teacher (Separate room with proper lights ,presentable clothes (formals,suit,Indian),no surrounding noise in the background,stable background ) </p>
                    <div class="mcq">
                        <input type="radio" name="option"/>
                        <span>Yes</span>
                    </div>
                    <div class="mcq">
                        <input type="radio" name="option"/>
                        <span>No</span>
                    </div>
                </Box>
                <Box cls="item__box__3 item">
                    <p>A question</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit harum assumenda facilis! Numquam odit perferendis unde possimus ut? Nisi id debitis, consequatur sunt quas soluta alias unde esse numquam similique!</p>
                </Box>
            </Slider>
            <button className="btn right" onClick={()=> sliderRef.current.slickNext()}><FaChevronRight/></button>
            <button className="btn left" onClick={()=> sliderRef.current.slickPrev()}><FaChevronLeft/></button>
        </Box>
    )
}

export default Material
