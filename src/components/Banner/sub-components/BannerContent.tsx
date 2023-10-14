import React from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import Tagline from "./Tagline";
import TextRotator from "./TextRotator";
import { bannerText } from "../../../data/data";

interface BannerContentProps {
  text: string;
  additionalText: string;
}

const BannerContent = ({ text, additionalText }: BannerContentProps) => (
  <React.Fragment>
    <Tagline text={additionalText} />
    <TextRotator text={text} rotationText={bannerText} />
    <p>
      My journey as a Junior Frontend Developer has been fueled by a relentless
      pursuit of knowledge. I'm a firm believer in lifelong learning, constantly
      exploring new technologies and design trends to stay at the forefront of
      the industry.
    </p>
    <button className="connect-btn">
      <a
        className="link-to-cv"
        href="https://lavender-sella-26.tiiny.site/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Curriculum Vitae <ArrowRightCircle size={25} />
      </a>
    </button>
  </React.Fragment>
);

export default BannerContent;
