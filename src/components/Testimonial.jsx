import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestSectionFirstImg from "../assets/image/TestSectionFirst.webp";
import TestSectionThree from "../assets/image/TestSectionThree.webp";
import TestSectionFour from "../assets/image/TestSectionFour.webp";
import TestSectionFive from "../assets/image/TestSectionFive.webp";
import TestSectionSix from "../assets/image/TestSectionSix.webp";
import TestSectionSecond from "../assets/image/TestSectionSecond.webp";
import TestSectionLast from "../assets/image/TestSectionLast.webp";

class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    const sliderSettings1 = {
      asNavFor: this.state.nav2,
      ref: (slider) => (this.slider1 = slider),
      arrows: false,
    };

    const sliderSettings2 = {
      asNavFor: this.state.nav1,
      ref: (slider) => (this.slider2 = slider),
      slidesToShow: 7,
      swipeToSlide: true,
      focusOnSelect: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    };

    return (
      <>
        <div className="container max-w-[1320px] px-3 mx-auto py-[48px] sm:py-[60px] md:py-[85px] lg:py-[109px]">
          <p className="font-Poppins font-normal text-[#BD7D41] text-base sm:text-[18px] md:text-[20px] leading-normal relative ps-[100px] sm:ps-[130px]">
            Customer Says
            <span className="before:h-[1px] before:bg-[#000] before:w-[70px] sm:before:w-[95px] before:left-[1%] before:top-[15px] before:absolute"></span>
          </p>
          <h2 className="font-Poppins font-bold text-[#243040] text-[30px] lg:text-[32px] xl:text-[35px] leading-normal pt-[19px]">
            Testimonial
          </h2>
          <div className="pt-8">
            <Slider {...sliderSettings2}>
              <div className="max-w-[264px]  mx-auto  ">
                <img className="w-full " src={TestSectionFirstImg} alt="test" />
              </div>
              <div className="max-w-[164px]   mx-auto ">
                <img className="w-full " src={TestSectionSecond} alt="test" />
              </div>
              <div className="max-w-[148px]   mx-auto  ">
                <img className="w-full " src={TestSectionThree} alt="test" />
              </div>
              <div className="max-w-[260px]   mx-auto  ">
                <img className="w-full " src={TestSectionFour} alt="test" />
              </div>
              <div className="max-w-[258px]  mx-auto ">
                <img className="w-full " src={TestSectionFive} alt="test" />
              </div>
              <div className="max-w-[193px]  mx-auto  ">
                <img className="w-full " src={TestSectionFive} alt="test" />
              </div>
              <div className="max-w-[181px]  mx-auto  ">
                <img className="w-full " src={TestSectionSix} alt="test" />
              </div>
              <div className="max-w-[181px] mx-auto  ">
                <img className="w-full " src={TestSectionLast} alt="test" />
              </div>
            </Slider>
          </div>
          <Slider {...sliderSettings1}>
            {" "}
            <div className="text-center pt-[23px] ">
              <p className=" font-Poppins font-semibold text-[#000] text-[16px] sm:text-[18px]  leading-normal ">
                Treepi Shoty
              </p>
              <p className=" font-Poppins  font-light text-[#000000b3] text-[12px] sm:text-[14px] leading-normal  pb-3">
                Teacher
              </p>
              <p className=" font-Poppins  font-light text-[#000] text-[12px] sm:text-[14px] leading-normal max-w-[350px] mx-auto text-center ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse feugiat nunc in leo vestibulum, at congue erat
                accumsan. Suspendisse potenti. Suspendisse vitae vestibulum
                sapien.
              </p>
            </div>
            <div className="text-center pt-[23px] ">
              <p className=" font-Poppins font-semibold text-[#000] text-[16px] sm:text-[18px]  leading-normal ">
                Treepi Shoty
              </p>
              <p className=" font-Poppins  font-light text-[#000000b3] text-[12px] sm:text-[14px] leading-normal pb-3 ">
                Teacher
              </p>
              <p className=" font-Poppins  font-light text-[#000] text-[12px] sm:text-[14px] leading-normal max-w-[350px] mx-auto text-center ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse feugiat nunc in leo vestibulum, at congue erat
                accumsan. Suspendisse potenti. Suspendisse vitae vestibulum
                sapien.
              </p>
            </div>
            <div className="text-center pt-[23px] ">
              <p className=" font-Poppins font-semibold text-[#000] text-[16px] sm:text-[18px]  leading-normal ">
                Treepi Shoty
              </p>
              <p className=" font-Poppins  font-light text-[#000000b3] text-[12px] sm:text-[14px] leading-normal pb-3 ">
                Teacher
              </p>
              <p className=" font-Poppins  font-light text-[#000] text-[12px] sm:text-[14px] leading-normal max-w-[350px] mx-auto text-center ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse feugiat nunc in leo vestibulum, at congue erat
                accumsan. Suspendisse potenti. Suspendisse vitae vestibulum
                sapien.
              </p>
            </div>
            <div className="text-center pt-[23px] ">
              <p className=" font-Poppins font-semibold text-[#000] text-[16px] sm:text-[18px]  leading-normal ">
                Treepi Shoty
              </p>
              <p className=" font-Poppins  font-light text-[#000000b3] text-[12px] sm:text-[14px] leading-normal pb-3 ">
                Teacher
              </p>
              <p className=" font-Poppins  font-light text-[#000] text-[12px] sm:text-[14px] leading-normal max-w-[350px] mx-auto text-center ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse feugiat nunc in leo vestibulum, at congue erat
                accumsan. Suspendisse potenti. Suspendisse vitae vestibulum
                sapien.
              </p>
            </div>
            <div className="text-center pt-[23px] ">
              <p className=" font-Poppins font-semibold text-[#000] text-[16px] sm:text-[18px]  leading-normal ">
                Treepi Shoty
              </p>
              <p className=" font-Poppins  font-light text-[#000000b3] text-[12px] sm:text-[14px] leading-normal  pb-3">
                Teacher
              </p>
              <p className=" font-Poppins  font-light text-[#000] text-[12px] sm:text-[14px] leading-normal max-w-[350px] mx-auto text-center ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse feugiat nunc in leo vestibulum, at congue erat
                accumsan. Suspendisse potenti. Suspendisse vitae vestibulum
                sapien.
              </p>
            </div>
            <div className="text-center pt-[23px] ">
              <p className=" font-Poppins font-semibold text-[#000] text-[16px] sm:text-[18px]  leading-normal ">
                Treepi Shoty
              </p>
              <p className=" font-Poppins  font-light text-[#000000b3] text-[12px] sm:text-[14px] leading-normal  pb-3">
                Teacher
              </p>
              <p className=" font-Poppins  font-light text-[#000] text-[12px] sm:text-[14px] leading-normal max-w-[350px] mx-auto text-center ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse feugiat nunc in leo vestibulum, at congue erat
                accumsan. Suspendisse potenti. Suspendisse vitae vestibulum
                sapien.
              </p>
            </div>
            <div className="text-center pt-[23px] ">
              <p className=" font-Poppins font-semibold text-[#000] text-[16px] sm:text-[18px]  leading-normal ">
                Treepi Shoty
              </p>
              <p className=" font-Poppins  font-light text-[#000000b3] text-[12px] sm:text-[14px] leading-normal  pb-3">
                Teacher
              </p>
              <p className=" font-Poppins  font-light text-[#000] text-[12px] sm:text-[14px] leading-normal max-w-[350px] mx-auto text-center ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse feugiat nunc in leo vestibulum, at congue erat
                accumsan. Suspendisse potenti. Suspendisse vitae vestibulum
                sapien.
              </p>
            </div>
          </Slider>
        </div>
      </>
    );
  }
}

export default Testimonial;
