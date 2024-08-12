// Utils
import {
  logger,
  messages,
  statusCodes
} from '../../../../utils';

/**
 * Module Desciption
 *
 * @param {Object} req - Express request object containing query parameters
 * @returns {Object} - An object containing the total count of products and an array of products
 */
const authRegisterModule = async ( req ) => {
  try {
    return {
      message: 'authRegisterModule',
      ok: true,
      statusCode: 200
    }
  } catch ( error ) {
    logger.consoleErrorsHandler( error, 'authRegisterModule' );
  }
}

export default authRegisterModule;
