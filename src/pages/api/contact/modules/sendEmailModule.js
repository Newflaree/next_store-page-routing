// Services
import {
  prepareEmailOptionsService,
  sendEmailService,
  setUpEmailTemplateService
} from '../services';
// Utils
import {
  logger,
  statusCodes
} from '@/utils';


const sendEmailModule = async ( req ) => {
  // Desestructurate body data
  const {
    emailAddress,
    subject
  } = req.body;
  
  // Read local template and replace placeholders with real values
  const { template } = await setUpEmailTemplateService( req );

  // Set Up email options
  const {
    mailOptions,
    transporter
  } = await prepareEmailOptionsService(
    subject,
    template,
    emailAddress
  );

  try {
    // Send email
    const {
      ok,
      statusCode,
      message
    } = await sendEmailService(
      transporter,
      mailOptions
    );

    return {
      ok,
      statusCode,
      message
    }
  } catch ( error ) {
    logger.consoleErrorsHandler( error, 'sendEmailModule' );

    return {
      ok: false,
      statusCode: statusCodes.BAD_REQUEST,
      message: error
    }
  }
}

export default sendEmailModule;
