import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { RxCross1 } from "react-icons/rx";
import { BiMenu } from "react-icons/bi";
import discord from "../assets/img/svg/discord.svg";
import twitter from "../assets/img/svg/twitter.svg";
import instagram from "../assets/img/svg/instagram.svg";
import logo from "../assets/img/webp/logo.webp";
const Hearder = () => {
  const [head, sethead] = useState(true);
  function showUl() {
    sethead(!head);
  }
  if (!head) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <section className="py-2">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <div className="ff_Chewy fw-normal fs_3sm gap-1 lh-1 d-flex align-items-end">
              <img src={logo} alt="logo" width={42} height={59} />
              <span className="cozy_shadow clr_orange pb-1">Cozy</span>
              <span className="capys_shadow clr_green pb-1">Capys</span>
            </div>
            <div onClick={showUl} className="z_30 d-lg-none">
              <h3 className="clr_white fs_3sm">
                {head ? <BiMenu /> : <RxCross1 />}
              </h3>
            </div>
            <div
              className={`d-flex flex-column flex-lg-row align-items-center justify-content-center phone ${
                head ? "" : "left_0 text-center clip_path"
              }`}
            >
              <ul className="ps-0 mb-0 d-flex flex-column flex-lg-row align-items-center gap-lg-4 gap-2">
                <li className="nav_hvoer">
                  <span className="ff_balsamiq px-lg-1 fs_sm fw-bold clr_white">
                    Home
                  </span>
                </li>
                <li className="nav_hvoer">
                  <span className="ff_balsamiq px-lg-1 fs_sm fw-bold clr_white">
                    About
                  </span>
                </li>
                <li className="nav_hvoer">
                  <a
                    href="#teamsection"
                    className="ff_balsamiq px-lg-1 fs_sm fw-bold clr_white"
                  >
                    Impact
                  </a>
                </li>
                <li className="nav_hvoer">
                  <a
                    href="#roadmapsection"
                    className="ff_balsamiq px-lg-1 fs_sm fw-bold clr_white"
                  >
                    Roadmap
                  </a>
                </li>
                <li className="nav_hvoer">
                  <a
                    href="#partnerssection"
                    className="ff_balsamiq px-lg-1 fs_sm fw-bold clr_white"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
              <div className="d-flex gap-lg-3 gap-2 mt-3 d-lg-none">
                <img src={discord} alt="discord" width={30} height={30} />
                <img src={twitter} alt="twitter" width={30} height={30} />
                <img src={instagram} alt="instagram" width={30} height={30} />
              </div>
            </div>
            <div className="d-lg-flex gap-3 d-none">
              <img src={discord} alt="discord" width={30} height={30} />
              <img src={twitter} alt="twitter" width={30} height={30} />
              <img src={instagram} alt="instagram" width={30} height={30} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hearder;
