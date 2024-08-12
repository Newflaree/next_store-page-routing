// Utils
import {
  logger,
  messages,
  statusCodes
} from '../../../../utils';


/**
 * Handler description
 *
 * PATH: /api/...
 * AUTH-REQUIRED: false
 * ADMIN-REQUIRED: false
 *
 * @param { Object } req - The HTTP request object.
 * @param { Object } res - The HTTP response object.
 * @returns { void }
 */
const authRegisterController = async (
  req,
  res
) => {
  try {
    res.status( 200 ).json({
      ok: true,
      message: 'authRegisterController'
    });
  
  } catch ( error ) {
    logger.consoleErrorsHandler( error, 'authRegisterController' );

    res.status( statusCodes.SERVER_ERROR ).json({
      ok: false,
      message: messages.SERVER_ERROR
    });
  }
}

export default authRegisterController;
