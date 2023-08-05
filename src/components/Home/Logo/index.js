import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/logoJu.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

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
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />

<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="2480.000000pt" height="3508.000000pt" viewBox="0 0 2480.000000 3508.000000"
 preserveAspectRatio="xMidYMid meet">

<g 
 className="svg-container"
transform="translate(0.000000,3508.000000) scale(0.100000,-0.100000)"

fill="none" stroke="none">
<path 
 ref={outlineLogoRef}
d="M16500 23808 c0 -6645 -4 -10674 -10 -10898 -59 -2138 -329 -3517
-839 -4282 -447 -669 -1182 -1087 -2181 -1237 -300 -45 -466 -55 -880 -55
-414 -1 -532 8 -810 55 -910 155 -1640 604 -2192 1349 -253 342 -417 663 -564
1107 -226 683 -384 1697 -434 2793 -14 301 -13 291 -48 285 -15 -3 -1366 -156
-3002 -340 -1636 -184 -2994 -338 -3018 -341 l-43 -6 6 -242 c8 -313 23 -691
36 -886 221 -3437 1381 -5926 3499 -7510 1363 -1019 3088 -1607 5175 -1764
717 -54 1605 -54 2375 -1 2240 157 4052 751 5495 1803 1477 1076 2507 2443
3119 4138 321 891 547 2098 666 3554 31 385 49 697 82 1405 9 185 12 3042 15
10933 l3 10682 -3225 0 -3225 0 0 -10542z"/>
</g>
</svg>
    </div>
  )
}

export default Logo
