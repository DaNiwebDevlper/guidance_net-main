// reducers/appointmentReducers.js
export const appointmentReducer = (state = {}, action) => {
    switch (action.type) {
        case 'APPOINTMENT_BOOK_REQUEST':
            return { loading: true };
        case 'APPOINTMENT_BOOK_SUCCESS':
            return { loading: false, success: true };
        case 'APPOINTMENT_BOOK_FAIL':
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const userAppointmentsReducer = (state = { appointments: [] }, action) => {
    switch (action.type) {
        case 'USER_APPOINTMENTS_REQUEST':
            return { loading: true, appointments: [] };
        case 'USER_APPOINTMENTS_SUCCESS':
            return { loading: false, appointments: action.payload };
        case 'USER_APPOINTMENTS_FAIL':
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
