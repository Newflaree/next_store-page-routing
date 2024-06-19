// Zustand
import { create } from 'zustand';
import { persist } from 'zustand/middleware';


export const useCartState = create(
  persist(
    ( set, get ) => ({
      cart: [],
      getTotalItems: () => {
        const { cart } = get();

        return cart.reduce(
          ( total, item ) => total + item.quantity, 0
        );
      },
      getSummaryInformation: () => {
        const { cart } = get();

        const subTotal = cart.reduce(
          ( subTotal, product ) => product.quantity * product.price + subTotal, 0
        );

        const tax = subTotal * 0.15;
        const total = subTotal + tax;
        const itemsInCart = cart.reduce(
          ( total, item ) => total + item.quantity, 0
        );

        return {
          itemsInCart,
          subTotal,
          tax,
          total
        };
      },
      addProductToCart: ( product ) => {
        const { cart } = get();

        const productInCart = cart.some(
          ( item ) => item.id === product.id
        );

        if ( !productInCart ) {
          set({ cart: [ ...cart, product ] });
          return;
        }

        const updatedCartProducts = cart.map( ( item ) => {
          if ( item.id === product.id ) {
            return {
              ...item,
              quantity: item.quantity + product.quantity,
            }
          }

          return item;
        });

        set({ cart: updatedCartProducts })
      },
      updateProductQuantity: ( product ) => {
        const { cart } = get();

        const updatedCartProducts = cart.map( ( item ) => {
          if ( item.id === product.id ) {
            return { ...item, quantity: quantity };
          }

          return item;
        });

        set({ cart: updatedCartProducts })
      },
      removeProduct: () => {
        const { cart } = get();

        const updatedCartProducts = cart.filter(
          (item) => item.id !== product.id
        );

        set({ cart: updatedCartProducts });
      },
      clearCart: () => {
        set({ cart: [] });
      }
    }),
    {
      name: 'shopping-cart'
    }
  )
);
