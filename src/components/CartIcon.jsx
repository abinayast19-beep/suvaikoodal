import { useState } from "react";
import { useCart } from "../context/CartContext";
import Cart from "./Cart";

function CartIcon() {
  const { cart } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-24 right-6 z-50 bg-[#6B1E3B] text-white p-4 rounded-full shadow-lg"
      >
        🛒

        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white w-6 h-6 rounded-full text-xs flex items-center justify-center">
            {cart.length}
          </span>
        )}
      </button>

      {open && <Cart />}
    </>
  );
}

export default CartIcon;