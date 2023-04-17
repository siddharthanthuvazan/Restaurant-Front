import React from "react";



function Panier(props) {
  const cartItems = props.cartItems || []; // make sure cartItems is defined
  const total = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex((i) => i.id === item.id);

    if (existingItemIndex !== -1) {
      // If item already exists in the cart, increase the quantity
      cartItems[existingItemIndex].qty += 1;
    } else {
      // Otherwise, add the item to the cart with a quantity of 1
      cartItems.push({ ...item, qty: 1 });
    }

    props.onCartChange(cartItems);
  };

  return (
    <div>
      <h3>Mon panier</h3>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.qty} x {item.price}€
          </li>
        ))}
      </ul>
      <h4>Total: {total}€</h4>
    </div>
  );
}

export default Panier;















// function Panier(props) {
//   const cartItems = props.cartItems || []; // make sure cartItems is defined
//   const total = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
//   return (
//     <div>
//       <h3>Mon panier</h3>
//       <ul>
//         {cartItems.map((item) => (
//           <li key={item.id}>
//             {item.name} - {item.qty} x {item.price}€
//           </li>
//         ))}
//       </ul>
//       <h4>Total: {total}€</h4>
//     </div>
//   );
// }
// export default Panier;















// const panier = ({props}) => {


//   return(
//     <div className="cart-items">
//       <div className="cart-items-headers">Cart Items</div>

//       {props.cartItems.length === 0 && (
//         <div className="cart-items-empty"> No Items are added to the cart</div>
//       )}

//       <div>
//         {props.cartItems.map((items)=>(
//           <div key={items.id} className="cart-items-list">
//               <Image className="cart-items-images" src={items.image} alt={items.name}/>
//               <div>

//               </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }



// export default panier;













// export default function Panier(props) {
//   const { cartItems, setCartItems } = props;

//   const handleRemoveItem = (item) => {
//     const newCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
//     setCartItems(newCartItems);
//   };

//   return (
//     <div className="panier">
//       <h3>Selected Items</h3>
//       <ul>
//         {props.cartItems.map((item) => (
//           <li key={item.id}>
//             <span>{item.title}</span>
//             <span>{item.price}</span>
//             <button onClick={() => handleRemoveItem(item)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }