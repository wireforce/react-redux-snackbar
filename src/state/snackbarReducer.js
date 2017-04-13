export const actionTypes = {
	SHOW_SNACK: 'RRS_SHOW_SNACK',
	DISMISS_SNACK: 'RRS_DISMISS_SNACK',
};

const initialState = {
	queue: [],
};

export default (state = initialState, { type, payload } = {}) => {
	let queue;
	switch (type) {
	case actionTypes.SHOW_SNACK:
		queue = state.queue.slice();
		queue.push({ id: payload.id, data: payload.data });
		return { queue };
	case actionTypes.DISMISS_SNACK:
		queue = state.queue.filter((snack) => {
			return snack.id !== payload.id;
		});
		return { queue };
	default:
		return state;
	}
};
