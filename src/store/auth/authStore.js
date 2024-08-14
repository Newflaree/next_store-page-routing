// Zustand
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
// Next Auth
import {
  useSession,
  signOut
} from 'next-auth/react';
// Axios
import axios from 'axios';
// JS Cookie
import Cookie from 'js-cookie';
// Api
import { mupuApi } from '../../api';


export const useAuthStore = create( devtools( ( set, get ) => ({
  isLoggedIn: false,
  user: undefined,

  checkToken: async () => {},
  loginUser: async () => {},
  registerUser: async () => {},

  logoutUser: async () => {
    Cookie.remove( 'cart' );
    Cookie.remove( 'firsName' );
    Cookie.remove( 'lastName' );
    Cookie.remove( 'address' );
    Cookie.remove( 'address2' );
    Cookie.remove( 'zip' );
    Cookie.remove( 'city' );
    Cookie.remove( 'country' );
    Cookie.remove( 'phone' );

    signOut();
  }
})));
