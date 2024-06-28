// Mongoose
import mongoose from 'mongoose';
// Utils
import { logger } from '../utils';


/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */
const mongoConnection = {
    isConnected: 0
}

export const connect = async() => {
  try {
    if ( mongoConnection.isConnected ) {
      logger.dbNowConnect();
      return;
    }

    if ( mongoose.connections.length > 0 ) {
      mongoConnection.isConnected = mongoose.connections[0].readyState;

      if ( mongoConnection.isConnected === 1 ) {
        logger.dbPrevConnect();
        return;
      }

      await mongoose.disconnect();
    }

    await mongoose.connect( process.env.MONGO_CNN_LOCAL || '');
    mongoConnection.isConnected = 1;

    logger.dbConnect();

  } catch ( error ) {
    await mongoose.disconnect();
    logger.dbErrorDisconnect();
  }
}

export const disconnect = async() => {
  try {
    if ( process.env.NODE_ENV === 'development' ) return;

    if ( mongoConnection.isConnected === 0 ) return;

    await mongoose.disconnect();
    mongoConnection.isConnected = 0;

    logger.dbDisconnect();

  } catch ( error ) {
    await mongoose.disconnect();
    logger.dbErrorDisconnect();
  }
}
