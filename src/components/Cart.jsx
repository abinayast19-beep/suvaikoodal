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
    let message = `*Suvaikoodal Healthy Snacks Order*%0A%0A`;

cart.forEach((item, index) => {
  const subtotal = item.selectedSize.price * item.qty;

  message += `${index + 1}. *${item.name}*%0A`;
  message += `Weight : ${item.selectedSize.weight}%0A`;
  message += `Quantity : ${item.qty}%0A`;
  message += `Price : ₹${item.selectedSize.price}%0A`;
  message += `Subtotal : ₹${subtotal}%0A%0A`;
});

const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

message += `────────────────────%0A`;
message += `Total Items : ${totalItems}%0A`;
message += `Grand Total : ₹${total}%0A`;
message += `────────────────────%0A%0A`;

message += `Name : %0A`;
message += `Phone : %0A`;
message += `Address : %0A`;
message += `Pincode : %0A%0A`;

message += `Thank you for choosing *Suvaikoodal Healthy Snacks!*`;

    window.open(
      `https://wa.me/917200592175?text=${message}`,
      "_blank"
    );
  };

  return (
    <div className="fixed right-0 top-0 h-screen w-80 bg-white shadow-2xl p-5 overflow-y-auto z-50">

      <h2 className="text-2xl font-bold mb-5 text-[#6B1E3B]">
        🛒 Your Cart
      </h2>

      {cart.length === 0 ? (
        <div className="text-center mt-20">
          <p className="text-gray-500">
            Your cart is empty.
          </p>
        </div>
      ) : (
        <>
          {cart.map((item, index) => {
            const subtotal = item.selectedSize.price * item.qty;

            return (
              <div
                key={index}
                className="border rounded-xl p-4 mb-4 shadow-sm"
              >
                <h3 className="font-bold text-lg text-[#6B1E3B]">
                  {item.name}
                </h3>

                <p className="text-gray-600 mt-1">
                  Weight : {item.selectedSize.weight}
                </p>

                <p className="text-green-700 font-semibold">
                  ₹{item.selectedSize.price} × {item.qty} = ₹{subtotal}
                </p>

                <div className="flex items-center gap-3 mt-4">

                  <button
                    onClick={() => decreaseQty(index)}
                    className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300"
                  >
                    -
                  </button>

                  <span className="font-bold">
                    {item.qty}
                  </span>

                  <button
                    onClick={() => increaseQty(index)}
                    className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300"
                  >
                    +
                  </button>

                  <button
                    onClick={() => removeItem(index)}
                    className="ml-auto text-red-600 hover:text-red-700 font-medium"
                  >
                    Remove
                  </button>

                </div>
              </div>
            );
          })}

          <div className="border-t pt-4 mt-4">

            <h3 className="text-2xl font-bold text-[#6B1E3B]">
              Grand Total : ₹{total}
            </h3>

            <button
              onClick={orderMessage}
              className="w-full mt-5 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
            >
              📲 Order on WhatsApp
            </button>

          </div>
        </>
      )}
    </div>
  );
}

export default Cart;