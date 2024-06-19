import 'colors';

export const listenServerLogger = ( port ) => {
  console.clear();
  console.log( `${ '[SERVER.LISTEN]'.bgGreen } Server listening on port: ${ port.green }` );
}

export const consoleErrorsHandler = ( error, fileName ) => {
  const words = fileName.replace(/([a-z])([A-Z])/g, '$1 $2').split(' ');
  const type = words.pop().toUpperCase();
  const convention = words.map((word) => word.toUpperCase()).join('-');

  console.log( `${ `[${ type }.${ convention }]`.bgRed } ${ error }` );
}

export const dbConnect = () => {
  console.log( `${ '[CONFIG.DATABASE-CONNECT]'.bgGreen } Database ${ 'ONLINE'.green }` );
}

export const dbNowConnect = () => {
  console.log( `${ '[CONFIG.DATABASE-CONNECT]'.bgGreen } Now we are connected` );
}

export const dbPrevConnect = () => {
  console.log( `${ '[CONFIG.DATABASE-CONNECT]'.bgGreen } Using previous connction` );
}

export const dbDisconnect = () => {
  console.log( `${ '[CONFIG.DATABASE-DISCONNECT]'.bgGreen } Disconnected from Database` );
}

export const dbErrorDisconnect = ( error ) => {
  console.log( `${ '[CONFIG.DATABASE-CONNECT]'.bgRed } ${ error }` );
}
