/**
 * Created by cuadraman on 12/3/16.
 */

import React from 'react';

export default (props) => {
  const csSunWithRefStyles = {
    transition: 'all 1s ease',
  };

  if (props.turn) {
    Object.assign(csSunWithRefStyles, {
      WebkitTransform: 'rotateY(20deg)',
      transform: 'rotateY(20deg)',
    });
  }
  return (
    <svg style={{ marginBottom: 30, width: 200 }} viewBox="0 0 294 174">
      <defs>
        <radialGradient cx="49.6607692%" cy="12.7574738%"
                        fx="49.6607692%" fy="12.7574738%" r="86.3258333%"
                        id="radialGradient-1">
          <stop stopColor="#FFFFFF" offset="0%"></stop>
          <stop stopColor="#F5F8FC" offset="0.893822%"></stop>
          <stop stopColor="#C8DCED" offset="7.323171%"></stop>
          <stop stopColor="#A5C8E4" offset="13.54%"></stop>
          <stop stopColor="#8DBCDE" offset="19.4%"></stop>
          <stop stopColor="#7EB5DA" offset="24.78%"></stop>
          <stop stopColor="#79B3D9" offset="29.21%"></stop>
          <stop stopColor="#0069B0" offset="64.61%"></stop>
          <stop stopColor="#14517E" offset="84.09%"></stop>
          <stop stopColor="#173C5A" offset="100%"></stop>
        </radialGradient>
        <radialGradient cx="48.2410897%" cy="14.8764574%"
                        fx="48.2410897%" fy="14.8764574%" r="75.7991026%"
                        id="radialGradient-2">
          <stop stopColor="#FFFFFF" offset="0%"></stop>
          <stop stopColor="#F5F8FC" offset="1.100086%"></stop>
          <stop stopColor="#C8DCED" offset="9.013115%"></stop>
          <stop stopColor="#A5C8E4" offset="16.66%"></stop>
          <stop stopColor="#8DBCDE" offset="23.88%"></stop>
          <stop stopColor="#7EB5DA" offset="30.5%"></stop>
          <stop stopColor="#79B3D9" offset="35.95%"></stop>
          <stop stopColor="#0069B0" offset="85.39%"></stop>
          <stop stopColor="#105386" offset="89.79%"></stop>
          <stop stopColor="#061C32" offset="99.77%"></stop>
          <stop stopColor="#051B30" offset="100%"></stop>
        </radialGradient>
        <radialGradient cx="49.6607692%" cy="21.2633034%"
                        fx="49.6607692%" fy="21.2633034%" r="77.3147436%"
                        id="radialGradient-3">
          <stop stopColor="#FFFFFF" offset="0%"></stop>
          <stop stopColor="#F5F8FC" offset="1.736077%"></stop>
          <stop stopColor="#C8DCED" offset="14.22%"></stop>
          <stop stopColor="#A5C8E4" offset="26.3%"></stop>
          <stop stopColor="#8DBCDE" offset="37.69%"></stop>
          <stop stopColor="#7EB5DA" offset="48.13%"></stop>
          <stop stopColor="#79B3D9" offset="56.74%"></stop>
          <stop stopColor="#0069B0" offset="85.39%"></stop>
          <stop stopColor="#105386" offset="89.79%"></stop>
          <stop stopColor="#061C32" offset="99.77%"></stop>
          <stop stopColor="#051B30" offset="100%"></stop>
        </radialGradient>
      </defs>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fileRule="evenodd" >
        <g id="eye" transform="translate(4.000000, 6.000000)">
          <g id="outline_eye" >
            <path d="M0.6,98.6 C0.6,98.6 138.3,-114 285,110.7 C285,110.7 145.3,239.9 0.6,98.6 L0.6,98.6 Z" id="Outline_Eye" stroke="#333030" strokeWidth="5" fill="#E2E2EC"></path>
            <g id="White_Eye" transform="translate(28.000000, 7.000000)" fill="#F4F2F2">
              <ellipse id="Oval" cx="115" cy="78" rx="114.3" ry="78"></ellipse>
            </g>
            <path d="M287,109.3 C287,109.3 272.3,112 222.3,57.3 C172.3,2.6 222.3,35.3 222.3,35.3 L287,109.3 L287,109.3 Z" id="Shine_Right" fill="#96C0E7"></path>
            <path d="M4.3,100 C71.8,43.6 81.1,30.1 99.5,23 C111.5,18.4 113.3,6.1 97.7,9.4 C55,18.2 4.3,100 4.3,100 L4.3,100 Z" id="Shine_Left" fill="#96C1E7"></path>
            <g id="Upper_Outline" transform="translate(1.000000, 0.000000)" stroke="#333030" strokeWidth="12">
              <path d="M0.4,95.3 C-2.6,100.1 139,-128.1 283.6,106.7" id="Shape"></path>
            </g>
          </g>
          <g style={csSunWithRefStyles}>
            <g id="Outline_Blue_Eye" transform="translate(56.000000, 7.000000)" stroke="#393944" strokeWidth="3" fill="#34334F" >
              <path d="M173.7,74.7 C173.7,115.7 134.9,149 87,149 C39.1,149 0.3,115.7 0.3,74.7 C0.3,31 39.1,0.4 87,0.4 C134.9,0.4 173.7,33.7 173.7,74.7 L173.7,74.7 Z" id="Outline_Blue_Eye_1_"></path>
            </g>
            <g id="Eye_Blue" transform="translate(63.000000, 14.000000)" >
              <g id="Eye_Blue_1_">
                <ellipse id="Oval" fill="#FFFFFF" cx="80.3" cy="69.2" rx="78" ry="66.9"></ellipse>
                <ellipse id="Oval" opacity="0.52" fill="url(#radialGradient-1)" cx="80.3" cy="69.2" rx="78" ry="66.9"></ellipse>
                <ellipse id="Oval" opacity="0.47" fill="url(#radialGradient-2)" cx="80.3" cy="69.2" rx="78" ry="66.9"></ellipse>
                <ellipse id="Oval" opacity="0.45" fill="url(#radialGradient-3)" cx="80.3" cy="69.2" rx="78" ry="66.9"></ellipse>
              </g>
            </g>
            <g id="Pupil_1_" transform="translate(116.000000, 57.000000)" fill="#020202" >
              <circle id="Pupil" cx="24" cy="23.7" r="23.3"></circle>
            </g>
            <g id="Shine_Pupil_1_" transform="translate(109.000000, 48.000000)" fill="#FDFDFE" >
              <circle id="Shine_Pupil" cx="13.1" cy="13.4" r="13.1"></circle>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

