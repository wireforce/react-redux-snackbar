export const actionTypes = {
	SHOW_SNACK: 'SHOW_SNACK',
	DISMISS_SNACK: 'DISMISS_SNACK',
};

const initialState = {
	queue: [],
};

export default (state = initialState, { type, payload } = {}) => {
	switch (type) {
	case [actionTypes.SHOW_SNACK]:
		return {
			queue: state.queue.push({
				id: payload.id,
				data: payload.data || {}
			}).slice(),
		};
	case [actionTypes.DISMISS_SNACK]:
		return {
			queue: state.queue.filter((snack) => {
				return snack.id !== payload.id;
			}).slice(),
		};
	default:
		return state;
	}
};
