import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

interface BannerState {
  loopNum: number;
  isDeleting: boolean;
  text: string;
  delta: number;
}

const bannerText: string[] = [
  "Junior Frontend Developer.",
  "Continuous Learner.",
  "Goal-Driven.",
];

const Banner = () => {
  const [state, setState] = useState<BannerState>({
    loopNum: 0,
    isDeleting: false,
    text: "",
    delta: 350,
  });

  const { loopNum, isDeleting, text, delta } = state;

  const tick = useCallback(() => {
    const i = loopNum % bannerText.length;
    const fullText = bannerText[i];

    if (isDeleting) {
      setState((prevState) => ({ ...prevState, text: text.slice(0, -1) }));
    } else {
      setState((prevState) => ({
        ...prevState,
        text: fullText.slice(0, text.length + 1),
      }));
    }

    if (text === fullText && !isDeleting) {
      setState((prevState) => ({ ...prevState, isDeleting: true, delta: 150 }));
    } else if (text === "" && isDeleting) {
      setState((prevState) => ({
        ...prevState,
        isDeleting: false,
        loopNum: loopNum + 1,
        delta: 150,
      }));
    }
  }, [loopNum, isDeleting, text]);

  useEffect(() => {
    const ticker = setInterval(tick, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [delta, tick]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Nenad,`}{" "}
                    <span
                      className="txt-rotate"
                      data-rotate='[ "Frontend Developer.", "NContinuous Learner.", "Goal-Driven." ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    My journey as a Junior Frontend Developer has been fueled by
                    a relentless pursuit of knowledge. I'm a firm believer in
                    lifelong learning, constantly exploring new technologies and
                    design trends to stay at the forefront of the industry.
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Let's Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                ></div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
