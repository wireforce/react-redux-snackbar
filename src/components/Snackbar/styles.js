function getDefaultStyles(theming) {
	return {
		snack: {
			display: 'flex',
			position: 'fixed',
			bottom: 0,
			left: 0,
			zIndex: 999,
			width: '100%',
			transition: 'transform 200ms ease-out',
			willChange: 'transform',
			transform: 'translate(0, 100%)',
			backgroundColor: theming.backgroundColor || 'rgba(0, 0, 0, 0.9)',
			padding: '13px 16px',
			largeScreen: {
				left: '50%',
				transform: 'translate(-50%, 100%)',
				borderRadius: '2px',
				padding: '20px 24px',
				minWidth: '400px',
				maxWidth: '600px',
			}
		},
		label: {
			flex: 4,
			font: theming.labelFont || 'normal 14px arial, sans-serif',
			color: theming.labelColor || '#fff',
		},
		button: {
			flex: 1,
			textAlign: 'right',
			font: theming.buttonFont || 'bold 14px arial, sans-serif',
			color: theming.buttonColor || '#bada55',
			border: 'none',
			background: 'none',
			padding: 0,
			margin: 0,
		},
	};
}

function getTransitionStyles(elem, largeScreen, visible, theming) {
	if (elem === 'snack') {
		if (visible) {
			const small = `translate(${(theming.transitionToXY || {}).smallScreen || '0, 0'})`;
			const large = `translate(${(theming.transitionToXY || {}).largeScreen || '-50%, 0'})`;
			return {
				transform: largeScreen ? large : small,
			};
		}
		return {};
	}
	return {
		transition: 'opacity 200ms ease-out',
		transitionDelay: '150ms',
		willChange: 'opacity',
		opacity: visible ? 1 : 0,
	};
}

function getComputedStyles(elem, largeScreen, visible, theming = {}, customStyles = {}) {
	let styles = {
		...getDefaultStyles(theming)[elem],
		...customStyles[elem],
	};
	delete styles.largeScreen;
	if (largeScreen) {
		styles = {
			...styles,
			...(getDefaultStyles(theming)[elem] || {}).largeScreen,
			...(customStyles[elem] || {}).largeScreen,
		};
	}
	styles = { ...styles, ...getTransitionStyles(elem, largeScreen, visible, theming) };
	return styles;
}

export default getComputedStyles;
