import React from "react";
import bottom_tree_aboutus from "../assets/img/webp/abouttree.webp";
import aboutlayerbottom from "../assets/img/webp/aboutbottom.webp";
import sleep from "../assets/img/webp/aboutusSleeping.webp";
const Aboutus = () => {
  return (
    <>
      <section className="bg_pink position-relative py-5">
        <div className="position-absolute bottom_-20 z-1 w-100">
          <img
            src={aboutlayerbottom}
            alt=""
            className="w-100 about_bottom"
            height={250}
          />
        </div>
        <div className="position-absolute about_sleep">
          <img src={sleep} alt="sleep" className="w-100" />
        </div>
        <div className="aboutus_section_bg pb-5">
          <div className="py-md-5 mt-5">
            <div className="aboutus_bg_white position-relative z-3 py-lg-5 py-4">
              <h2
                className="ff_cherry text-center color_pink aboutus_text_sahdow fw-normal fs_7xl pt-lg-4 mb-md-4 mb-3 pe-5 clr_pink"
                data-aos="zoom-in"
                data-aos-duration="800"
              >
                About Us
              </h2>
              <div className=" d-flex justify-content-center align-items-center flex-column">
                <p className="mw_707 text-center mb-0 ff_balsamiq fw-normal fs_md clr_black_100 opacity_07 pb-lg-5 pb-2 px-md-5 px-2">
                  Cozy Capys is an impactful NFT project featuring 10,000 <br />
                  adorable capybara characters! Capybaras are sweet, caring, and
                  gentle creatures that can form strong bonds with anyone around
                  them. By donating 10% of all proceeds to organizations that
                  support wildlife conservation, hosting inclusive community
                  events, and offering real-life animal experiences, Cozy Capys
                  aims to incorporate all the amazing qualities that these
                  animals portray each and every day! Adopt your Cozy Capy today
                  and join our wonderful community in giving back to the
                  beautiful world around us.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute bottom_-20 start-0 z-2 d-lg-block d-none">
          <img
            src={bottom_tree_aboutus}
            alt="about us section bottom tree"
            className="w-100 h_407"
          />
        </div>
      </section>
    </>
  );
};

export default Aboutus;
