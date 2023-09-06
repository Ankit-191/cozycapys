import React from "react";
import { Container } from "react-bootstrap";
import Hearder from "./Hearder";
import herodoormoon from "../assets/img/webp/herodoormoon.webp";
import herotreeleft from "../assets/img/webp/heroleft.webp";
import herorighttree from "../assets/img/webp/heroright.webp";
import herorainboo from "../assets/img/webp/hero_rainbo.webp";
import cloudbig from "../assets/img/webp/heroclouds.webp";
const Hero = () => {
  return (
    <>
      <section className="bg_hero min_vh_100 z-2 bg-black d-flex flex-column position-relative">
        <div className="position-absolute herotreeleft">
          <img src={herotreeleft} alt="herotreeleft" className="w-100" />
        </div>
        <div className="herorighttree position-absolute">
          <img src={herorighttree} alt="herorighttree" className="w-100" />
        </div>
        <div className="herorainboo position-absolute d-none d-lg-block">
          <img src={herorainboo} alt="herorainboo" className="w-100" />
        </div>
        <div className="position-absolute cloudbig">
          <img src={cloudbig} alt="cloudbig" className="w-100"/>
        </div>
        <div className="position-absolute cloudxlbig">
          <img src={cloudbig} alt="cloudbig" className="w-100"/>
        </div>
        <div className="position-absolute cloudsmbig">
          <img src={cloudbig} alt="cloudbig" className="w-100"/>
        </div>
        <div className="position-absolute cloudxsmbig">
          <img src={cloudbig} alt="cloudbig" className="w-100"/>
        </div>
        <Hearder />
        <div className="flex-grow-1">
          <Container>
            <div className="text-center mt-sm-5 mt-3">
              <h1 className="ff_cherry fw-normal fs_7xl">
                <span className="hero_cozy clr_orange">Cozy</span>
                <span className="hero_cozy clr_green ff_cherry_cream hero_hadding_margin">
                  Capys
                </span>
                <span className="hero_nft clr_white">NFT</span>
              </h1>
              <p className="ff_balsamiq fs_md fw-bold hero_para clr_white mt-3">
                Cozy Capys is an impactful NFT project featuring 10,000 adorable
                capybara characters!
                <span className="d-lg-block">
                  10% of all proceeds will go to wildlife conservation
                  organizations!
                </span>
              </p>
              <button className="btn_join ff_balsamiq fs_lg fw-bold clr_white mt-sm-4">
                Join Us
              </button>
            </div>
            <div>
              <div className="position-absolute herodoormoon start-0 ">
                <img src={herodoormoon} alt="herodoormoon" className="w-100" />
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Hero;
