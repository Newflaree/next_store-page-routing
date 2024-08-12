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
const authLoginModule = async ( req ) => {
  try {
    return {
      message: 'authLoginModule',
      ok: true,
      statusCode: 200
    }
  } catch ( error ) {
    logger.consoleErrorsHandler( error, 'authLoginModule' );
  }
}

export default authLoginModule;
