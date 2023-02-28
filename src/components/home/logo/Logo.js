import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
// import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
import LogoM from '../../../assets/images/logo-m2.png';
import './Logo.scss';

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  const ranOnce = useRef(false);

  useEffect(() => {
    if (ranOnce.current) return; // <- skips subsequent calls

    ranOnce.current = true;

    // gsap.registerPlugin(DrawSVGPlugin);

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 5,
      });

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    );
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      <img className="solid-logo" ref={solidLogoRef} src={LogoM} alt="M" />

      <svg
        width="795"
        height="702"
        viewBox="0 0 795 702"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="svgGroup"
          strokeLinecap="round"
          fillRule="evenodd"
          fontSize="9pt"
          stroke="#ffd700"
          fill="#022c43"
        >
          <path
            ref={outlineLogoRef}
            d="M 594 0 L 795 0 L 795 702 L 624 702 L 624 281 L 467 702 L 329 702 L 171 280 L 171 702 L 0 702 L 0 0 L 202 0 L 399 486 L 594 0 Z"
            vectorEffect="non-scaling-stroke"
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
