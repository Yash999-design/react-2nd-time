import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImgSlider.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <ItemText1>
          <h1>A WHOLE NEW WORLD OF CARS</h1>
        </ItemText1>
        <img src="images/img-1.png" alt="" />
      </Wrap>
      <Wrap>
        <ItemText2>
          <h1>FIND YOUR PERFECT RIDE</h1>
          <hr />
          <p>
            <CheckCircleIcon className="CheckCircleIcon" />
            BOOK A TEST DRIVE
          </p>
          <p>
            <CheckCircleIcon className="CheckCircleIcon" />
            WE DELIVER TO YOUR DOORSTEPS
          </p>
          <p>
            <CheckCircleIcon className="CheckCircleIcon" />
            IF YOU LIKE IT BUY IT
          </p>
          <p className="learnMore">
            <PlayCircleOutlineIcon
              className="PlayCircleOutlineIcon"
              fontSize="large"
            />
            LEARN MORE
          </p>
        </ItemText2>
        <img src="images/img-2.png" alt="" />
      </Wrap>
      <Wrap>
        <ItemText3>
          <h1>LET US FINANCE YOUR DREAM CAR</h1>
          <hr />
          <p>
            <CheckCircleIcon className="CheckCircleIcon" />
            ZERO DOWN PAYMENT
          </p>
          <p>
            <CheckCircleIcon className="CheckCircleIcon" />
            MINIMUM DOCUMENTATION
          </p>
          <p>
            <CheckCircleIcon className="CheckCircleIcon" />
            SAME DAY DISBURSAL
          </p>
          <p className="learnMore">
            <PlayCircleOutlineIcon
              className="PlayCircleOutlineIcon"
              fontSize="large"
            />
            LEARN MORE
          </p>
        </ItemText3>
        <img src="images/img-3.png" alt="" />
      </Wrap>
      <Wrap>
        <ItemText4>
          <h1>140 POINTS INSPECTION</h1>
          <hr />
          <p>
            <CheckCircleIcon className="CheckCircleIcon" />
            100% NON-ACCIDENTAL
          </p>
          <p>
            <CheckCircleIcon className="CheckCircleIcon" />
            THOROUGHLY CHECKED
          </p>
          <p>
            <CheckCircleIcon className="CheckCircleIcon" />
            REFURBISHED TO PERFECTION
          </p>
          <p className="learnMore">
            <PlayCircleOutlineIcon
              className="PlayCircleOutlineIcon"
              fontSize="large"
            />
            LEARN MORE
          </p>
        </ItemText4>
        <img src="images/img-4.png" alt="" />
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)``;

const Wrap = styled.div`
  width: 100vh;
  height: 90vh;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  ${
    "" /* background-size: cover;
  background-position: center; */
  }
`;

const ItemText1 = styled.div`
  position: absolute;
  top: 30%;
  right: 30%;
  /* color: darkblue; */
  font-weight: 800;
  background-color: #ff8177;
  background-image: linear-gradient(to right, #aa2828 0%, #0f1cb1 100%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;
const ItemText2 = styled.div`
  width: 25vw;
  position: absolute;
  top: 25%;
  left: 5%;
  text-align: left;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
  }
  p {
    line-height: 2;
    ${"" /* justify-content: center; */}
  }
  hr {
    margin: 25px 0;
    width: 30%;
    height: 5px;
    border: none;
    border-radius: 5px;
    background-image: linear-gradient(to right, #f0e111 50%, #72ac9d 100%);
  }
`;

const ItemText3 = styled.div`
  width: 30vw;
  position: absolute;
  top: 25%;
  left: 5%;
  text-align: left;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
  }
  p {
    line-height: 2;
    ${"" /* justify-content: center; */}
  }
  hr {
    margin: 25px 0;
    width: 30%;
    height: 5px;
    border: none;
    border-radius: 5px;
    background-image: linear-gradient(to right, #f03e11 0%, #603a7a 100%);
  }
`;
const ItemText4 = styled.div`
  width: 25vw;
  position: absolute;
  top: 25%;
  left: 5%;
  text-align: left;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
  }
  p {
    line-height: 2;
    ${"" /* justify-content: center; */}
  }
  hr {
    margin: 25px 0;
    width: 30%;
    height: 5px;
    border: none;
    border-radius: 5px;
    background-image: linear-gradient(to right, #f03e11 0%, #603a7a 100%);
  }
`;
