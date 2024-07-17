// Bcrypt
import bcrypt from 'bcryptjs';
// Database
import { db } from './';
// Models
import { User } from '../models';
// Utils
import { logger } from '../utils';


export const checkUserEmailPassword = async ( email = '', password = '' ) => {
  try {
    await db.connect();
    const user = await User.findOne({ email });
    await db.disconnect();

    if ( !user ) return null;

    if ( !bcrypt.compareSync( password, user.password ) ) return null

    const { role, name, _id } = user;

    return {
      _id,
      email: email.toLocaleLowerCase(),
      role,
      name
    }
  } catch ( error ) {
    logger.consoleErrorsHandler( error, 'checkUserEmailPasswordDatabase' );
  }
}

export const oAuthToDbUser = async ( oAuthEmail = '', oAuthName = '' ) => {
  try {
    await db.connect();
    const user = await User.findOne({ email: oAuthEmail });

    if ( user ) {
      await db.disconnect();
      const { _id, name, email, role } = user;

      return {
        _id,
        name,
        email,
        role
      }
    }

    const newUser = new User({
      email: oAuthEmail,
      name: oAuthName,
      password: '@',
      role: 'CLIENT_ROLE'
    });

    await newUser.save();
    await db.disconnect();

    const {
      _id,
      name,
      email,
      role
    } = newUser;

    return {
      _id,
      name,
      email,
      role
    }
  } catch ( error ) {
    logger.consoleErrorsHandler( error, 'oAuthToDbUserDatabase' );
  }
}
