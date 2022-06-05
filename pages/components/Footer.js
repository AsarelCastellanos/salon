import Image from "next/image";
import React from "react";

const Footer = ({ businessDays, firstAddress, secondAddress }) => {
  return (
    <footer className="bg-primary body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
        <Image
          src="/logos/vss_logo.png"
          width="50"
          height="65"
          layout="fixed"
          alt="Vicious Streak Salon"
        />
        <span className="ml-3 text-xl">Vicious Streak Salon</span>
      </a>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a
          href="https://www.facebook.com/vidaliahair"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a
          href="https://www.instagram.com/viciousstreaksalon"
          target="_blank"
          rel="noreferrer"
          className="ml-3 text-white"
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a
          href="https://www.yelp.com/biz/vicious-streak-salon-santa-ana"
          target="_blank"
          rel="noreferrer"
          className="ml-3 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 171 171"
          >
            <g
              fill="none"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
            >
              <path
                d="M0,171.99181v-171.99181h171.99181v171.99181z"
                fill="none"
              ></path>
              <g fill="#ffffff">
                <path d="M72.98227,6.86672c-9.56531,0.3607 -29.37727,6.31898 -33.69235,10.76765c-1.6432,1.56305 -2.05734,3.9143 -1.6432,5.47735c0.81492,1.56305 34.09312,52.06148 34.09312,52.06148c4.92961,7.82859 7.49461,6.96023 8.73703,6.57281c1.22906,-0.40078 5.33039,-1.87031 4.51547,-11.26195c-0.41414,-10.58062 -3.70055,-57.1514 -4.10133,-59.50265c-0.82828,-1.95047 -2.05735,-3.52688 -4.52883,-3.92766c-0.86836,-0.18703 -2.01727,-0.24047 -3.37992,-0.18703zM125.31094,54.72c-0.96187,0.04008 -1.89703,0.33398 -2.71195,0.9218c-2.565,2.52492 -1.65656,0.73477 -16.41867,20.29289l-6.98695,8.99086c-1.6432,1.95047 -1.25578,5.22352 0.38742,7.57477c1.6432,2.35125 3.87422,3.59367 7.00031,2.9925c1.22906,-0.40078 3.70055,-0.7882 8.20265,-1.96383c28.32188,-6.25219 28.5757,-6.21211 29.81813,-6.98695c1.62985,-1.17563 2.45812,-2.73867 2.45812,-5.08992v-0.38742c-0.82828,-6.25219 -12.97195,-23.07164 -18.71648,-25.81031c-1.02867,-0.38742 -2.05735,-0.58781 -3.03258,-0.53437zM32.11594,81.97313c-1.6432,0 -3.70055,0.7882 -4.94297,2.73867c-2.87227,3.92766 -3.75399,16.41867 -2.93906,25.03547c0.41414,2.73867 0.82828,4.96969 1.6432,6.53273c1.22906,1.96383 2.87227,3.13945 4.92961,3.13945c1.22906,0 0.2939,-0.3607 24.94195,-7.4011l11.10164,-3.52688c2.87227,-0.7882 4.87617,-2.75203 4.87617,-5.87812c0,-3.12609 -1.52297,-5.71781 -4.39523,-6.89344l-7.80187,-3.12609c-26.70539,-10.58062 -26.18438,-10.6207 -27.41344,-10.6207zM106.34063,109.52016c-2.1375,-0.16031 -4.1414,0.37406 -5.66438,2.0039c-1.32258,1.44281 -2.32453,5.54414 -0.68133,7.89539l4.51547,6.63961c14.78883,22.71094 14.86898,23.8732 16.09805,24.66141c1.6432,1.56305 3.70055,1.5764 5.75789,0.7882c6.57281,-2.35125 19.42453,-17.91492 20.23945,-24.18047c0.41414,-1.95047 -0.40078,-3.9143 -2.05735,-5.86477c-0.81492,-0.7882 -2.52492,-1.06875 -25.54313,-8.21602l-10.52719,-3.33984c-0.70805,-0.20039 -1.42945,-0.33398 -2.1375,-0.38742zM78.87375,116.38688c-2.2043,-0.24047 -4.32844,0.20039 -5.5575,1.96383l-5.34375,6.25219c-18.48937,20.74711 -19.3043,21.92273 -19.71844,23.09836c-0.41414,0.7882 -0.41414,1.56305 -0.41414,2.35125c0.41414,1.16227 0.82828,1.95047 1.6432,3.1261c4.51547,4.7025 24.47437,12.0368 31.04719,10.86117c2.05735,-0.38742 3.70055,-1.57641 4.51547,-3.52687c0.41414,-1.17563 0.40078,-1.95047 0.40078,-26.61188v-11.35547c0.01336,-3.43336 -1.49625,-4.5689 -4.38187,-5.74453c-0.70805,-0.20039 -1.45617,-0.34735 -2.19094,-0.41414z"></path>
              </g>
            </g>
          </svg>
        </a>
      </span>
    </div>
  </footer>
  );
};

export default Footer;
