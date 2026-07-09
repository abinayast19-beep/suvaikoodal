import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product, selectedSize) => {
    const existing = cart.find(
      (item) =>
        item.id === product.id &&
        item.selectedSize.weight === selectedSize.weight
    );

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id &&
          item.selectedSize.weight === selectedSize.weight
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          selectedSize,
          qty: 1,
        },
      ]);
    }
  };

  const increaseQty = (index) => {
    const updated = [...cart];
    updated[index].qty++;
    setCart(updated);
  };

  const decreaseQty = (index) => {
    const updated = [...cart];

    if (updated[index].qty > 1) {
      updated[index].qty--;
      setCart(updated);
    } else {
      removeItem(index);
    }
  };

  const removeItem = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.selectedSize.price * item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeItem,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}