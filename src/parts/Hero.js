import React from "react";
import Fade from "react-reveal/Fade";

import ImagesHero from "assets/images/picture-hero-banner.jpg";
import FrameHero from "assets/images/frame-hero-banner.jpg";
import IconCamera from "assets/images/icon/ic-camera.svg";
import IconCities from "assets/images/icon/ic-cities.svg";

import Button from "elements/button";
import formatNumber from "utilts/formatNumber";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <Fade bottom>
      <section className="container pt-4">
        <div className="row align-items-center">
          <div className="col-auto pr-5" style={{ width: 530 }}>
            <h1 className="font-weight-bold line-height-1 mb-3">
            True Love Only, <br />
            Starts After Marriage
            </h1>
            <p
              className="mb-4 font-weight-light text-gray 500 w-75"
              style={{ lineHeight: "170%" }}
            >
              We provide what is needed for wedding pickles. Time
              to make another memorable moments.
            </p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              Show Me Now
            </Button>

            <div className="row" style={{ marginTop: 80 }}>
              <div className="col-auto" styl={{ marginRight: 35 }}>
                {/* <img
                  width="36"
                  height="36"
                  src={IconCamera}
                  alt={`${props.data.couples}Couples`}
                /> */}
                <h6 className="mt-3">
                  {formatNumber(props.data.couples)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Couples
                  </span>
                </h6>
              </div>
              {/* <div className="col-auto">
                <img
                  width="36"
                  height="36"
                  src={IconCities}
                  alt={`${props.data.decors}Decors`}
                />
                <h6 className="mt-3">
                  {formatNumber(props.data.decors)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Decors
                  </span>
                </h6>
              </div> */}
            </div>
          </div>

          <div className="col-6 pl-5">
            <div style={{ width: 520, height: 410 }}>
              <img
                src={ImagesHero}
                alt="wedding"
                className="img-fluid position-absolute"
                style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
              />
              <img
                src={FrameHero}
                alt="wedding frame"
                className="img-fluid position-absolute"
                style={{ margin: "0 -15px -15px 0" }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
