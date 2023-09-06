import React from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/img/webp/logo.webp";
const Footer = () => {
  return (
    <>
      <section className="bg_orange_100 position-relative bg_side_img">
        <div className="bg_img pt-5">
          <div className="pt-4">
            <div className="ff_Chewy fw-normal fs_3xl gap-1 lh-1 d-flex align-items-end justify-content-center pb-2 pt-md-5 mt-md-5">
              <img src={logo} alt="logo" width={58} height={83} />
              <span className="cozy_shadow clr_orange pb-1">Cozy</span>
              <span className="capys_shadow clr_white pb-1">Capys</span>
            </div>
          </div>
          <ul className="ps-0 mb-0 d-flex justify-content-center gap-lg-4 gap-3 mt-md-5 pt-5">
            <li className="footer_hover">
              <span className="ff_balsamiq px-lg-1 fs_sm fw-normal clr_black_100">
                Home
              </span>
            </li>
            <li className="footer_hover">
              <span className="ff_balsamiq px-lg-1 fs_sm fw-normal clr_black_100">
                About
              </span>
            </li>
            <li className="footer_hover">
              <a
                href="#impactsection"
                className="ff_balsamiq px-lg-1 fs_sm fw-normal clr_black_100"
              >
                Impact
              </a>
            </li>
            <li className="footer_hover">
              <a
                href="#roadmapsection"
                className="ff_balsamiq px-lg-1 fs_sm fw-normal clr_black_100"
              >
                Roadmap
              </a>
            </li>
            <li className="footer_hover">
              <a
                href="#faqsection"
                className="ff_balsamiq px-lg-1 fs_sm fw-normal clr_black_100"
              >
                FAQ
              </a>
            </li>
          </ul>
          <div className="d-flex gap-4 justify-content-center mt-4 mb-5 footer_hover">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
            >
              <circle cx="18.5" cy="18.5" r="18" stroke="#0D0D0D" />
              <path
                d="M28 12.7793C27.3381 13.0799 26.627 13.2831 25.8794 13.3749C26.6508 12.9018 27.2278 12.1572 27.503 11.28C26.7783 11.7212 25.9851 12.0318 25.158 12.1982C24.6018 11.5895 23.8651 11.186 23.0623 11.0504C22.2594 10.9148 21.4354 11.0547 20.7181 11.4484C20.0007 11.8421 19.4303 12.4675 19.0953 13.2276C18.7602 13.9877 18.6794 14.8399 18.8652 15.6519C17.3968 15.5764 15.9603 15.1851 14.649 14.5036C13.3376 13.8221 12.1807 12.8655 11.2533 11.696C10.9362 12.2568 10.7539 12.9069 10.7539 13.5992C10.7535 14.2225 10.9033 14.8362 11.1898 15.386C11.4763 15.9357 11.8908 16.4045 12.3965 16.7506C11.81 16.7315 11.2366 16.5691 10.7238 16.2768V16.3256C10.7237 17.1998 11.0187 18.0471 11.5587 18.7237C12.0987 19.4003 12.8504 19.8646 13.6863 20.0377C13.1423 20.1886 12.5719 20.2109 12.0183 20.1027C12.2542 20.8549 12.7136 21.5127 13.3322 21.9839C13.9508 22.4551 14.6977 22.7163 15.4683 22.7308C14.1602 23.7835 12.5446 24.3545 10.8815 24.352C10.5869 24.3521 10.2926 24.3344 10 24.2992C11.6881 25.4118 13.6532 26.0023 15.6602 26C22.454 26 26.168 20.2319 26.168 15.2294C26.168 15.0668 26.164 14.9027 26.1569 14.7402C26.8793 14.2046 27.5029 13.5414 27.9984 12.7817L28 12.7793Z"
                fill="#0D0D0D"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
            >
              <circle cx="18.5" cy="18.5" r="18" stroke="#0D0D0D" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.4863 11.0984C14.4308 11.327 13.1618 11.7316 12.3368 12.1024C12.0591 12.2272 12.0056 12.2709 11.863 12.4888C10.3251 14.8393 9.41346 17.2533 9.0977 19.8113C9.00993 20.5222 8.96969 22.3113 9.02603 22.9955C9.06077 23.4171 9.08322 23.5239 9.14748 23.5732C9.80307 24.0761 11.2749 24.9157 12.221 25.3265C12.9274 25.6332 13.9006 25.99 14.0576 25.9997C14.1456 26.0052 14.2125 25.9324 14.4835 25.5363C14.6603 25.2779 14.8978 24.8944 15.0113 24.6841L15.2177 24.3016L15.0326 24.2314C14.7445 24.122 13.6034 23.5605 13.574 23.5136C13.5595 23.4905 13.6314 23.4041 13.7336 23.3215L13.9195 23.1713L14.3679 23.3566C17.3555 24.5911 20.6386 24.5932 23.6169 23.3625L24.0611 23.179L24.2345 23.3048C24.3299 23.3739 24.4079 23.4558 24.4079 23.4868C24.4079 23.5442 23.5208 24.0046 23.0764 24.1778C22.9413 24.2305 22.8208 24.2895 22.8086 24.3091C22.7807 24.3536 23.1948 25.0775 23.5578 25.6184C23.8825 26.1024 23.7733 26.0907 24.7273 25.7443C25.9789 25.2899 27.151 24.7026 28.235 23.9868C28.5308 23.7914 28.8074 23.6055 28.8495 23.5737C28.9664 23.4856 29.0209 22.6466 28.9927 21.3653C28.9544 19.621 28.7033 18.1572 28.1739 16.5916C27.7263 15.2681 26.9293 13.6651 26.1489 12.5188L25.9449 12.219L25.4676 12.0203C24.7836 11.7356 24.1627 11.5231 23.4557 11.332C22.7183 11.1326 21.9243 10.9717 21.8382 11.0042C21.8042 11.0171 21.6663 11.251 21.532 11.5241C21.3976 11.7971 21.2854 12.0235 21.2828 12.0271C21.2801 12.0308 21.0863 12.0072 20.8521 11.9748C20.1315 11.8751 18.4539 11.8528 17.6225 11.9317C17.2281 11.9692 16.864 12.0097 16.8134 12.0218C16.7318 12.0413 16.6922 11.9851 16.4658 11.5282C16.1649 10.921 16.2113 10.9413 15.4863 11.0984ZM15.971 17.2904C16.6341 17.4145 17.2153 17.9815 17.407 18.6915C17.5426 19.1936 17.445 19.9012 17.1781 20.3517C16.8935 20.8319 16.3504 21.1822 15.8246 21.2247C14.3788 21.3415 13.4109 19.6446 14.1276 18.2497C14.3568 17.8035 14.8377 17.4223 15.316 17.3076C15.5869 17.2426 15.6996 17.2397 15.971 17.2904ZM22.9198 17.3724C23.3349 17.528 23.7033 17.8742 23.9284 18.3204C24.2027 18.8643 24.1806 19.6797 23.8756 20.2734C23.6059 20.7982 23.0265 21.1888 22.4583 21.2289C21.6511 21.2859 20.9284 20.7577 20.6337 19.8953C20.5192 19.5605 20.5297 18.8721 20.6544 18.5338C21.0235 17.5319 22.0041 17.0292 22.9198 17.3724Z"
                fill="#0D0D0D"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
            >
              <circle cx="18.5" cy="18.5" r="18" stroke="#0D0D0D" />
              <path
                d="M18.4974 15.332C16.753 15.332 15.3295 16.7556 15.3295 18.5C15.3295 20.2444 16.753 21.668 18.4974 21.668C20.2418 21.668 21.6654 20.2444 21.6654 18.5C21.6654 16.7556 20.2418 15.332 18.4974 15.332ZM27.9989 18.5C27.9989 17.1881 28.0108 15.8881 27.9371 14.5786C27.8635 13.0576 27.5165 11.7077 26.4043 10.5954C25.2897 9.48078 23.9421 9.13617 22.4211 9.0625C21.1093 8.98882 19.8093 9.00071 18.4998 9.00071C17.188 9.00071 15.888 8.98882 14.5785 9.0625C13.0575 9.13617 11.7076 9.48316 10.5954 10.5954C9.48077 11.71 9.13617 13.0576 9.0625 14.5786C8.98882 15.8905 9.00071 17.1905 9.00071 18.5C9.00071 19.8095 8.98882 21.1119 9.0625 22.4214C9.13617 23.9424 9.48315 25.2923 10.5954 26.4046C11.71 27.5192 13.0575 27.8638 14.5785 27.9375C15.8904 28.0112 17.1903 27.9993 18.4998 27.9993C19.8117 27.9993 21.1117 28.0112 22.4211 27.9375C23.9421 27.8638 25.292 27.5168 26.4043 26.4046C27.5189 25.29 27.8635 23.9424 27.9371 22.4214C28.0132 21.1119 27.9989 19.8119 27.9989 18.5ZM18.4974 23.3744C15.8 23.3744 13.6231 21.1974 13.6231 18.5C13.6231 15.8026 15.8 13.6256 18.4974 13.6256C21.1948 13.6256 23.3718 15.8026 23.3718 18.5C23.3718 21.1974 21.1948 23.3744 18.4974 23.3744ZM23.5714 14.5643C22.9416 14.5643 22.433 14.0557 22.433 13.4259C22.433 12.7961 22.9416 12.2876 23.5714 12.2876C24.2012 12.2876 24.7098 12.7961 24.7098 13.4259C24.71 13.5755 24.6806 13.7236 24.6235 13.8618C24.5664 14 24.4825 14.1256 24.3768 14.2313C24.271 14.3371 24.1455 14.4209 24.0073 14.4781C23.8691 14.5352 23.721 14.5645 23.5714 14.5643Z"
                fill="#0D0D0D"
              />
            </svg>
          </div>
          <hr className="lin_footer m-0" />
          <p className=" ff_balsamiq fs_xsm fw-normal mb-0 text-center clr_black opacity_07 py-4">
            Copyright ©2022 All rights reserved Plump Kittens
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
