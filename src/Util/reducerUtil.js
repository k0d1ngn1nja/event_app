export const CreateEventReducer = (initialState, fnMap) =>{
	return (state = initialState, action) =>{
		const handler = fnMap[action.type];

		return handler ? handler(state, action) : state;
	}
}