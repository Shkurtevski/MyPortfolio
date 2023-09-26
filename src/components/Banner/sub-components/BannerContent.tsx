import React from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import Tagline from "./Tagline";
import TextRotator from "./TextRotator";
import { bannerText } from "../../../data/data";
import { HashLink } from "react-router-hash-link";

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
    <HashLink to="#connect" className="connect-btn-hash">
      <button className="connect-btn">
        Let's Connect <ArrowRightCircle size={25} />
      </button>
    </HashLink>
  </React.Fragment>
);

export default BannerContent;
