const CREATE_EVENT = "CREATE_EVENT";
const UPDATE_EVENT = "UPDATE_EVENT";
const DELETE_EVENT = "DELETE_EVENT";

export const createEvent = (event) =>{
	return{
		type: CREATE_EVENT,
		payload: {
			event
		}
	}
}

export const updateEvent = (event) =>{
	return{
		type: UPDATE_EVENT,
		payload: {
			event
		}
	}	
}

export const deleteEvent = (eventId) =>{
	return{
		type: DELETE_EVENT,
		payload: {
			eventId
		}
	}
}