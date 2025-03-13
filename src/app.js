import express, { urlencoded } from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import cors from 'cors';
import userRoutes from './routes/user.routes';
import meditionRoutes from './routes/medition.routes';

const expressApp = express();


//midlewares
expressApp.use(morgan('dev'));  
expressApp.use(cors());
expressApp.use(helmet());
expressApp.use(cookieParser())
expressApp.use(urlencoded({extended: false}));
expressApp.use(express.json());

//routes

expressApp.use('/users', userRoutes);
expressApp.use('/meditions', meditionRoutes);


export default expressApp;
