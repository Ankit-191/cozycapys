import React from "react";
import impact_col_img from "../assets/gif/impact.gif";
import { Col, Container, Row } from "react-bootstrap";
import impact_rainbow from "../assets/img/webp/impactleft.webp";
import cloud from "../assets/img/webp/impact_left_cloud.webp";
const Impact = () => {
  return (
    <>
      <section
        className="bg_impact_color position-relative bg_impact"
        id="impactsection"
      >
        <div className="py-5">
          <Container className="py-lg-5">
            <Row className="justify-content-lg-between justify-content-center align-items-center py-5 mt-lg-5 position-relative z-1">
              <Col lg={6} md={8} data-aos="fade-right" data-aos-duration="1000">
                <h2 className="ff_cherry text_shadow_impact text-lg-start text-center fw-normal fs_7xl text-white mb-0">
                  Impact
                </h2>
                <p className="ff_balsamiq fs_md fw-normal text-lg-start text-center clr_black_100 opacity_07 pt-4 mb-0">
                  Cozy Capys, an NFT project centered around adorable capybara
                  characters, aims to create a positive social impact. It
                  achieves this through initiatives such as donating 10% of
                  proceeds to wildlife conservation organizations, hosting
                  inclusive community events, and offering real-life animal
                  experiences. By combining the popularity of NFTs, the
                  endearing nature of capybaras, and meaningful initiatives,
                  Cozy Capys fosters a sense of responsibility, empathy, and
                  community among its members, contributing to wildlife
                  conservation and environmental preservation.
                </p>
              </Col>
              <Col lg={5} md={8} data-aos="fade-right" data-aos-duration="1000">
                <div className="border_img mt-lg-0 mt-5">
                  <img
                    src={impact_col_img}
                    alt="impact section col image"
                    className="impact_col_image"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="position-absolute bottom-0 start-0">
          <img src={cloud} alt="cloud" />
        </div>
        <div className="position-absolute top_13 right_-15 d-lg-block d-none">
          <img
            className="impact_rainbow"
            src={impact_rainbow}
            alt="impact section right side rainbow"
          />
        </div>
      </section>
    </>
  );
};

export default Impact;
