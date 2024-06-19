// Controllers
import { sendEmailController } from './controllers';


const handler = ( req, res ) => {
  switch ( req.method ) {
    case 'POST':
      return sendEmailController( req, res );
  
    default:
      return res.status( 400 ).json({
        ok: false,
        message: 'Endpoint not implemented'
      });
  }
}

export default handler;
