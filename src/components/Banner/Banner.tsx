import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import BannerContent from "./sub-components/BannerContent";
import { bannerText } from "../../data/data";

interface BannerState {
  loopNum: number;
  isDeleting: boolean;
  text: string;
  delta: number;
}

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
                  <BannerContent
                    text={text}
                    additionalText="Welcome to my Portfolio"
                  />
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
