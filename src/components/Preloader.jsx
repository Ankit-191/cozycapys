import React from "react";

const Preloader = () => {
  setTimeout(() => {
    document.getElementById("none").classList.add("d-none");
    document.body.style.overflow = "unset";
  }, 2900);
  return (
    <>
      <div
        id="none"
        className="bg_preloader d-inline-block min-vh-100 w-100 position-fixed z_50 top-0 start-0"
      >
        <div className="d-flex justify-content-center align-items-center min-vh-100">
          <span className="d-flex align-items-center pointer justify-content-center justify-content-sm-start">
            <h1 className="ff_cherry fw-normal fs_7xl pre_text">
              <span className="hero_cozy clr_orange">Cozy</span>
              <span className="hero_cozy clr_green ff_cherry_cream hero_hadding_margin">
                Capys
              </span>
              <span className="hero_nft clr_white">NFT</span>
            </h1>
          </span>
        </div>
      </div>
    </>
  );
};

export default Preloader;
