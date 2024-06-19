// Node
import fs from 'fs';
import path from 'path';
// Utils
import { logger } from '@/utils';


const setUpEmailTemplateService = async ( req ) => {
  const {
    name,
    lastName,
    emailAddress,
    subject,
    message
  } = req.body;

  try {
    const templatePath = path.join( process.cwd(), 'email', 'emailTemplate.html' );

    let template = fs.readFileSync( templatePath, 'utf8' );
    template = template.replace( '{{name}}', name )
      .replace( '{{lastName}}', lastName )
      .replace( '{{emailAddress}}', emailAddress )
      .replace( '{{subject}}', subject )
      .replace( '{{message}}', message )

    console.log( template );

    return {
      template
    }
  } catch ( error ) {
    logger.consoleErrorsHandler( error, 'setUpEmailTemplateService' );
  }
}

export default setUpEmailTemplateService;
