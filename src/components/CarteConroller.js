import React, { useState, useEffect } from 'react';
import { Button, Card, Container, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function CarteController(props) {
  const backUrl = 'http://localhost:8081/carte';
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const { title } = useParams();

  useEffect(() => {
    fetch(`${backUrl}/getCarte`)
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => {
        console.error('Error fetching menu list:', error);
      });
  }, []);

  useEffect(() => {
    if (selectedItem) {
      setTotalPrice(selectedItem.prix * quantity);
    }
  }, [quantity, selectedItem]);

  useEffect(() => {
    if (items.length > 0 && title) {
      const filteredItem = items.find((item) => {
        const itemTitle = item.titre.toLowerCase();
        const searchTitle = title.toLowerCase();
        return itemTitle === searchTitle;
      });
  
      if (filteredItem) {
        setSelectedItem(filteredItem);
      }
    }
  }, [title, items]);
  

  const addToCart = () => {
    const updatedItem = { ...selectedItem };
    updatedItem.quantity = quantity;
    updatedItem.totalPrice = totalPrice;
    props.addToCart(updatedItem);
    setQuantity(1);
    hideDetails();
  };

  const hideDetails = () => {
    setSelectedItem(null);
  };

  const showDetails = (item) => {
    setSelectedItem(item);
  };

  const groupItemsByName = () => {
    const groupedItems = {};

    for (const item of items) {
      let itemName = item.titre.toLowerCase();
      let itemCategory = '';

      if (itemName.includes('briyani')) {
        itemCategory = 'Briyani';
      } else if (itemName.includes('jus')) {
        itemCategory = 'Jus';
      } else if (itemName.includes('curry')) {
        itemCategory = 'Curry';
      } else if (itemName.includes('ice cream')) {
        itemCategory = 'Ice Cream';
      } else if (itemName.includes('sweet')) {
        itemCategory = 'Sweets';
      } else {
        itemCategory = 'Other';
      }

      if (groupedItems.hasOwnProperty(itemCategory)) {
        groupedItems[itemCategory].push(item);
      } else {
        groupedItems[itemCategory] = [item];
      }
    }

    return groupedItems;
  };

  const renderGroupedItems = () => {
    const groupedItems = groupItemsByName();

    return Object.entries(groupedItems).map(([category, items]) => (
      <div key={category}>
        <h3 className="title">{category}</h3>
        <div className="products-container">
          {items.map((item) => (
            <div key={item.id} className="cards">
              <div onClick={() => showDetails(item)}>
                <div className="product">
                  <Image src={item.image} width="100%" />
                  <h3 className="title">{item.titre}</h3>
                  <div className="price">
                    <span>
                      <i className="fa fa-eur" aria-hidden="true"></i>
                      {item.prix}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <Container>
      <div className="carte">
        <div className="container">
          <h3 className="title">Menu</h3>
          {renderGroupedItems()}
        </div>
      </div>
      {selectedItem && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={hideDetails}>
              &times;
            </span>
            <h2>{selectedItem.titre}</h2>
            <Image src={selectedItem.image} fluid />
            <p>{selectedItem.description}</p>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
            <p>{selectedItem.prix} €</p>
            <Button onClick={addToCart}>Add to Cart</Button>
          </div>
        </div>
      )}
    </Container>
  );
}

export default CarteController;
























// import React, { useState, useEffect } from 'react';
// import { Button, Card, Container, Image } from 'react-bootstrap';
// import { useParams } from 'react-router-dom';

// function CarteController(props) {
//   const backUrl = 'http://localhost:8081/carte';
//   const [items, setItems] = useState([]);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const { title } = useParams();

//   useEffect(() => {
//     fetch(`${backUrl}/getCarte`)
//       .then((response) => response.json())
//       .then((data) => setItems(data))
//       .catch((error) => {
//         console.error('Error fetching menu list:', error);
//       });
//   }, []);

//   useEffect(() => {
//     if (selectedItem) {
//       setTotalPrice(selectedItem.prix * quantity);
//     }
//   }, [quantity, selectedItem]);

//   useEffect(() => {
//     if (items.length > 0) {
//       const filteredItem = items.find(
//         (item) => item.titre.toLowerCase() && item.titre=== title.toLowerCase()
//       );
//       if (filteredItem) {
//         setSelectedItem(filteredItem);
//       }
//     }
//   }, [title, items]);

//   const addToCart = () => {
//     const updatedItem = { ...selectedItem };
//     updatedItem.quantity = quantity;
//     updatedItem.totalPrice = totalPrice;
//     props.addToCart(updatedItem);
//     setQuantity(1);
//     hideDetails();
//   };

//   const hideDetails = () => {
//     setSelectedItem(null);
//   };

//   const showDetails = (item) => {
//     setSelectedItem(item);
//   };

//   const groupItemsByName = () => {
//     const groupedItems = {};

//     for (const item of items) {
//       let itemName = item.titre.toLowerCase();
//       let itemCategory = '';

//       if (itemName.includes('BRIYANI')) {
//         itemCategory = 'BRIYANI';
//       } else if (itemName.includes('jus')) {
//         itemCategory = 'Jus';
//       } else if (itemName.includes('curry')) {
//         itemCategory = 'Curry';
//       } else if (itemName.includes('ice cream')) {
//         itemCategory = 'Ice Cream';
//       } else if (itemName.includes('sweet')) {
//         itemCategory = 'sweets';
//       } else {
//         itemCategory = 'Other';
//       }

//       if (groupedItems.hasOwnProperty(itemCategory)) {
//         groupedItems[itemCategory].push(item);
//       } else {
//         groupedItems[itemCategory] = [item];
//       }
//     }

//     return groupedItems;
//   };

//   const renderGroupedItems = () => {
//     const groupedItems = groupItemsByName();

//     return Object.entries(groupedItems).map(([category, items]) => (
//       <div key={category}>
//         <h3 className="title">{category}</h3>
//         <div className="products-container">
//           {items.map((item) => (
//             <div key={item.id} className="cards">
//               <div onClick={() => showDetails(item)}>
//                 <div className="product">
//                   <Image src={item.image} width="100%" />
//                   <h3 className="title">{item.titre}</h3>
//                   <div className="price">
//                     <span>
//                       <i className="fa fa-eur" aria-hidden="true"></i>
//                       {item.prix}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     ));
//   };

//   return (
//     <Container>
//       <div className="carte">
//         <div className="container">
//           <h3 className="title">Menu</h3>
//           {renderGroupedItems()}
//         </div>
//       </div>
//       {selectedItem && (
//         <div className="popup">
//           <div className="popup-content">
//             <span className="close" onClick={hideDetails}>
//               &times;
//             </span>
//             <h2>{selectedItem.titre}</h2>
//             <Image src={selectedItem.image} fluid />
//             <p>{selectedItem.description}</p>
//             <div className="stars">
//               <i className="fas fa-star"></i>
//               <i className="fas fa-star"></i>
//               <i className="fas fa-star"></i>
//               <i className="fas fa-star"></i>
//               <i className="fas fa-star-half-alt"></i>
//             </div>
//             <p>{selectedItem.prix} €</p>
//             <Button onClick={addToCart}>Add to Cart</Button>
//           </div>
//         </div>
//       )}
//     </Container>
//   );
// }

// export default CarteController;
























// import React, { useState, useEffect } from 'react';
// import { Button, Card, Container, Image } from 'react-bootstrap';
// import { useParams } from 'react-router-dom';

// function CarteController(props) {
//   const backUrl = 'http://localhost:8081/carte';
//   const [items, setItems] = useState([]);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const { title } = useParams();

//   useEffect(() => {
//     fetch(`${backUrl}/getCarte`)
//       .then((response) => response.json())
//       .then((data) => setItems(data))
//       .catch((error) => {
//         console.error('Error fetching menu list:', error);
//       });
//   }, []);

//   useEffect(() => {
//     if (selectedItem) {
//       setTotalPrice(selectedItem.prix * quantity);
//     }
//   }, [quantity, selectedItem]);

//   useEffect(() => {
//     const filteredItem = items.find((item) => item.titre.toLowerCase().includes(title.toLowerCase()));
//     if (filteredItem) {
//       setSelectedItem(filteredItem);
//     }
//   }, [title, items]);

//   const addToCart = () => {
//     const updatedItem = { ...selectedItem };
//     updatedItem.quantity = quantity;
//     updatedItem.totalPrice = totalPrice;
//     props.addToCart(updatedItem);
//     setQuantity(1);
//     hideDetails();
//   };

//   const hideDetails = () => {
//     setSelectedItem(null);
//   };

//   const showDetails = (item) => {
//     setSelectedItem(item);
//   };

//   const renderGroupedItems = () => {
//     return (
//       <div className="products-container">
//         {items.map((item) => (
//           <div key={item.id} className="cards">
//             <div onClick={() => showDetails(item)}>
//               <div className="product">
//                 <Image src={item.image} width="100%" />
//                 <h3 className="title">{item.titre}</h3>
//                 <div className="price">
//                   <span>
//                     <i className="fa fa-eur" aria-hidden="true"></i>
//                     {item.prix}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <Container>
//       <div className="carte">
//         <div className="container">
//           <h3 className="title">Menu</h3>
//           {renderGroupedItems()}
//         </div>
//       </div>
//       {selectedItem && (
//         <div className="popup">
//           <div className="popup-content">
//             <span className="close" onClick={hideDetails}>
//               &times;
//             </span>
//             <h2>{selectedItem.titre}</h2>
//             <Image src={selectedItem.image} fluid />
//             <p>{selectedItem.description}</p>
//             <div className="stars">
//               <i className="fas fa-star"></i>
//               <i className="fas fa-star"></i>
//               <i className="fas fa-star"></i>
//               <i className="fas fa-star"></i>
//               <i className="fas fa-star-half-alt"></i>
//             </div>
//             <p>{selectedItem.prix} €</p>
//             <Button onClick={addToCart}>Add to Cart</Button>
//           </div>
//         </div>
//       )}
//     </Container>
//   );
// }

// export default CarteController;












// import React, { useState, useEffect } from "react";
// import { Button, Card, Container, Image } from "react-bootstrap";

// function CarteController(props) {
//   const backUrl = "http://localhost:8081/carte";
//   const [items, setItems] = useState([]);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [totalPrice, setTotalPrice] = useState(0);

//   useEffect(() => {
//     fetch(`${backUrl}/getCarte`)
//       .then((response) => response.json())
//       .then((data) => setItems(data))
//       .catch((error) => {
//         console.error("Error fetching menu list:", error);
//       });
//   }, []);

//   useEffect(() => {
//     if (selectedItem) {
//       setTotalPrice(selectedItem.prix * quantity);
//     }
//   }, [quantity, selectedItem]);

//   const addToCart = () => {
//     const updatedItem = { ...selectedItem };
//     updatedItem.quantity = quantity;
//     updatedItem.totalPrice = totalPrice;
//     props.addToCart(updatedItem);
//     setQuantity(1);
//     hideDetails();
//   };

//   const hideDetails = () => {
//     setSelectedItem(null);
//   };

//   const showDetails = (item) => {
//     setSelectedItem(item);
//   };

//   const groupItemsByName = () => {
//     const groupedItems = {};

//     for (const item of items) {
//       let itemName = item.titre.toLowerCase();
//       let itemCategory = "";

//       if (itemName.includes("briyani")) {
//         itemCategory = "Briyani";
//       } else if (itemName.includes("jus")) {
//         itemCategory = "Jus";
//       } else if (itemName.includes("curry")) {
//         itemCategory = "Curry";
//       }else if (itemName.includes("ice cream")) {
//         itemCategory = "Ice Cream";
//       }else if (itemName.includes("sweet")) {
//         itemCategory = "sweets";
//       } 
//       else {
//         itemCategory = "Other";
//       }

//       if (groupedItems.hasOwnProperty(itemCategory)) {
//         groupedItems[itemCategory].push(item);
//       } else {
//         groupedItems[itemCategory] = [item];
//       }
//     }

//     return groupedItems;
//   };

//   const renderGroupedItems = () => {
//     const groupedItems = groupItemsByName();

//     return Object.entries(groupedItems).map(([category, items]) => (
//       <div key={category}>
//         <h3 className="title">{category}</h3>
//         <div className="products-container">
//           {items.map((item) => (
//             <div key={item.id} className="cards">
//               <div onClick={() => showDetails(item)}>
//                 <div className="product">
//                   <Image src={item.image} width="100%" />
//                   <h3 className="title">{item.titre}</h3>
//                   <div className="price">
//                     <span>
//                       <i className="fa fa-eur" aria-hidden="true"></i>
//                       {item.prix}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     ));
//   };

//   return (
//     <Container>
//       <div className="carte">
//         <div className="container">
//           <h3 className="title">Menu</h3>
//           {renderGroupedItems()}
//         </div>
//       </div>
//       {selectedItem && (
//         <div className="popup">
//           <div className="popup-content">
//             <span className="close" onClick={hideDetails}>
//               &times;
//             </span>
//             <h2>{selectedItem.titre}</h2>
//             <Image src={selectedItem.image} fluid />
//             <p>{selectedItem.description}</p>
//             <div className="stars">
//               <i className="fas fa-star"></i>
//               <i className="fas fa-star"></i>
//               <i className="fas fa-star"></i>
//               <i className="fas fa-star"></i>
//               <i className="fas fa-star-half-alt"></i>
//             </div>
//             <p>{selectedItem.prix} €</p>
//             <Button onClick={() => addToCart(selectedItem)}>Add to Cart</Button>
//           </div>
//         </div>
//       )}
//     </Container>
//   );
// }

// export default CarteController;




























// import React, { useState, useEffect } from "react";
// import { Button, Card, Container, Image } from "react-bootstrap";

// function CarteController(props) {
//   const backUrl = "http://localhost:8081/carte";
//   const [items, setItems] = useState([]);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [totalPrice, setTotalPrice] = useState(0);

//   useEffect(() => {
//     fetch(`${backUrl}/getCarte`)
//       .then((response) => response.json())
//       .then((data) => setItems(data))
//       .catch((error) => {
//         console.error("Error fetching menu list:", error);
//       });
//   }, []);

//   useEffect(() => {
//     if (selectedItem) {
//       setTotalPrice(selectedItem.prix * quantity);
//     }
//   }, [quantity, selectedItem]);

//   const addToCart = () => {
//     const updatedItem = { ...selectedItem };
//     updatedItem.quantity = quantity;
//     updatedItem.totalPrice = totalPrice;
//     props.addToCart(updatedItem);
//     setQuantity(1);
//     hideDetails();
//   };

//   const hideDetails = () => {
//     setSelectedItem(null);
//   };

//   const showDetails = (item) => {
//     setSelectedItem(item);
//   };

//   const groupItemsByName = () => {
//     const groupedItems = {};

//     for (const item of items) {
//       let itemName = item.titre.toLowerCase();

//       // Check if the item name contains the keyword "briyani"
//       if (itemName.includes("briyani")) {
//         itemName = "Briyani"; // Assign a common name for the group
//       }

//       if (groupedItems.hasOwnProperty(itemName)) {
//         groupedItems[itemName].push(item);
//       } else {
//         groupedItems[itemName] = [item];
//       }
//     }

//     return groupedItems;
//   };

//   const renderGroupedItems = () => {
//     const groupedItems = groupItemsByName();

//     return Object.entries(groupedItems).map(([name, items]) => (
//       <div key={name}>
//         <h3 className="title">{name}</h3>
//         <div className="products-container">
//           {items.map((item) => (
//             <div key={item.id} className="cards">
//               <div onClick={() => showDetails(item)}>
//                 <div className="product">
//                   <Image src={item.image} width="100%" />
//                   <h3 className="title">{item.titre}</h3>
//                   <div className="price">
//                     <span>
//                       <i className="fa fa-eur" aria-hidden="true"></i>
//                       {item.prix}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     ));
//   };

//   return (
//     <Container>
//       <div className="carte">
//         <div className="container">
//           <h3 className="title">Menu</h3>
//           {renderGroupedItems()}
//         </div>
//       </div>
//       {selectedItem && (
//         <div className="popup">
//           <div className="popup-content">
//             <span className="close" onClick={hideDetails}>
//               &times;
//             </span>
//             <h2>{selectedItem.titre}</h2>
//             <Image src={selectedItem.image} fluid />
//             <p>{selectedItem.description}</p>
//             <div className="stars">
//               <i className="fas fa-star"></i>
//               <i className="fas fa-star"></i>
//               <i className="fas fa-star"></i>
//               <i className="fas fa-star"></i>
//               <i className="fas fa-star-half-alt"></i>
//             </div>
//             <p>{selectedItem.prix} €</p>
//             <Button onClick={() => addToCart(selectedItem)}>Add to Cart</Button>
//           </div>
//         </div>
//       )}
//     </Container>
//   );
// }

// export default CarteController;












// import React, { useState, useEffect } from "react";
// import { Button, Card, Container, Image } from "react-bootstrap";

// function CarteController(props) {
//   const backUrl = "http://localhost:8081/carte";
//   const [items, setItems] = useState([]);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [totalPrice, setTotalPrice] = useState(0);

//   useEffect(() => {
//     fetch(`${backUrl}/getCarte`)
//       .then((response) => response.json())
//       .then((data) => setItems(data))
//       .catch((error) => {
//         console.error("Error fetching menu list:", error);
//       });
//   }, []);

//   useEffect(() => {
//     if (selectedItem) {
//       setTotalPrice(selectedItem.prix * quantity);
//     }
//   }, [quantity, selectedItem]);

//   const addToCart = () => {
//     const updatedItem = { ...selectedItem };
//     updatedItem.quantity = quantity;
//     updatedItem.totalPrice = totalPrice;
//     props.addToCart(updatedItem);
//     setQuantity(1);
//     hideDetails();
//   };

//   const hideDetails = () => {
//     setSelectedItem(null);
//   };

//   const showDetails = (item) => {
//     setSelectedItem(item);
//   };

//   const incrementQuantity = () => {
//     setQuantity((prevQuantity) => prevQuantity + 1);
//     setTotalPrice((prevTotalPrice) => prevTotalPrice + selectedItem.prix);
//   };

//   const decrementQuantity = () => {
//     if (quantity === 1) {
//       return;
//     }
//     setQuantity((prevQuantity) => prevQuantity - 1);
//     setTotalPrice((prevTotalPrice) => prevTotalPrice - selectedItem.prix);
//   };

//   const groupItemsByName = () => {
//     const groupedItems = {};
//     for (const item of items) {
//       const name = item.titre.toLowerCase();
//       if (groupedItems.hasOwnProperty(name)) {
//         groupedItems[name].push(item);
//       } else {
//         groupedItems[name] = [item];
//       }
//     }
//     return groupedItems;
//   };

//   const renderGroupedItems = () => {
//     const groupedItems = groupItemsByName();

//     return Object.entries(groupedItems).map(([name, items]) => (
//       <div key={name}>
//         <h3 className="title">{name}</h3>
//         <div className="products-container">
//           {items.map((item) => (
//             <div key={item.id} className="cards">
//               <div onClick={() => showDetails(item)}>
//                 <div className="product">
//                   <Image src={item.image} width="100%" />
//                   <h3 className="title">{item.titre}</h3>
//                   <div className="price">
//                     <span>
//                       <i className="fa fa-eur" aria-hidden="true"></i>
//                       {item.prix}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     ));
//   };

//   return (
//     <Container>
//       <div className="carte">
//         <div className="container">
//           <h3 className="title">Menu</h3>
//           {renderGroupedItems()}
//         </div>
//       </div>
//       {selectedItem && (
//         <div className="popup">
//           <div className="popup-content">
//             <span className="close" onClick={hideDetails}>
//               &times;
//             </span>
//             <h2>{selectedItem.titre}</h2>
//             <Image src={selectedItem.image} fluid />
//             <p>{selectedItem.description}</p>
//             <div className="stars">
//               <i className="fas fa-star"></i>
//               <i className="fas fa-star"></i>
//               <i className="fas fa-star"></i>
//               <i className="fas fa-star"></i>
//               <i className="fas fa-star-half-alt"></i>
//             </div>
//             <p>{selectedItem.prix} €</p>
//             <Button onClick={() => addToCart(selectedItem)}>Add to Cart</Button>
//           </div>
//         </div>
//       )}
//     </Container>
//   );
// }

// export default CarteController;




















// import React, { useState, useEffect } from "react";
// import { Button, Card, Container, Image } from "react-bootstrap";



//  function CarteController(props) {
//   const backUrl = "http://localhost:8081/carte";
//   const [items, setItems] = useState([]);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [totalPrice, setTotalPrice] = useState(0);

//   useEffect(() => {
//     fetch(`${backUrl}/getCarte`)
//       .then((response) => response.json())
//       .then(data => setItems(data))
//       .catch((error) => {
//         console.error("Error fetching menu list:", error);
//       });
//   }, []);

//   useEffect(() => {
//     if (selectedItem) {
//       setTotalPrice(selectedItem.prix * quantity);
//     }
//   }, [quantity, selectedItem]);

//   const addToCart = () => {
//     const updatedItem = { ...selectedItem };
//     updatedItem.quantity = quantity;
//     updatedItem.totalPrice = totalPrice;
//     props.addToCart(updatedItem);
//     setQuantity(1);
//     hideDetails();
//   };
  
//   const hideDetails = () => {
//     setSelectedItem(null);
//   }
//   const showDetails = (item) => {
//     setSelectedItem(item);
//   }

//   const incrementQuantity = () => {
//     setQuantity(prevQuantity => prevQuantity + 1);
//     setTotalPrice(prevTotalPrice => prevTotalPrice + selectedItem.prix);
//   };

//   const decrementQuantity = () => {
//     if (quantity === 1) {
//       return;
//     }
//     setQuantity(prevQuantity => prevQuantity - 1);
//     setTotalPrice(prevTotalPrice => prevTotalPrice - selectedItem.prix);
//   };



//   return (
//     <Container>
//       <div className="carte">
//         <div className="container">
//           <h3 className="title">Menu</h3>
//           <div className="products-container" data-name="menus">
//             {items.map((item) => (
//               <div key={item.id} className="cards">
//                 <div onClick={() => showDetails(item)}>
//                   <div className="product">
//                     <Image src={item.image} width="100%" />
//                     <h3 className="title">{item.titre}</h3>
//                     <div className="price">
//                       <span>
//                         <i className="fa fa-eur" aria-hidden="true"></i>
//                         {item.prix}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       {selectedItem && (
//         <div className="popup">
//           <div className="popup-content">
//             <span className="close" onClick={hideDetails}>&times;</span>
//             <h2>{selectedItem.titre}</h2>
//             <Image src={selectedItem.image} fluid />
//             <p>{selectedItem.description}</p>
//             <div className="stars">
//                 <i className="fas fa-star"></i>
//                 <i className="fas fa-star"></i>
//                 <i className="fas fa-star"></i>
//                 <i className="fas fa-star"></i>
//                 <i className="fas fa-star-half-alt"></i>
//               </div>
//             <p>{selectedItem.prix} €</p>
//             <Button onClick={() => addToCart(selectedItem)}>Add to Cart</Button>
//           </div>
//         </div>
//       )}
//     </Container>
//   );
//   }

//   export default CarteController;