// Modules
import { sendEmailModule } from '../modules';


const sendEmailController = async ( req, res ) => {
  try {
    const { message } = await sendEmailModule( req );

    res.status( 200 ).json({
      ok: true,
      message
    });
  
  } catch ( error ) {
    //TODO: Implement errorHandler

    res.status( 500 ).json({
      ok: false,
      msg: 'Something went wrong. Talking the Administrator'
    });
  }
}

export default sendEmailController;
