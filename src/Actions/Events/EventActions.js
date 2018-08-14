export const CREATE_EVENT = "CREATE_EVENT";
export const UPDATE_EVENT = "UPDATE_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";

export const createEventAction = (event) =>{
	return{
		type: CREATE_EVENT,
		payload: {
			event
		}
	}
}

export const updateEventAction = (event) =>{
	return{
		type: UPDATE_EVENT,
		payload: {
			event
		}
	}	
}

export const deleteEventAction = (eventId) =>{
	return{
		type: DELETE_EVENT,
		payload: {
			eventId
		}
	}
}