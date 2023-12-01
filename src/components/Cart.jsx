import React, { useState } from 'react'; 

const Cart = () => {
  const [cartItems, setCartItems] = useState([]); // State to manage cart items

  // Function to remove an item from the cart
  const removeItemFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  // Calculate total bill for items in the cart
  const calculateTotalBill = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {/* Display cart items */}
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <span>{item.name} - ${item.price.toFixed(2)}</span>
                <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          {/* Display total bill */}
          <p>Total Bill: ${calculateTotalBill().toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
