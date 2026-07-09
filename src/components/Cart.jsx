import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeItem,
    total,
  } = useCart();

  const orderMessage = () => {
    let message = "Hello Suvaikoodal,%0A%0AI want to order:%0A%0A";

    cart.forEach((item) => {
      message += `• ${item.name} (${item.selectedSize.weight}) x${item.qty} - ₹${
        item.selectedSize.price * item.qty
      }%0A`;
    });

    message += `%0ATotal : ₹${total}%0A%0AName:%0AAddress:%0APhone:`;

    window.open(
      `https://wa.me/917200592175?text=${message}`,
      "_blank"
    );
  };

  return (
    <div className="fixed right-0 top-0 h-screen w-80 bg-white shadow-2xl p-5 overflow-y-auto z-50">

      <h2 className="text-2xl font-bold mb-5">
        🛒 Your Cart
      </h2>

      {cart.length === 0 ? (
        <p>No products added.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={index}
              className="border-b py-4"
            >
              <h3 className="font-bold">
                {item.name}
              </h3>

              <p>{item.selectedSize.weight}</p>

              <p className="text-green-700">
                ₹{item.selectedSize.price}
              </p>

              <div className="flex gap-3 mt-3">

                <button
                  onClick={() => decreaseQty(index)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  -
                </button>

                <span>{item.qty}</span>

                <button
                  onClick={() => increaseQty(index)}
                  className="px-3 py-1 bg-gray-200 rounded"
                >
                  +
                </button>

                <button
                  onClick={() => removeItem(index)}
                  className="ml-auto text-red-600"
                >
                  Remove
                </button>

              </div>

            </div>
          ))}

          <h3 className="text-2xl font-bold mt-5">
            Total : ₹{total}
          </h3>

          <button
            onClick={orderMessage}
            className="w-full mt-5 bg-green-600 text-white py-3 rounded-xl"
          >
            Order on WhatsApp
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;