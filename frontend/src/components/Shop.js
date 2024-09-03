// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// import './Shop.css'; // Ensure this path matches your project structure

// function Shop() {
//   const [products, setProducts] = useState([]);
//   const [popup, setPopup] = useState({ visible: false, message: '', loginButton: false });


//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.post("http://localhost:8002/api/productList");
//         setProducts(response.data.data); // Assuming response.data.data contains the array of products
       
//       } catch (error) {
//         console.log('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleAddToCart = (product) => {
//     // Implement the functionality for adding the product to the cart
//     setPopup({ visible: true, message: `${product.title} has been added to cart` });
//     setTimeout(() => {
//       setPopup({ visible: false, message: '', loginButton: false });
//     }, 3000);   };

//   const handleBuyNow = (product) => {
//     // Implement the functionality for buying the product immediately
//     setPopup({ visible: true, message: `${product.title} has been added to cart` });
//     setTimeout(() => {
//       setPopup({ visible: false, message: '', loginButton: false });
//     }, 3000); 
// };

//   return (
//     <>
//       <section className="shop_section layout_padding">
//         <div className="container">
//           <div className="heading_container heading_center">
//             <h2>Latest Products</h2>
//           </div>
//           <div className="row">
//             {products.map((product) => (
//               <div className="col-sm-6 col-md-4 col-lg-4" key={product._id}>
//                 <div className="box">
//                   <a href="#">
//                     <div className="img-box">
//                       <img src={product.url} alt={product.title} />
//                     </div>
//                     <div className="detail-box">
//                       <h6>{product.title}</h6>
//                       <p>{product.description}</p>
//                       <h6>
//                         Price <span>${product.price}</span>
//                       </h6>
//                       <p>Category: {product.category}</p>
//                       <div className="button-box">
//                         <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
//                         <button onClick={() => handleBuyNow(product)}>Buy Now</button>
//                       </div>
//                     </div>
//                     <div className="new">
//                       <span>New</span>
//                     </div>
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="btn-box">
//             <a href="#">View All Products</a>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Shop;




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './Shop.css'; // Ensure this path matches your project structure

function Shop() {
  const [products, setProducts] = useState([]);
  const [popup, setPopup] = useState({ visible: false, message: '', loginButton: false });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.post("http://localhost:8002/api/productList");
        setProducts(response.data.data); // Assuming response.data.data contains the array of products
      } catch (error) {
        console.log('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    // Implement the functionality for adding the product to the cart
    setPopup({ visible: true, message: `${product.title} has been added to cart` });
    setTimeout(() => {
      setPopup({ visible: false, message: '', loginButton: false });
    }, 3000);
  };

  const handleBuyNow = (product) => {
    // Implement the functionality for buying the product immediately
    setPopup({ visible: true, message: `${product.title} has been added to cart` });
    setTimeout(() => {
      setPopup({ visible: false, message: '', loginButton: false });
    }, 3000);
  };

  return (
    <>
      <section className="shop_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Latest Products</h2>
          </div>
          <div className="row">
            {products.map((product) => (
              <div className="col-sm-6 col-md-4 col-lg-4" key={product._id}>
                <div className="box">
                  <a href="#">
                    <div className="img-box">
                      <img src={product.url} alt={product.title} />
                    </div>
                    <div className="detail-box">
                      <h6>{product.title}</h6>
                      <p>{product.description}</p>
                      <h6>
                        Price <span>${product.price}</span>
                      </h6>
                      <p>Category: {product.category}</p>
                      <div className="button-box">
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                        <button onClick={() => handleBuyNow(product)}>Buy Now</button>
                      </div>
                    </div>
                    <div className="new">
                      <span>New</span>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="btn-box">
            <a href="#">View All Products</a>
          </div>
        </div>
      </section>

      {/* Popup element */}
      {popup.visible && (
        <div className="popup">
          <p>{popup.message}</p>
          {popup.loginButton && (
            <button>Login</button>
          )}
        </div>
      )}
    </>
  );
}

export default Shop;