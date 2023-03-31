import React, { Component } from "react";
import Slider from "react-slick";
import "./carousel.scss"
import { TiFlashOutline,TiArrowUp } from "react-icons/ti";
export default class Carousel extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3200,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1424,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            // infinite: true,
          }
        },
        {
            breakpoint: 1280,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,

          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div >
       <div className="mb-5"><h3 className="font-bold md:text-xl mb-1">Works</h3><h1 className="md:text-[4rem] text-[2rem] font-bold leading-none">DotSoft - <span className="text-[#006B98]">things done.</span> <br className="md:block hidden" /></h1></div>

        <Slider {...settings}>
          <div className="swiper-slide">
            <div className="card card_bg_1">
              <div className="bg_content">
                <button className="dev_top">development</button>
                <div className="information">
                <div className="content">
             
                <div className="flex gap-x-3 items-center ">  <TiFlashOutline size={50} color='yellow'   />

<h3>Jizzah city</h3></div>
                  <a href="#" className="strelke" > <TiArrowUp  size={45}  /> </a>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="card card_bg_2">
            <div className="bg_content">
                <button className="dev_top">development</button>
                <div className="information">
                <div className="content">
             
                <div className="flex gap-x-3 items-center ">  <TiFlashOutline size={50} color='yellow'   />

<h3>Jizzah city</h3></div>
                  <a href="#" className="strelke" > <TiArrowUp  size={45}  /> </a>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="card card_bg_3">
            <div className="bg_content">
                <button className="dev_top">development</button>
                <div className="information">
                <div className="content">
             
                <div className="flex gap-x-3 items-center ">  <TiFlashOutline size={50} color='yellow'   />

<h3>Jizzah city</h3></div>
                  <a href="#" className="strelke" > <TiArrowUp  size={45}  /> </a>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="card card_bg_4">
            <div className="bg_content">
                <button className="dev_top">development</button>
                <div className="information">
                <div className="content">
             
                <div className="flex gap-x-3 items-center ">  <TiFlashOutline size={50} color='yellow'   />

<h3>Jizzah city</h3></div>
                  <a href="#" className="strelke" > <TiArrowUp  size={45}  /> </a>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="card card_bg_5">
            <div className="bg_content">
                <button className="dev_top">development</button>
                <div className="information">
                <div className="content">
             
                <div className="flex gap-x-3 items-center ">  <TiFlashOutline size={50} color='yellow'   />

<h3>Jizzah city</h3></div>
                  <a href="#" className="strelke" > <TiArrowUp  size={45}  /> </a>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="card card_bg_6">
            <div className="bg_content">
                <button className="dev_top">development</button>
                <div className="information">
                <div className="content">
             
                <div className="flex gap-x-3 items-center ">  <TiFlashOutline size={50} color='yellow'   />

<h3>Jizzah city</h3></div>
                  <a href="#" className="strelke" > <TiArrowUp  size={45}  /> </a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}