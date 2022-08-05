import { keyframes } from "@emotion/react";

export const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;
export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const grow = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;


// 0% {
//   -webkit-transform: perspective(400px) rotateX(0deg);
//   -ms-transform: perspective(400px) rotateX(0deg);
//   transform: perspective(400px) rotateX(0deg);
//   opacity: 1;
// }
// 100% {
//   -webkit-transform: perspective(400px) rotateX(90deg);
//   -ms-transform: perspective(400px) rotateX(90deg);
//   transform: perspective(400px) rotateX(90deg);
//   opacity: 0;
// }
