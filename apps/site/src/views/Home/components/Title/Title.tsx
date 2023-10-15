import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const svgVariants = {
	hidden: { rotate: -180 },
	visible: {
		rotate: 0,
		transition: { duration: 1 },
	},
};

const transition = {
	pathLength: {
		duration: 5,
		repeat: Infinity,
		repeatType: "mirror",
		ease: "easeInOut",
	},
};
const pathVariants = {
	hidden: {
		opacity: 0,
		pathLength: 0,
	},
	visible: {
		opacity: 1,
		pathLength: 1,
	},
};
export default function Title() {
	const ref = useRef<SVGPathElement>(null);
	const isInView = useInView(ref);
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="650"
			height="150"
			viewBox="-10 0 650 100"
			fill="none"
		>
			<motion.path
				d="M15.76 90.168C13.968 90.168 12.048 90.0827 10 89.912C7.952 89.7413 6.07467 89.272 4.368 88.504C2.66133 87.6507 1.33867 86.2853 0.4 84.408V79.928C0.4 76.4293 1.25333 73.2293 2.96 70.328C4.66667 67.3413 6.75733 64.6107 9.232 62.136C9.91467 61.4533 10.9387 60.4293 12.304 59.064C13.7547 57.6133 15.2907 56.0347 16.912 54.328C18.6187 52.6213 20.1973 51.0427 21.648 49.592C23.184 48.1413 24.336 47.032 25.104 46.264C28.0053 44.1307 30.6933 41.7413 33.168 39.096C35.728 36.3653 38.5013 33.976 41.488 31.928L43.408 30.008V29.624H38.416C37.648 29.624 36.368 29.752 34.576 30.008C32.784 30.264 30.992 30.5627 29.2 30.904C27.408 31.16 26.0427 31.416 25.104 31.672C23.7387 31.8427 22.16 32.2693 20.368 32.952C18.576 33.6347 17.04 33.976 15.76 33.976H13.84C11.8773 33.976 10.0853 33.4213 8.464 32.312C6.928 31.1173 6.16 29.5387 6.16 27.576C6.16 25.9547 6.8 24.632 8.08 23.608C9.44533 22.4987 11.0667 21.6027 12.944 20.92C14.9067 20.2373 16.8267 19.7253 18.704 19.384C20.5813 19.0427 22.0747 18.7867 23.184 18.616C24.2933 18.4453 25.9573 18.232 28.176 17.976C30.3947 17.72 32.7413 17.464 35.216 17.208C37.6907 16.8667 39.8667 16.6107 41.744 16.44C43.6213 16.184 44.7733 16.056 45.2 16.056H49.68C51.1307 16.056 52.8373 16.0987 54.8 16.184C56.848 16.184 58.8107 16.3973 60.688 16.824C62.6507 17.2507 64.272 18.0187 65.552 19.128C66.9173 20.152 67.6 21.688 67.6 23.736C67.6 25.1867 67.2587 26.552 66.576 27.832C65.9787 29.112 65.2107 30.264 64.272 31.288C63.4187 32.2267 62.48 33.1227 61.456 33.976C60.5173 34.8293 59.5787 35.6827 58.64 36.536C57.7867 37.304 56.3787 38.4987 54.416 40.12C52.4533 41.7413 50.2347 43.6187 47.76 45.752C45.2853 47.8 42.8107 49.848 40.336 51.896C37.9467 53.944 35.7707 55.8213 33.808 57.528C31.9307 59.1493 30.5653 60.344 29.712 61.112C28.8587 61.88 28.0053 62.7333 27.152 63.672C26.2987 64.5253 25.4453 65.3787 24.592 66.232C23.2267 67.8533 21.904 69.304 20.624 70.584C19.344 71.7787 18.192 73.4 17.168 75.448L17.68 75.832H19.6C24.6347 75.832 29.5413 75.32 34.32 74.296C39.184 73.272 44.1333 72.76 49.168 72.76C51.1307 72.76 53.008 72.9733 54.8 73.4C56.6773 73.8267 58.2133 74.6373 59.408 75.832C60.6027 77.0267 61.2 78.8187 61.2 81.208C61.2 83.0853 60.6453 84.4933 59.536 85.432C58.4267 86.2853 57.0613 86.7973 55.44 86.968L16.4 90.168H15.76ZM115.716 99C109.572 99 103.855 97.6773 98.564 95.032C93.2733 92.3867 89.0067 88.632 85.764 83.768C82.5213 78.904 80.9 73.2293 80.9 66.744C80.9 62.3067 81.796 58.2107 83.588 54.456C85.4653 50.616 87.812 47.032 90.628 43.704C93.5293 40.376 96.4307 37.2613 99.332 34.36C100.868 32.824 102.703 31.7147 104.836 31.032C106.969 30.264 109.145 29.88 111.364 29.88C116.911 29.88 122.244 30.4773 127.364 31.672C132.484 32.8667 137.049 34.8293 141.06 37.56C145.156 40.2053 148.399 43.7467 150.788 48.184C153.177 52.536 154.372 57.8693 154.372 64.184C154.372 69.3893 153.263 74.1253 151.044 78.392C148.825 82.6587 145.839 86.328 142.084 89.4C138.415 92.472 134.276 94.8613 129.668 96.568C125.145 98.1893 120.495 99 115.716 99ZM113.156 84.792C117.849 84.792 122.287 83.9813 126.468 82.36C130.649 80.6533 134.063 78.136 136.708 74.808C139.439 71.3947 140.804 67.2133 140.804 62.264C140.804 57.912 139.524 54.2853 136.964 51.384C134.489 48.4827 131.332 46.3493 127.492 44.984C123.652 43.5333 119.727 42.808 115.716 42.808C113.668 42.808 112.004 43.1067 110.724 43.704C109.444 44.3013 108.292 45.112 107.268 46.136C106.244 47.16 105.049 48.3547 103.684 49.72C101.295 52.1947 99.1613 54.9253 97.284 57.912C95.4067 60.8133 94.468 64.1413 94.468 67.896C94.468 73.8693 96.26 78.1787 99.844 80.824C103.428 83.4693 107.865 84.792 113.156 84.792ZM189.794 101.56C187.149 101.56 185.186 100.749 183.906 99.128C182.626 97.5067 181.773 95.544 181.346 93.24C181.005 90.8507 180.834 88.6747 180.834 86.712V81.848C180.834 76.472 180.919 71.0533 181.09 65.592C181.346 60.1307 181.517 54.2427 181.602 47.928C179.469 48.0133 177.634 48.1413 176.098 48.312C174.647 48.4827 173.154 48.568 171.618 48.568C167.693 48.568 165.73 46.648 165.73 42.808C165.73 41.3573 165.986 39.992 166.498 38.712C167.01 37.3467 168.077 36.4933 169.698 36.152L180.962 33.592C182.413 33.2507 183.351 32.3547 183.778 30.904C184.29 29.368 184.546 27.6187 184.546 25.656C184.631 23.608 184.759 21.6027 184.93 19.64C185.186 17.6773 185.826 16.056 186.85 14.776C187.959 13.496 189.794 12.856 192.354 12.856C194.146 12.856 195.469 13.368 196.322 14.392C197.261 15.3307 197.901 16.4827 198.242 17.848C198.583 19.2133 198.754 20.536 198.754 21.816C198.754 21.9867 198.711 22.584 198.626 23.608C198.541 24.5467 198.413 25.4853 198.242 26.424C198.157 27.3627 198.114 27.96 198.114 28.216V32.312H213.73C215.607 32.312 217.058 33.208 218.082 35C219.106 36.7067 219.618 38.456 219.618 40.248C219.618 40.5893 219.49 41.2293 219.234 42.168C218.978 43.1067 218.509 44.0027 217.826 44.856C217.143 45.624 216.205 46.008 215.01 46.008H198.626C198.541 46.008 198.37 46.0933 198.114 46.264C197.858 46.3493 197.559 46.6053 197.218 47.032L196.962 47.416C196.535 49.72 196.237 51.5973 196.066 53.048C195.895 54.4133 195.767 55.6933 195.682 56.888C195.682 57.9973 195.682 59.3627 195.682 60.984C195.682 65.6773 195.767 70.3707 195.938 75.064C196.194 79.7573 196.322 84.7067 196.322 89.912C196.322 91.6187 196.194 93.368 195.938 95.16C195.682 96.952 195.085 98.4453 194.146 99.64C193.207 100.92 191.757 101.56 189.794 101.56ZM241.935 100.28C240.74 100.28 239.844 99.8533 239.247 99C238.65 98.0613 238.266 96.9947 238.095 95.8C237.924 94.52 237.839 93.4533 237.839 92.6V86.2C237.839 82.7867 238.138 79.3733 238.735 75.96C239.418 72.4613 239.802 68.8773 239.887 65.208H239.759V64.696C239.759 64.0133 239.674 63.5867 239.503 63.416C239.418 63.16 239.375 63.032 239.375 63.032C237.156 63.032 234.98 62.6053 232.847 61.752C230.799 60.8987 229.775 59.1493 229.775 56.504C229.775 53.688 230.714 51.6827 232.591 50.488C234.468 49.2933 236.687 48.5253 239.247 48.184C240.527 47.5013 241.167 46.0507 241.167 43.832V21.176C241.167 19.4693 241.252 17.7627 241.423 16.056C241.594 14.264 242.148 12.7707 243.087 11.576C244.111 10.296 245.86 9.656 248.335 9.656C250.298 9.656 252.047 10.3813 253.583 11.832C255.204 13.1973 256.015 14.8613 256.015 16.824V47.544H287.887C288.826 47.544 289.679 47.3733 290.447 47.032C291.3 46.6907 291.898 46.0507 292.239 45.112C292.239 43.9173 292.324 42.2107 292.495 39.992C292.751 37.7733 293.007 35.4693 293.263 33.08C293.604 30.6053 293.903 28.344 294.159 26.296C294.5 24.248 294.714 22.7547 294.799 21.816C295.14 19.3413 295.866 17.0373 296.975 14.904C298.17 12.6853 300.218 11.576 303.119 11.576C304.314 11.576 305.423 11.7467 306.447 12.088C307.556 12.4293 308.41 13.3253 309.007 14.776V18.104C309.007 22.5413 308.58 26.8507 307.727 31.032C306.874 35.2133 306.447 39.48 306.447 43.832V47.672C308.495 48.44 310.074 49.336 311.183 50.36C312.292 51.384 312.847 52.8347 312.847 54.712C312.847 56.5893 312.548 57.9547 311.951 58.808C311.439 59.6613 310.756 60.2587 309.903 60.6C309.135 60.9413 308.367 61.24 307.599 61.496C306.831 61.752 306.234 62.2213 305.807 62.904V81.08C305.807 82.616 305.594 84.4507 305.167 86.584C304.826 88.7173 304.143 90.5947 303.119 92.216C302.095 93.752 300.644 94.52 298.767 94.52C296.036 94.52 294.074 93.7093 292.879 92.088C291.684 90.4667 290.959 88.504 290.703 86.2C290.447 83.896 290.319 81.7627 290.319 79.8C290.319 77.1547 290.404 74.552 290.575 71.992C290.746 69.3467 290.831 66.744 290.831 64.184C290.831 63.928 290.788 63.672 290.703 63.416C290.703 63.0747 290.575 62.7333 290.319 62.392C288.783 62.392 286.735 62.3493 284.175 62.264C281.7 62.1787 279.14 62.136 276.495 62.136C273.85 62.0507 271.418 61.9653 269.199 61.88C267.066 61.7947 265.53 61.752 264.591 61.752H261.519C259.642 61.752 258.106 62.008 256.911 62.52C255.802 63.032 255.076 64.0133 254.735 65.464C254.564 68.792 254.436 72.248 254.351 75.832C254.266 79.3307 254.01 82.8293 253.583 86.328C253.156 89.8267 252.26 93.1547 250.895 96.312C250.81 97.2507 250.554 98.1467 250.127 99C249.7 99.8533 248.89 100.28 247.695 100.28H241.935ZM350.089 100.28C346.164 100.28 342.494 99.384 339.081 97.592C335.668 95.8 332.809 93.4107 330.505 90.424C328.201 87.352 326.708 83.896 326.025 80.056V73.528C326.025 68.7493 326.878 63.928 328.585 59.064C330.292 54.2 332.724 49.72 335.881 45.624C339.038 41.4427 342.793 38.1147 347.145 35.64C351.497 33.08 356.276 31.8 361.481 31.8C363.614 31.8 365.449 32.184 366.985 32.952C368.606 33.72 370.057 34.5307 371.337 35.384C372.702 36.152 374.025 36.6213 375.305 36.792C375.988 33.2933 376.926 30.9893 378.121 29.88C379.316 28.6853 380.937 28.088 382.985 28.088C385.46 28.088 387.124 28.8987 387.977 30.52C388.916 32.056 389.385 34.0187 389.385 36.408C389.385 41.1013 389.257 45.7093 389.001 50.232C388.83 54.7547 388.745 59.4053 388.745 64.184C388.745 67.9387 388.958 71.8213 389.385 75.832C389.812 79.8427 390.025 83.7253 390.025 87.48V90.168C390.025 92.0453 389.641 93.7947 388.873 95.416C388.19 96.952 386.612 97.72 384.137 97.72C381.833 97.72 380.169 97.0373 379.145 95.672C378.206 94.2213 377.566 92.5147 377.225 90.552C376.969 88.504 376.713 86.6693 376.457 85.048L375.945 84.536C373.044 87.4373 370.441 90.0827 368.137 92.472C365.918 94.8613 363.444 96.7813 360.713 98.232C357.982 99.5973 354.441 100.28 350.089 100.28ZM348.809 87.352C351.796 87.352 354.612 86.456 357.257 84.664C359.988 82.7867 362.42 80.3973 364.553 77.496C366.686 74.5093 368.35 71.3947 369.545 68.152C370.74 64.9093 371.337 61.88 371.337 59.064C371.337 56.9307 371.038 54.7973 370.441 52.664C369.844 50.4453 368.82 48.568 367.369 47.032C366.004 45.496 364.041 44.728 361.481 44.728C358.665 44.728 355.892 45.7093 353.161 47.672C350.516 49.6347 348.126 52.152 345.993 55.224C343.86 58.2107 342.153 61.368 340.873 64.696C339.593 67.9387 338.953 70.8827 338.953 73.528C338.953 75.6613 339.252 77.7947 339.849 79.928C340.532 82.0613 341.598 83.8533 343.049 85.304C344.5 86.6693 346.42 87.352 348.809 87.352ZM432.441 97.08C426.297 97.08 421.134 95.5867 416.953 92.6C412.857 89.528 409.742 85.56 407.609 80.696C405.561 75.7467 404.537 70.456 404.537 64.824C404.537 58.424 405.945 52.536 408.761 47.16C411.662 41.784 415.63 37.4747 420.665 34.232C425.785 30.904 431.588 29.24 438.073 29.24C440.036 29.24 442.212 29.4533 444.601 29.88C447.076 30.2213 449.465 30.904 451.769 31.928C454.073 32.8667 455.95 34.1467 457.401 35.768C458.937 37.3893 459.705 39.48 459.705 42.04C459.705 43.9173 459.022 45.368 457.657 46.392C456.292 47.416 454.628 47.928 452.665 47.928C450.617 47.928 448.782 47.416 447.161 46.392C445.54 45.2827 443.918 44.216 442.297 43.192C440.676 42.0827 438.841 41.528 436.793 41.528C433.977 41.528 431.417 42.3813 429.113 44.088C426.809 45.7947 424.846 47.9707 423.225 50.616C421.604 53.2613 420.324 56.0773 419.385 59.064C418.532 61.9653 418.105 64.696 418.105 67.256C418.105 71.608 418.958 74.9787 420.665 77.368C422.457 79.672 424.846 81.2933 427.833 82.232C430.905 83.0853 434.318 83.512 438.073 83.512C441.572 83.512 444.814 82.8293 447.801 81.464C450.873 80.0987 453.945 78.6907 457.017 77.24H459.577C463.417 77.24 465.337 79.16 465.337 83C465.337 85.304 464.441 87.2667 462.649 88.888C460.942 90.5093 458.724 91.8747 455.993 92.984C453.262 94.008 450.361 94.8187 447.289 95.416C444.217 96.0133 441.358 96.44 438.713 96.696C436.068 96.952 433.977 97.08 432.441 97.08ZM485.83 100.28C483.953 100.28 482.374 99.5973 481.094 98.232C479.899 96.8667 479.302 95.3307 479.302 93.624V91.192L483.782 44.472V15.544C483.782 13.752 483.867 11.704 484.038 9.39999C484.209 7.09599 484.806 5.09066 485.83 3.384C486.939 1.67733 488.817 0.823997 491.462 0.823997C493.851 0.823997 495.515 1.63466 496.454 3.256C497.478 4.87733 498.075 6.79733 498.246 9.016C498.502 11.2347 498.63 13.1973 498.63 14.904C498.63 19.8533 498.417 24.9307 497.99 30.136C497.649 35.256 497.435 40.8453 497.35 46.904H498.886C499.057 46.904 499.825 46.6907 501.19 46.264C502.555 45.752 504.177 45.1973 506.054 44.6C507.931 43.9173 509.766 43.2347 511.558 42.552C513.435 41.784 514.929 41.144 516.038 40.632C517.574 39.864 519.281 39.0107 521.158 38.072C523.035 37.048 524.955 36.152 526.918 35.384C528.881 34.616 530.715 34.232 532.422 34.232C534.385 34.232 535.921 34.9573 537.03 36.408C538.225 37.7733 538.822 39.4373 538.822 41.4C538.822 43.704 537.969 45.3253 536.262 46.264C534.555 47.1173 532.849 47.8853 531.142 48.568C530.289 48.9947 528.753 49.6773 526.534 50.616C524.401 51.5547 521.969 52.5787 519.238 53.688C516.507 54.712 513.862 55.736 511.302 56.76C508.742 57.6987 506.566 58.5093 504.774 59.192V59.576L505.414 60.216C506.011 60.8133 506.609 61.3253 507.206 61.752C507.889 62.1787 508.529 62.6907 509.126 63.288C510.406 64.056 512.326 65.2933 514.886 67C517.446 68.7067 520.177 70.5413 523.078 72.504C526.065 74.4667 528.795 76.3013 531.27 78.008C533.83 79.6293 535.665 80.7813 536.774 81.464C537.883 82.3173 539.078 83.2133 540.358 84.152C541.638 85.0053 542.747 86.0293 543.686 87.224C544.71 88.3333 545.222 89.656 545.222 91.192C545.222 93.24 544.625 94.9467 543.43 96.312C542.321 97.6773 540.955 98.36 539.334 98.36C537.286 98.36 535.238 97.7627 533.19 96.568C531.227 95.3733 529.307 93.9653 527.43 92.344C525.638 90.7227 523.931 89.3573 522.31 88.248C521.457 87.6507 519.835 86.584 517.446 85.048C515.142 83.512 512.539 81.8053 509.638 79.928C506.822 78.0507 504.134 76.2587 501.574 74.552C499.099 72.8453 497.179 71.5227 495.814 70.584H495.302L494.79 71.736L492.23 94.392C491.889 96.0987 491.078 97.5067 489.798 98.616C488.603 99.7253 487.281 100.28 485.83 100.28ZM580.872 100.92C578.483 100.92 575.752 100.707 572.68 100.28C569.608 99.9387 566.621 99.256 563.72 98.232C560.819 97.208 558.387 95.672 556.424 93.624C554.547 91.576 553.608 88.888 553.608 85.56C553.608 83.3413 554.163 81.4213 555.272 79.8C556.381 78.0933 558.173 77.24 560.648 77.24C562.184 77.24 563.379 77.624 564.232 78.392C565.085 79.16 565.811 80.0987 566.408 81.208C567.091 82.3173 567.859 83.4693 568.712 84.664C569.651 85.7733 570.888 86.712 572.424 87.48C574.045 88.248 576.221 88.632 578.952 88.632C580.915 88.632 583.048 88.4187 585.352 87.992C587.741 87.48 589.789 86.584 591.496 85.304C593.203 84.024 594.056 82.2747 594.056 80.056C594.056 78.0933 593.245 76.5573 591.624 75.448C590.003 74.2533 587.912 73.2293 585.352 72.376C582.792 71.5227 580.104 70.6693 577.288 69.816C574.472 68.8773 571.784 67.7253 569.224 66.36C566.664 64.9947 564.573 63.2027 562.952 60.984C561.331 58.68 560.52 55.736 560.52 52.152C560.52 48.824 561.331 45.9653 562.952 43.576C564.573 41.1867 566.664 39.224 569.224 37.688C571.869 36.0667 574.685 34.9147 577.672 34.232C580.744 33.464 583.688 33.08 586.504 33.08C588.125 33.08 590.003 33.2933 592.136 33.72C594.269 34.0613 596.36 34.6587 598.408 35.512C600.456 36.3653 602.163 37.56 603.528 39.096C604.893 40.5467 605.576 42.3813 605.576 44.6C605.576 48.5253 603.613 50.488 599.688 50.488H598.024C595.464 49.0373 593.288 47.928 591.496 47.16C589.704 46.392 587.656 46.008 585.352 46.008C584.328 46.008 582.877 46.136 581 46.392C579.208 46.5627 577.587 47.032 576.136 47.8C574.685 48.568 573.96 49.8053 573.96 51.512C573.96 52.9627 574.771 54.1573 576.392 55.096C578.013 56.0347 580.104 56.9307 582.664 57.784C585.224 58.6373 587.912 59.576 590.728 60.6C593.544 61.624 596.232 62.9467 598.792 64.568C601.352 66.104 603.443 68.0667 605.064 70.456C606.685 72.8453 607.496 75.832 607.496 79.416C607.496 84.6213 606.173 88.8027 603.528 91.96C600.968 95.1173 597.64 97.4213 593.544 98.872C589.533 100.237 585.309 100.92 580.872 100.92Z"
				fill="transparent"
				strokeWidth="5"
				stroke="black"
				initial="hidden"
				animate="visible"
				variants={pathVariants}
				transition={transition}
			/>
		</svg>
	);
}
