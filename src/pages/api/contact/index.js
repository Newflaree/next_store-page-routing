// Controllers
import { sendEmailController } from './controllers';
// Utils
import {
  messages,
  statusCodes
} from '@/utils';


const handler = ( req, res ) => {
  switch ( req.method ) {
    case 'POST':
      return sendEmailController( req, res );
  
    default:
      return res.status( statusCodes.BAD_REQUEST ).json({
        ok: false,
        message: messages.INVALID_ENDPOINT
      });
  }
}

export default handler;
