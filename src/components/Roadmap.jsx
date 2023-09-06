import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import arrow from "../assets/img/svg/roadmaparrows.svg";
import {
  Cross,
  Phase1,
  Phase1data,
  Phase2,
  Phase2data,
  Phase3,
  Phase3data,
  Phase4,
  Phase4data,
} from "./common/icons/Icons";
const Roadmap = () => {
  return (
    <>
      <section className="bg_green_100 bg_radmap position-relative z-2">
        <Container className="py-5">
          <div className="bg_layertop"></div>
          <div class="container py-5">
            <h2 class="ff_cherry fs_5xl fw-normal text_shadow_roadmap text-white mb-3 pb-1">
              Roadmap
            </h2>
            <p class="ff_balsamiq fs_md fw-normal text-white mb-2">
              Nam duis feugiat tellus metus arcu pharetra arcu. Sed ultrices
              ullamcorper urna
              <span class="d-md-block">
                interdum. Maecenas neque augue mattis.
              </span>
            </p>
            <Row className="mt-md-5 mt-4" id="cards_none">
              <Col lg={7} md={6} className="pb-3 pb-md-4">
                <div class="card_phase h-100">
                  <p class="ff_balsamiq fs_xl fw-bold text-white mb-0">Phase</p>
                  <div class="d-flex justify-content-between align-items-end">
                    <p class="ff_cherry fs_6xl fw-normal text-white opacity_03 mb-0 lh-1">
                      01
                    </p>
                    <Phase1 />
                  </div>
                  <div class="mt-3">
                    <button class="ff_balsamiq fs_md fw-normal text-white bg-transparent border-0 btn_cards">
                      Preparation
                      <img src={arrow} alt="arrows" className="ms-1" />
                    </button>
                  </div>
                </div>
              </Col>
              <Col lg={5} md={6} className="pb-3 pb-md-4">
                <div class="card_phase h-100">
                  <p class="ff_balsamiq fs_xl fw-bold text-white mb-0">Phase</p>
                  <div class="d-flex justify-content-between align-items-end">
                    <p class="ff_cherry fs_6xl fw-normal text-white opacity_03 mb-0 lh-1">
                      02
                    </p>
                    <Phase2 />
                  </div>
                  <div class="mt-3">
                    <button class="ff_balsamiq fs_md fw-normal text-white bg-transparent border-0 btn_cards">
                      Community Engagement & Growth
                      <img src={arrow} alt="arrows" className="ms-1" />
                    </button>
                  </div>
                </div>
              </Col>
              <Col lg={5} md={6} className="pb-3 pb-md-4">
                <div class="card_phase h-100">
                  <p class="ff_balsamiq fs_xl fw-bold text-white mb-0">Phase</p>
                  <div class="d-flex justify-content-between align-items-end">
                    <p class="ff_cherry fs_6xl fw-normal text-white opacity_03 mb-0 lh-1">
                      03
                    </p>
                    <Phase3 />
                  </div>
                  <div class="mt-3">
                    <button class="ff_balsamiq fs_md fw-normal text-white bg-transparent border-0 btn_cards">
                      Launch
                      <img src={arrow} alt="arrows" className="ms-1" />
                    </button>
                  </div>
                </div>
              </Col>
              <Col lg={7} md={6} className="pb-3 pb-md-4">
                <div class="card_phase h-100">
                  <p class="ff_balsamiq fs_xl fw-bold text-white mb-0">Phase</p>
                  <div class="d-flex justify-content-between align-items-end">
                    <p class="ff_cherry fs_6xl fw-normal text-white opacity_03 mb-0 lh-1">
                      04
                    </p>
                    <Phase4 />
                  </div>
                  <div class="mt-3">
                    <button class="ff_balsamiq fs_md fw-normal text-white bg-transparent border-0 btn_cards">
                      Real-life
                      <img src={arrow} alt="arrows" className="ms-1" />
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
            <div class={`card_phase1 my-md-5 my-4 d-none`} id="data_show1">
              <div class="d-flex justify-content-between align-items-center">
                <h5 class="ff_balsamiq fw-bold text-white fs_4xl">Phase 1</h5>
                <div onclick="closedata()" class="close_btn">
                  <Cross />
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col-lg-8 col-12">
                  <p class="ff_balsamiq fw-bold text-white fs_md">
                    Preparation
                  </p>
                  <ul>
                    <li class="ff_balsamiq fw-bold fs_sm text_gray mt-3">
                      <span class="text-white"> Artwork Creation:</span> Base
                      Designs
                      <ul class="p-0 m-0 list-unstyled">
                        <li class="my-2">
                          a. Collaborate with our artist to design and create
                          the 10,000 unique Cozy Capy NFTs
                        </li>
                        <li class="mb-2">
                          b. Ensure that the capybara characters are adorable,
                          diverse, and visually appealing
                        </li>
                      </ul>
                    </li>
                    <li class="ff_balsamiq fw-bold fs_sm text_gray mt-3">
                      <span class="text-white">Community Building</span>
                      <ul class="p-0 m-0 list-unstyled">
                        <li class="my-2">
                          a. Establish social media accounts (Twitter, Discord,
                          etc.) to engage with our community and generate
                          interest
                        </li>
                      </ul>
                    </li>
                    <li class="ff_balsamiq fw-bold fs_sm text_gray mt-3">
                      <span class="text-white">
                        Website/Whitepaper Development
                      </span>
                      <ul class="p-0 m-0 list-unstyled">
                        <li class="my-2">
                          a. Build a user-friendly website that showcases Cozy
                          Capys and provides information about the project’s
                          mission and goals
                        </li>
                        <li class="mb-2">
                          b. Write a comprehensive whitepaper that contains all
                          the specific details about Cozy Capys
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-4 col-12 text-lg-end text-center">
                  <Phase1data />
                </div>
              </div>
            </div>
            <div class={`card_phase1 my-md-5 my-4 d-none`} id="data_show2">
              <div class="d-flex justify-content-between align-items-center">
                <h5 class="ff_balsamiq fw-bold text-white fs_4xl">Phase 2</h5>
                <div onclick="closedata()" class="close_btn">
                  <Cross />
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col-lg-8 col-12">
                  <p class="ff_balsamiq fw-bold text-white fs_md">
                    Preparation
                  </p>
                  <ul>
                    <li class="ff_balsamiq fw-bold fs_sm text_gray mt-3">
                      <span class="text-white"> Artwork Creation:</span> Base
                      Designs
                      <ul class="p-0 m-0 list-unstyled">
                        <li class="my-2">
                          a. Collaborate with our artist to design and create
                          the 10,000 unique Cozy Capy NFTs
                        </li>
                        <li class="mb-2">
                          b. Ensure that the capybara characters are adorable,
                          diverse, and visually appealing
                        </li>
                      </ul>
                    </li>
                    <li class="ff_balsamiq fw-bold fs_sm text_gray mt-3">
                      <span class="text-white">Community Building</span>
                      <ul class="p-0 m-0 list-unstyled">
                        <li class="my-2">
                          a. Establish social media accounts (Twitter, Discord,
                          etc.) to engage with our community and generate
                          interest
                        </li>
                      </ul>
                    </li>
                    <li class="ff_balsamiq fw-bold fs_sm text_gray mt-3">
                      <span class="text-white">
                        Website/Whitepaper Development
                      </span>
                      <ul class="p-0 m-0 list-unstyled">
                        <li class="my-2">
                          a. Build a user-friendly website that showcases Cozy
                          Capys and provides information about the project’s
                          mission and goals
                        </li>
                        <li class="mb-2">
                          b. Write a comprehensive whitepaper that contains all
                          the specific details about Cozy Capys
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-4 col-12 text-lg-end text-center">
                  <Phase2data />
                </div>
              </div>
            </div>
            <div class={`card_phase1 my-md-5 my-4 d-none`} id="data_show3">
              <div class="d-flex justify-content-between align-items-center">
                <h5 class="ff_balsamiq fw-bold text-white fs_4xl">Phase 3</h5>
                <div onclick="closedata()" class="close_btn">
                  <Cross />
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col-lg-8 col-12">
                  <p class="ff_balsamiq fw-bold text-white fs_md">
                    Preparation
                  </p>
                  <ul>
                    <li class="ff_balsamiq fw-bold fs_sm text_gray mt-3">
                      <span class="text-white"> Artwork Creation:</span> Base
                      Designs
                      <ul class="p-0 m-0 list-unstyled">
                        <li class="my-2">
                          a. Collaborate with our artist to design and create
                          the 10,000 unique Cozy Capy NFTs
                        </li>
                        <li class="mb-2">
                          b. Ensure that the capybara characters are adorable,
                          diverse, and visually appealing
                        </li>
                      </ul>
                    </li>
                    <li class="ff_balsamiq fw-bold fs_sm text_gray mt-3">
                      <span class="text-white">Community Building</span>
                      <ul class="p-0 m-0 list-unstyled">
                        <li class="my-2">
                          a. Establish social media accounts (Twitter, Discord,
                          etc.) to engage with our community and generate
                          interest
                        </li>
                      </ul>
                    </li>
                    <li class="ff_balsamiq fw-bold fs_sm text_gray mt-3">
                      <span class="text-white">
                        Website/Whitepaper Development
                      </span>
                      <ul class="p-0 m-0 list-unstyled">
                        <li class="my-2">
                          a. Build a user-friendly website that showcases Cozy
                          Capys and provides information about the project’s
                          mission and goals
                        </li>
                        <li class="mb-2">
                          b. Write a comprehensive whitepaper that contains all
                          the specific details about Cozy Capys
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-4 col-12 text-lg-end text-center">
                  <Phase3data />
                </div>
              </div>
            </div>
            <div class={`card_phase1 my-md-5 my-4 d-none`} id="data_show4">
              <div class="d-flex justify-content-between align-items-center">
                <h5 class="ff_balsamiq fw-bold text-white fs_4xl">Phase 4</h5>
                <div onclick="closedata()" class="close_btn">
                  <Cross />
                </div>
              </div>
              <div class="row align-items-center">
                <div class="col-lg-8 col-12">
                  <p class="ff_balsamiq fw-bold text-white fs_md">
                    Preparation
                  </p>
                  <ul>
                    <li class="ff_balsamiq fw-bold fs_sm text_gray mt-3">
                      <span class="text-white"> Artwork Creation:</span> Base
                      Designs
                      <ul class="p-0 m-0 list-unstyled">
                        <li class="my-2">
                          a. Collaborate with our artist to design and create
                          the 10,000 unique Cozy Capy NFTs
                        </li>
                        <li class="mb-2">
                          b. Ensure that the capybara characters are adorable,
                          diverse, and visually appealing
                        </li>
                      </ul>
                    </li>
                    <li class="ff_balsamiq fw-bold fs_sm text_gray mt-3">
                      <span class="text-white">Community Building</span>
                      <ul class="p-0 m-0 list-unstyled">
                        <li class="my-2">
                          a. Establish social media accounts (Twitter, Discord,
                          etc.) to engage with our community and generate
                          interest
                        </li>
                      </ul>
                    </li>
                    <li class="ff_balsamiq fw-bold fs_sm text_gray mt-3">
                      <span class="text-white">
                        Website/Whitepaper Development
                      </span>
                      <ul class="p-0 m-0 list-unstyled">
                        <li class="my-2">
                          a. Build a user-friendly website that showcases Cozy
                          Capys and provides information about the project’s
                          mission and goals
                        </li>
                        <li class="mb-2">
                          b. Write a comprehensive whitepaper that contains all
                          the specific details about Cozy Capys
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-4 col-12 text-lg-end text-center">
                  <Phase4data />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Roadmap;
