import React from "react";

const PictureIcon = ({
  width = "18",
  height = "18",
  fill = "#5e47d1",
  ...props
}) => (
  <svg
    fill={fill}
    width={width}
    height={height}
    viewBox="0 0 455 455"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path d="M0,0v455h455V0H0z M259.405,80c17.949,0,32.5,14.551,32.5,32.5s-14.551,32.5-32.5,32.5s-32.5-14.551-32.5-32.5 S241.456,80,259.405,80z M375,375H80v-65.556l83.142-87.725l96.263,68.792l69.233-40.271L375,299.158V375z" />
  </svg>
);

export default PictureIcon;
