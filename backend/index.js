import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { router as AuthRouter } from './Routes/AuthRouter.js';
import { router as AdminRouter } from './Routes/AdminRouter.js';
import { router as ClientRouter } from './Routes/ClientRouter.js';
import { router as ServiceProviderRouter } from './Routes/ServiceProviderRouter.js';
import { router as UploadRouter } from "./Routes/UploadRouter.js"
import { router as addServiceProvider } from './Routes/ProviderRoute.js'
import { router as ListProvider } from "./Routes/ListProvider.js"
import { router as appointmentRoute } from "./Routes/AppointmentRoute.js"
import './Models/db.js';  // Import your database config

// Load environment variables
dotenv.config();

// Initialize the Express app
const app = express();
const PORT = process.env.PORT || 8080;

// Root route
app.get('/', (req, res) => {
    res.send('PONG');
});

// Middleware
app.use(express.json());  // Replaces body-parser
app.use(cors({
    origin: 'http://localhost:5173',  // React app URL
    credentials: true,  // Allow credentials like cookies
}));
app.use(cookieParser());

// Routes
app.use('/auth', AuthRouter);
app.use('/admin', AdminRouter);
app.use('/client', ClientRouter);
app.use('/serviceprovider', ServiceProviderRouter);
app.use('/upload', UploadRouter)
app.use('/addServiceProvider', addServiceProvider)
app.use('/list', ListProvider)
app.use('/book', appointmentRoute)
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
