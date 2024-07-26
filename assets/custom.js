const textVideoElements = document.querySelectorAll(".text-video-media video");

// Text Video Banner
textVideoElements.forEach(function (tvEl) {
  tvEl.controls = false;
  tvEl.parentElement.addEventListener("click", function () {
    tvEl.previousElementSibling.style.display = "none";
    tvEl.nextElementSibling.style.display = "none";
    tvEl.style.display = "block";
    tvEl.play();
  });
});

// // Curves Background
// const svgBackgrounds = [
//   `<svg width="494" height="655" viewBox="0 0 494 655" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <g style="mix-blend-mode:plus-lighter" opacity="0.15" filter="url(#filter0_f_1_852)">
//         <path d="M258.055 466.31C235.044 476.736 211.358 485.083 187.29 491.374C145.138 502.339 93.819 513.436 53.6166 491.064C14.1134 469.196 -7.23805 420.879 -19.5655 374.895C-34.5531 318.798 -40.7759 259.499 -70.9391 210.553C-92.8412 175.026 -127.341 128.67 -101.187 82.8614C-38.6957 -26.4254 125.533 77.3431 196.07 112.878C221.177 125.523 246.256 139.178 268.279 157.942C307.888 191.75 325.862 239.186 335.065 293.708C342.681 338.875 354.462 392.528 319.852 428.055C302.415 445.949 279.484 456.606 258.055 466.31Z" fill="url(#paint0_linear_1_852)"/>
//         </g>
//         <defs>
//         <filter id="filter0_f_1_852" x="-260.577" y="-115.839" width="753.897" height="769.871" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
//         <feFlood flood-opacity="0" result="BackgroundImageFix"/>
//         <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
//         <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_1_852"/>
//         </filter>
//         <linearGradient id="paint0_linear_1_852" x1="-199.984" y1="-140.705" x2="-217.703" y2="535.208" gradientUnits="userSpaceOnUse">
//         <stop stop-color="#65D9FF"/>
//         <stop offset="1" stop-color="#0834CA"/>
//         </linearGradient>
//         </defs>
//       </svg>
//     `,
// ];

// const backgroundSVG = document.querySelector(".custom-background-items");
// backgroundSVG.innerHTML = generateCombinedString(5, svgBackgrounds);
// function getRandomArrayElement(arr) {
//   const randomIndex = Math.floor(Math.random() * arr.length);
//   return arr[randomIndex];
// }

// function generateCombinedString(num, sourceArray) {
//   const stringArray = [];
//   for (let i = 0; i < num; i++) {
//     stringArray.push(getRandomArrayElement(sourceArray));
//   }

//   const combinedString = stringArray.join("");
//   return combinedString;
// }
