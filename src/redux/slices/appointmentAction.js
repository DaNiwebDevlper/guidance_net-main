import axios from 'axios';

// Action to book an appointment
export const bookAppointment = (appointmentData) => async (dispatch) => {
    try {
        dispatch({ type: 'APPOINTMENT_BOOK_REQUEST' });

        // Correct API URL
        const { data } = await axios.post('http://localhost:8080/book/appointments', appointmentData);

        dispatch({ type: 'APPOINTMENT_BOOK_SUCCESS', payload: data });
    } catch (error) {
        dispatch({
            type: 'APPOINTMENT_BOOK_FAIL',
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};


// Action to fetch user appointments
export const getUserAppointments = (email) => async (dispatch) => {
    try {
        dispatch({ type: 'USER_APPOINTMENTS_REQUEST' });
        const { data } = await axios.get(`/appointments/user/${email}`);
        dispatch({ type: 'USER_APPOINTMENTS_SUCCESS', payload: data });
    } catch (error) {
        dispatch({
            type: 'USER_APPOINTMENTS_FAIL',
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};
