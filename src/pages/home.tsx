import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import leftButton from "../images/left-button.png";
import rightButton from "../images/right-button.png";
import speaker from "../images/speaker.png";
import mood from "../images/mood.png";
import game from "../images/game.png";
import balancing from "../images/balancing.png";
import walking from "../images/walking.png";
import car from "../images/car.png";
import tracer from "../images/tracer.png";

import child1 from "../images/main6-1.png";
import child2 from "../images/main6-2.png";
import child3 from "../images/main6-3.png";
import child4 from "../images/main6-4.png";
import child5 from "../images/main6-5.png";
import child6 from "../images/main6-6.png";
import child7 from "../images/main6-7.png";
import child8 from "../images/main6-8.png";
import child9 from "../images/main6-9.png";

import doroLogoGray from "../images/doroLogoGray.png";
import process from "../images/process.png";
import main8Logo from "../images/main8Logo.png";
import doromap from "../images/doromap.png";

import ansan from "../images/ansan.png";
import doroeducation from "../images/doroeducation.png";
import { Helmet } from "react-helmet-async";
import { useScrollFadeIn } from "../hooks/useScrollFadeIn";
import { useScrollCount } from "../hooks/useScrollCountup";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import styled from "styled-components"
import MainEduContent from "../components/mainEduContent"
import MainEduType from "../components/mainEduType"
import DoroInstructor from "../components/DoroInstructor"
import ModalMap from "../components/ModalMap";


// const Hoverdiv = styled.div`

//   position : relative;

//   /* div{ */
//     display: none;
//     width: 248.891px;
//     height: 374.219px;
//   }
//   &:hover{
//     div{
//       position: absolute;
//       bottom: 0;
//       display : block;
//       background-color: #000000;
//     }
//   }
// `
const DialogButton = styled.button`
  height: 3.222rem;
  flex-grow: 0;
  cursor: pointer;
  font-family: Pretendard;
  font-size: 2.667rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: normal;
  text-align: center;

  &:hover {
    width: 10.833rem;
    height: 3.222rem;
    font-size: 2.767rem;
    align-items:center;
  }
`;

export const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const horizontalScrollRef = useRef<HTMLInputElement>(null);
  const main6ScrollRef = useRef<HTMLInputElement>(null);

  let main3_current_translate = 0;
  let main6_current_translate = 0;

  const main1TopAnimation = useScrollFadeIn(1, "25%", "0s");
  const main1BottomAnimation = useScrollFadeIn(1, "100%", "0.3s");

  const main2TopAnimation = useScrollFadeIn(0.7, "50%", "0s");
  const main2BottomAnimation = useScrollFadeIn(0.1, "25%", "0s");

  const main4TopAnimation = useScrollFadeIn(0.7, "50%", "0s");
  const main4BottomAnimation = useScrollFadeIn(0.1, "25%", "0s");

  const main9TopAnimation = useScrollFadeIn(0.7, "50%", "0s");
  const main9BottomAnimation = useScrollFadeIn(0.1, "25%", "0s");

  const main5TopAnimation = useScrollFadeIn(0.7, "100%", "0s");
  const main5BottomAnimation = useScrollFadeIn(0.1, "25%", "0s");

  const main7TopAnimation = useScrollFadeIn(0.7, "100%", "0s");
  const main7BottomAnimation = useScrollFadeIn(0.1, "25%", "0s");

  const main5Count1Animation = useScrollCount(4320, 3800, 1500, "???");
  const main5Count2Animation = useScrollCount(3312, 3000, 1500, "???");
  const main5Count3Animation = useScrollCount(488, 463, 1500, "??????");
  const main5Count4Animation = useScrollCount(27, 10, 1500, "??????");

  return (
    <>
      <Helmet>
        <title>DORO</title>
      </Helmet>
      <div className="Main-Container">
        <div className="Main1">
          <div className="Main1-content-container">
            <div {...main1TopAnimation}>
              <p className="Main1-title">
                '4??? ???????????? ????????????'
                <br />
                ?????????, ??????, AI ????????? ?????? ?????????

              </p>
              <p className="Main1-subtitle">
                ?????????????????? 4??? ???????????? ??????????????? ????????? ???????????? ????????? ???????????? ?????? ???????????????.
              </p>
            </div>
            <div {...main1BottomAnimation}>
              <Link
                to="/createPost"
                className="Main1-button-frame Main1-button:hover"
              >
                <button className="Main1-button">?????? ????????????</button>
              </Link>
            </div>
          </div>
        </div>

        {/* DORO ?????? ?????? ????????? */}
        <div className="Item-center">
          <MainEduContent />
        </div>

        {/* DORO ?????? ?????? ?????? */}
        <div className="Item-center">
          <MainEduType />
        </div>

        {/* DORO ????????? 7??? ?????? */}
        <div className="Main3">
          <div className="Main3-content-container">
            <div className="Main3-top-container">
              <div className="Main3-top-letter-container">
                <p className="Main3-title">DORO ????????? 7??? ??????</p>
                <p className="Main3-subtitle">
                  DORO??? ?????? ????????? ?????? ?????? ??? ?????? ????????? ?????? ???????????????.
                </p>
              </div>

              <div className="Main3-top-button-container">
                <button
                  className="Main3-top-left-button"
                >
                  <img
                    src={leftButton}
                    alt="Left"
                    className="Main3-top-left-image"
                  ></img>
                </button>
                <button
                  className="Main3-top-right-button"
                >
                  <img
                    src={rightButton}
                    alt="Right"
                    className="Main3-top-right-image"
                  ></img>
                </button>
              </div>


            </div>

            <Swiper
              slidesPerView="auto"
              spaceBetween={20}
              navigation={{
                prevEl: '.Main3-top-left-button',
                nextEl: '.Main3-top-right-button',
              }}
              modules={[Navigation]}
              className="Main3-bottom-container"
            >
              <SwiperSlide>
                
                <div className="Main3-bottom-image1-container">
                  <Link to="/speaker">
                    <img
                      src={speaker}
                      alt="Program"
                      className="Main3-bottom-image1"
                    />
                  </Link>
                  <div className="Main3-bottom-image1-letters">
                    <Link to="/speaker">
                      <p className="Main3-bottom-image-title">
                        DORO DIY ???????????? ?????????
                      </p>
                    </Link>
                    <p className="Main3-bottom-image-subtitle">
                      #IOT #???????????? #?????????
                    </p>
                    

                    <Link to="/createPost" className="Main3-bottom-image-button">
                      <button className="Main3-bottom-image-button">
                        <span className="Main3-bottom-image-inquiry">
                          ????????? ??????
                        </span>
                        <span className="Main3-bottom-image-arrow">&rsaquo;</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Main3-bottom-image3-container">
                  <Link to="/gameconsole">
                    <img
                      src={game}
                      alt="Program"
                      className="Main3-bottom-image3"
                    />
                  </Link>
                  <div className="Main3-bottom-image3-letters">
                    <Link to="/gameconsole">
                      <p className="Main3-bottom-image-title">
                        DORO DIY ???????????? ?????????
                      </p>
                    </Link>
                    <p className="Main3-bottom-image-subtitle">
                      #???????????? #???????????? #???????????? #??????
                    </p>

                    <Link to="/createPost" className="Main3-bottom-image-button">
                      <button className="Main3-bottom-image-button">
                        <span className="Main3-bottom-image-inquiry">
                          ????????? ??????
                        </span>
                        <span className="Main3-bottom-image-arrow">&rsaquo;</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Main3-bottom-walking-container">
                  <Link to="/walking">
                    <img
                      src={walking}
                      alt="Program"
                      className="Main3-bottom-walking"
                    />
                  </Link>
                  <div className="Main3-bottom-walking-letters">
                    <Link to="/walking">
                      <p className="Main3-bottom-image-title">DORO DIY ????????????</p>
                    </Link>
                    <p className="Main3-bottom-image-subtitle">
                      #???????????? #IR?????? #?????????
                    </p>

                    <Link to="/createPost" className="Main3-bottom-image-button">
                      <button className="Main3-bottom-image-button">
                        <span className="Main3-bottom-image-inquiry">
                          ????????? ??????
                        </span>
                        <span className="Main3-bottom-image-arrow">&rsaquo;</span>
                      </button>
                    </Link>
                  </div>
                </div>

              </SwiperSlide>
              <SwiperSlide>
                <div className="Main3-bottom-image4-container">
                  <Link to="/balancing">
                    <img
                      src={balancing}
                      alt="Program"
                      className="Main3-bottom-image4"
                    />
                  </Link>
                  <div className="Main3-bottom-image4-letters">
                    <Link to="/balancing">
                      <p className="Main3-bottom-image-title">
                        DORO DIY ????????? ??????
                      </p>
                    </Link>
                    <p className="Main3-bottom-image-subtitle">
                      #???????????? #PID #???????????? #??????
                    </p>

                    <Link to="/createPost" className="Main3-bottom-image-button">
                      <button className="Main3-bottom-image-button">
                        <span className="Main3-bottom-image-inquiry">
                          ????????? ??????
                        </span>
                        <span className="Main3-bottom-image-arrow">&rsaquo;</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Main3-bottom-image2-container">
                  <Link to="/moodlight">
                    <img
                      src={mood}
                      alt="Program"
                      className="Main3-bottom-image2"
                    />
                  </Link>
                  <div className="Main3-bottom-image2-letters">
                    <Link to="/moodlight">
                      <p className="Main3-bottom-image-title">
                        DORO DIY ?????? ?????????
                      </p>
                    </Link>
                    <p className="Main3-bottom-image-subtitle">
                      #???????????? #???????????? #????????????
                    </p>
                    <button className="Main3-bottom-image-button">
                      <span className="Main3-bottom-image-inquiry">
                        ????????? ??????
                      </span>

                      <span className="Main3-bottom-image-arrow">&rsaquo;</span>
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Main3-bottom-car-container">
                  <Link to="/ircar">
                    <img src={car} alt="Program" className="Main3-bottom-car"/>
                  </Link>
                  <div className="Main3-bottom-car-letters">
                    <Link to="/ircar">
                      <p className="Main3-bottom-image-title">DORO DIY IR ?????????</p>
                    </Link>
                    <p className="Main3-bottom-image-subtitle">
                      #???????????? #IR?????? #?????????
                    </p>

                    <Link to="/createPost" className="Main3-bottom-image-button">
                      <button className="Main3-bottom-image-button">
                        <span className="Main3-bottom-image-inquiry">
                          ????????? ??????
                        </span>
                        <span className="Main3-bottom-image-arrow">&rsaquo;</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Main3-bottom-tracer-container">
                  <Link to="/tracer">
                    <img src={tracer} alt="Program" className="Main3-bottom-tracer"/>
                  </Link>
                  <div className="Main3-bottom-tracer-letters">
                    <Link to="/tracer">
                      <p className="Main3-bottom-image-title">DORO Line Tracer Robot</p>
                    </Link>
                    <p className="Main3-bottom-image-subtitle">
                      #???????????? #???????????? #???????????? #????????????
                    </p>

                    <Link to="/createPost" className="Main3-bottom-image-button">
                      <button className="Main3-bottom-image-button">
                        <span className="Main3-bottom-image-inquiry">
                          ????????? ??????
                        </span>
                        <span className="Main3-bottom-image-arrow">&rsaquo;</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>

        {/* ?????? ????????? ?????? ????????? ?????? */}
        <div className="Main2">
          <div className="Main2-content-container">
            <div className="Item-center"  {...main2BottomAnimation}>
              <DoroInstructor />
            </div>
          </div>
        </div>

        <div className="Main9">
          <div className="Main9-content-container">
            <div className="Main9-letter-container" {...main9TopAnimation}>
              <p className="Main9-title">
                ??????????????? ????????? ????????? ????????????
              </p>
              <p className="Main9-subtitle">
                DORO??? ?????? ????????? ????????? ????????? ???????????? ?????? ?????? ????????? ???????????? ????????????.
              </p>
            </div>
            <div className="Main9-image-container" {...main9BottomAnimation}>
              <img src={doroeducation} alt="doroeducation" className="Main9-image"></img>
            </div>
          </div>
        </div>

        <div className="Main5">
          <div className="Main5-content-container">
            <div className="Main5-letter-container" {...main5TopAnimation}>
              <p className="Main5-title">DORO??? ????????? ??? ?????? ??????!</p>
            </div>
            <div {...main5BottomAnimation}>
              <div className="Main5-datas-container">
                <div className="Main5-data1-container">
                  <span className="Main5-data1-letter">?????? ?????? ?????????</span>
                  <span
                    className="Main5-data1-number"
                    {...main5Count1Animation}
                  >
                    4320???
                  </span>
                </div>
                <div className="Main5-data2-container">
                  <span className="Main5-data2-letter">?????? ?????? ?????????</span>
                  <span
                    className="Main5-data2-number"
                    {...main5Count2Animation}
                  >
                    3312???
                  </span>
                </div>
                <div className="Main5-data3-container">
                  <span className="Main5-data3-letter">?????? ?????? ??????</span>
                  <span
                    className="Main5-data3-number"
                    {...main5Count3Animation}
                  >
                    488??????
                  </span>
                </div>
                <div className="Main5-data4-container">
                  <span className="Main5-data4-letter">?????? ?????? ?????? ???</span>
                  <span
                    className="Main5-data4-number"
                    {...main5Count4Animation}
                  >
                    27??????
                  </span>
                </div>
                <div className="Main5-data5-container">
                  <span className="Main5-data5-letter">?????? ?????? ??????</span>
                  <span
                    className="Main5-data5-number"
                  // {...main5Count4Animation}
                  >
                    <DialogButton onClick={onClickToggleModal}>?????? ??????</DialogButton>
                  </span>
                </div>
              </div>
              <div className="Main5-doro-logo-gray-container">
                <img
                  src={doroLogoGray}
                  alt="doroLogoGray"
                  className="Main5-doro-logo-gray"
                ></img>
              </div>
            </div>
          </div>
        </div>
        {isOpenModal && (
          <ModalMap onClickToggleModal={onClickToggleModal}>
            <img src={doromap}></img>
          </ModalMap>
        )}

        <div className="Main4">
          <div className="Main4-content-container">
            <div className="Main4-letter-container" {...main4TopAnimation}>
              <p className="Main4-title">
                DORO ????????? ?????????????????? ?????? ?????????
              </p>
              <p className="Main4-subtitle">
                DORO ????????? ?????????????????? ?????? ???????????? ?????? ?????? ?????????
                ???????????????.
                <br /> ??????????????? ?????? ?????? ?????? ?????? : ????????? ?????????, ?????????,
                ?????????, ?????????, ?????????
              </p>
            </div>
            <div className="Main4-image-container" {...main4BottomAnimation}>
              <img src={ansan} alt="Ansan x DORO" className="Main4-image"></img>
            </div>
          </div>
        </div>

        <div className="Main6">
          <div className="Main6-content-container">
            <div className="Main6-top-container">
              <div className="Main6-top-letter-container">
                <p className="Main6-title">DORO??? ????????? ?????????</p>
                <p className="Main6-subtitle">
                  DORO??? ????????? ???????????? ???????????? ????????? ?????? ??????????????? ?????????
                  ???????????? ????????????.
                </p>
              </div>
              <div className="Main6-top-button-container">
                <button
                  className="Main6-top-left-button"
                >
                  <img
                    src={leftButton}
                    alt="Left"
                    className="Main6-top-left-image"
                  ></img>
                </button>
                <button
                  className="Main6-top-right-button"
                >
                  <img
                    src={rightButton}
                    alt="Right"
                    className="Main6-top-right-image"
                  ></img>
                </button>
              </div>
            </div>
            <Swiper
              slidesPerView="auto"
              spaceBetween={20}
              navigation={{
                prevEl: '.Main6-top-left-button',
                nextEl: '.Main6-top-right-button',
              }}
              modules={[Navigation]}
              className="Main6-bottom-container"
            >
              <SwiperSlide>
                <div className="Main6-bottom-image-container">
                  <img
                    src={child1}
                    alt="Program"
                    className="Main6-bottom-image"
                  ></img>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Main6-bottom-image-container">
                  <img
                    src={child2}
                    alt="Program"
                    className="Main6-bottom-image"
                  ></img>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Main6-bottom-image-container">
                  <img
                    src={child3}
                    alt="Program"
                    className="Main6-bottom-image"
                  ></img>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Main6-bottom-image-container">
                  <img
                    src={child4}
                    alt="Program"
                    className="Main6-bottom-image"
                  ></img>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Main6-bottom-image-container">
                  <img
                    src={child5}
                    alt="Program"
                    className="Main6-bottom-image"
                  ></img>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Main6-bottom-image-container">
                  <img
                    src={child6}
                    alt="Program"
                    className="Main6-bottom-image"
                  ></img>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Main6-bottom-image-container">
                  <img
                    src={child7}
                    alt="Program"
                    className="Main6-bottom-image"
                  ></img>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Main6-bottom-image-container">
                  <img
                    src={child8}
                    alt="Program"
                    className="Main6-bottom-image"
                  ></img>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Main6-bottom-image-container">
                  <img
                    src={child9}
                    alt="Program"
                    className="Main6-bottom-image"
                  ></img>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>

        <div className="Main7">
          <div className="Main7-content-container">
            <div className="Main7-title-container" {...main7TopAnimation}>
              <p className="Main7-title">DORO ?????? ????????????</p>
            </div>

            <div
              className="Main7-process-images-container"
              {...main7BottomAnimation}
            >
              <img
                src={process}
                alt="ProcessImage"
                className="Main7-image"
              ></img>
            </div>
          </div>
        </div>

        <div className="Main8">
          <div className="Main8-content-container">
            <img
              src={main8Logo}
              alt="dorologo"
              className="Main8-dorologo"
            ></img>
            <p className="Main8-title">
              ??? ????????????, ??? ?????????
              <br />
              ????????? ??????????????? ??????????????????
            </p>
            <Link to="/createPost" className="Main8-button-frame">
              <button className="Main8-button Main8-button:hover">
                ?????? ????????????
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
