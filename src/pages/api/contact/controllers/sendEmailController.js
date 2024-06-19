// Modules
import { sendEmailModule } from '../modules';
// Utils
import { logger } from '@/utils';


const sendEmailController = async ( req, res ) => {
  try {
    const { message } = await sendEmailModule( req );

    res.status( 200 ).json({
      ok: true,
      message
    });
  
  } catch ( error ) {
    logger.consoleErrorsHandler( error, 'sendEmailController' );

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Administrator'
    });
  }
}

export default sendEmailController;
