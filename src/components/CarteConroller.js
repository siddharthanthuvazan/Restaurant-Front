import React, { useEffect, useState } from "react";
import { Card, CardGroup, Image, Button, Container } from "react-bootstrap";
import Panier from "./Panier";
import { Link } from 'react-router-dom';


export default function CarteController(props) {
  const backUrl = "http://localhost:8081/carte";
  const [menuList, setMenuList] = useState([]);
  const [showPreview, setShowPreview] = useState(false);
  const [selectedCarte, setSelectedCarte] = useState({});
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch(`${backUrl}/getCarte`)
      .then((response) => response.json())
      .then((data) => {
        setMenuList(data);
      })
      .catch((error) => {
        console.error("Error fetching menu list:", error);
      });
  }, []);

  const handleClose = () => {
    setShowPreview(false);
  };

  const handleClick = (carte) => {
    setSelectedCarte(carte);
    setShowPreview(true);
  };

  const addToCart = (carte) => {
    setCartItems([...cartItems, { id: carte.id, title: carte.titre, price: carte.prix }]);
    setShowPreview(false);
  };

  const handleCheckout = () => {
    fetch(`${backUrl}/checkoutOrder`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Order has been checked out:", data);
      })
      .catch((error) => {
        console.error("Error checking out the order:", error);
      });
  };
  return (
    <Container>
      <div className="carte">
        <div className="container">
          <h3 className="title">Menu</h3>
          <div className="products-container" data-name="menus">
            {menuList.map((carte) => (
              <div key={carte.id} className="cards">
                <div onClick={() => handleClick(carte)}>
                  <div className="product">
                    <Image src={carte.image} width="100%" />
                    <h3 className="title">{carte.titre}</h3>
                    <div className="price">
                      <span>
                        <i className="fa fa-eur" aria-hidden="true"></i>
                        {carte.prix}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showPreview && (
        <div className="popup">
          <div className="popup-content">
            <div className="preview active" data-target="menus">
              <i
                className="fa-sharp fa-regular fa-circle-xmark"
                style={{ padding: "20px" }}
                onClick={handleClose}
              ></i>
              <Image src={selectedCarte.image} />
              <h3>{selectedCarte.titre}</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <div>
                <p>{selectedCarte.description}</p>
                <div className="price">
                  <span>
                    <i className="fa fa-eur" aria-hidden="true"></i>
                    {selectedCarte.prix}
                  </span>
                </div>
                <div className="buttons">
                  <Link
                    to="/panier"
                    className="cart"
                    onClick={() => handleClick(addToCart(selectedCarte))}
                  >
                    Add to Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
  
      <Panier cartItems={cartItems} />
    </Container>
  );
  } 


























// export default function CarteController( props) {
//   const backUrl = "http://localhost:8081/carte";
//   const [menuList, setMenuList] = useState([]);
//   const [showPreview, setShowPreview] = useState(false);
//   const [selectedCarte, setSelectedCarte] = useState({});
//   const [cartItems, setCartItems] = useState([]);
  
//   useEffect(() => {
//     fetch(`${backUrl}/getCarte`)
//       .then((response) => response.json())
//       .then((data) => {
//         setMenuList(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching menu list:", error);
//       });
//   }, []);

//   const handleClose = () => {
//     setShowPreview(false);
//   };

//   const handleClick = (carte) => {
//     setSelectedCarte(carte);
//     setShowPreview(true);
//     setCartItems([...cartItems, { id: carte.id, title: carte.titre, price: carte.prix }]);
//   };
//   const addToCart = (carte) => {
//     setCartItems([...cartItems, carte]);
//     setShowPreview(false);
//   };
//   // function handleAddToCart(item) {
//   //   props.addToCart(item);
//   // }


//   const handleCheckout = () => {
//     fetch(`${backUrl}/checkoutOrder`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(cartItems),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Order has been checked out:", data);
//       })
//       .catch((error) => {
//         console.error("Error checking out the order:", error);
//       });
//   };

//   return (
//     <Container>
//       <div className="carte">
//         <div className="container">
//           <h3 className="title">Menu</h3>
//           <div className="products-container" data-name="menus">
//             {menuList.map((carte) => (
//               <div key={carte.id} className="cards">
//                 <div onClick={() => handleClick(carte)}>
//                   <div className="product">
//                     <Image src={carte.image} width="100%" />
//                     <h3 className="title">{carte.titre}</h3>
//                     <div className="price">
//                       <span>
//                         <i className="fa fa-eur" aria-hidden="true"></i>
//                         {carte.prix}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       {showPreview && (
//         <div className="popup">
//           <div className="popup-content">
//             <div className="preview active" data-target="menus">
//               <i className="fa-sharp fa-regular fa-circle-xmark" style={{padding:'20px'}} onClick={handleClose}></i>
//               <Image src={selectedCarte.image} />
//               <h3>{selectedCarte.titre}</h3>
//                  <div className="stars">
//                    <i className="fas fa-star"></i>
//                    <i className="fas fa-star"></i>
//                    <i className="fas fa-star"></i>
//                <i className="fas fa-star"></i>
//                    <i className="fas fa-star-half-alt"></i>
//                   </div>
//               <div>
//                 <p>{selectedCarte.description}</p>
//                 <div className="price">
//                   <span>
//                     <i className="fa fa-eur" aria-hidden="true"></i>
//                     {selectedCarte.prix}
//                   </span>
//                 </div>
//                 <div className="buttons">
//                 <Link to="/panier" className="cart" onClick={() => addToCart(selectedCarte)}>Add to Cart</Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//     <Panier cart={cartItems}/>
//     </Container>
  
    
//     );
   
// }