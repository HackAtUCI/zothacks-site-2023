// TODO add cubic bezier ease functions

export const lightShake = {
	animate: { rotate: [-20, 20] },
	transition: {
		rotate: {
			repeat: Infinity,
			duration: 3,
			repeatType: "mirror",
		},
	},
};

export const reverseLightShake = {
	animate: { rotate: [20, -20] },
	transition: {
		rotate: {
			repeat: Infinity,
			duration: 3,
			repeatType: "mirror",
		},
	},
};

export const quickShake = {
	animate: { rotate: [-20, 20] },
	transition: {
		rotate: {
			repeat: Infinity,
			duration: 0.1,
			repeatDelay: 1,
			repeatType: "mirror",
		},
	},
};

export const fastShake = {
	animate: { rotate: [-20, 20] },
	transition: {
		rotate: {
			repeat: Infinity,
			duration: 0.001,
			repeatDelay: 1,
			repeatType: "mirror",
		},
	},
};

export const reverseFastShake = {
	animate: { rotate: [-20, 20] },
	transition: {
		rotate: {
			repeat: Infinity,
			duration: 0.001,
			repeatDelay: 1,
			repeatType: "mirror",
		},
	},
};
