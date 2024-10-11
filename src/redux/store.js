import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/AuthSlice';
// import { bookAppointment } from './slices/appointmentAction';
const store = configureStore({
    reducer: {
        auth: authReducer,
        // appointmentAction: bookAppointment
    }
})

export default store