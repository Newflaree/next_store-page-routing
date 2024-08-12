// Utils
import {
  messages,
  statusCodes
} from './';


export const isValidEmail = ( email ) => {
  const match = String( email )
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

  return !!match;
}

export const isEmail = ( email ) => {
  return isValidEmail( email )
    ? undefined
    : messages.INVALID_EMAIL
}

export const validateReqBody = ({
  email = '',
  password = '',
  name = ''
}) => {
  if ( isValidEmail( email ) ) return {
    statusCode: statusCodes.BAD_REQUEST,
    ok: false,
    message: messages.INVALID_EMAIL
  }

  if ( password.length < 6 ) return {
    statusCode: statusCodes.BAD_REQUEST,
    ok: false,
    message: messages.INVALID_PASS
  }

  if ( name.length < 3 ) return {
    statusCode: statusCodes.BAD_REQUEST,
    ok: false,
    message: messages.INVALID_NAME
  }

  return null;
}
