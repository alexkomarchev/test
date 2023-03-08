import React, {useEffect, useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "../../components/cards/Cards";

const SimpleSlider = () => {

    const [array,setArray]= useState([])
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products`)
            .then((resp)=>resp.json())
            .then((data)=>{
                setArray(data)
            })
    },[])


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,};

    return (
        <div>
            <h1> Single Item</h1>
            <Slider {...settings}>
                    {array.map(obj =><Cards items={obj}/> )}
            </Slider>
        </div>
    );
};

export default SimpleSlider;