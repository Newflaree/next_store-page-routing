// Modules
import { sendEmailModule } from '../modules';
// Utils
import {
  logger,
  messages,
  statusCodes
} from '@/utils';


const sendEmailController = async ( req, res ) => {
  try {
    const {
      ok,
      statusCode,
      message
    } = await sendEmailModule( req );

    res.status( statusCode ).json({
      ok,
      message
    });
  
  } catch ( error ) {
    logger.consoleErrorsHandler( error, 'sendEmailController' );

    res.status( statusCodes.SERVER_ERROR ).json({
      ok: false,
      message: messages.SERVER_ERROR
    });
  }
}

export default sendEmailController;
