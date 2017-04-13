import { actionTypes } from './snackbarReducer';

/**
 * To display a snack:
 *
 * dispatch(showSnack('myUniqueId', {
 * 	   label: 'Yay, there is a new version. Please reload the page to update',
 * 	   timeout: 5000,
 * 	   button: { label: 'RELOAD', action: 'redirect', href:  }
 * });
 *
 * @param {String} id
 * @param {Object} data
 * @returns {Object}
 */
export const showSnack = (id, data = { label: '', timeout: 7000, button: {} }) => {
	return {
		type: actionTypes.SHOW_SNACK,
		payload: { id, data },
	};
};

/**
 * To dismiss a snack:
 *
 * dispatch(dismissSnack('myUniqueId');
 *
 * @param {String} id
 * @returns {Object}
 */
export const dismissSnack = (id) => {
	return {
		type: actionTypes.DISMISS_SNACK,
		payload: { id },
	};
};
