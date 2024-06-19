// Utils
import {
  logger,
  messages,
  statusCodes
} from '@/utils';


const sendEmailService = async ( transporter, mailOptions ) => {
  try {
    await transporter.sendMail( mailOptions );

    return {
      statusCode: statusCodes.SUCCESS,
      ok: true,
      message: messages.SEND_EMAIL
    }
  } catch ( error ) {
    logger.consoleErrorsHandler( error, 'sendEmailService' );

    return {
      statusCode: statusCodes.BAD_REQUEST,
      ok: false,
      message: messages.SEND_EMAIL_ERROR
    }
  }
}

export default sendEmailService;
