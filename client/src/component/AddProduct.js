// import React, { useState } from 'react';
// import axios from 'axios';
// import './AddProduct.css';

// function AddProduct() {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [category, setCategory] = useState('');
//   const [image, setImage] = useState(null);
//   const [message, setMessage] = useState('');
//   const [popup, setPopup] = useState({ visible: false, message: '' });

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Validate input fields
//     if (!title || !price || !description || !category) {
//       setMessage('Please fill all the fields');
//       return;
//     }

//     // Create a FormData object to send text and file data
//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('price', price);
//     formData.append('description', description);
//     formData.append('category', category);
//     if (image) {
//       formData.append('image', image);
//     }

//     try {
//       const response = await axios.post('http://localhost:8002/api/addProduct', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       setPopup({
//         visible: true,
//         message: 'Product added successfully',
//       });

//       setTimeout(() => {
//         setPopup({ visible: false, message: '' });
//       }, 6000);

//       // Clear form fields
//       setTitle('');
//       setCategory('');
//       setDescription('');
//       setPrice('');
//       setImage(null);
//       setMessage('Product added successfully');

//       setTimeout(() => {
//         setMessage('');
//       }, 1000);
//     } catch (error) {
//       console.log(error);
//       setMessage('Error adding product');
//     }
//   };

//   return (
//     <>
//       <header>
//         <div className="Page__heading">
//           <h1 className="Page__title">Add Product</h1>
//         </div>
//         <div className="Page__button">
//           <button type="button" className="js-button-add">
//             <span>Add Product</span>
//           </button>
//         </div>
//       </header>
//       <main>
//         <div className="Tabs js-tabs">
//           <div className="Tabs__item">
//             <input type="radio" id="tab-1" name="tab" defaultChecked="" />
//             <label htmlFor="tab-1" className="Tabs__label">
//               Add Product
//             </label>
//             <div className="Tabs__content">
//               <form className="AddProduct__form" onSubmit={handleSubmit}>
//                 <div className="AddProduct__input-group">
//                   <label htmlFor="title">Title:</label>
//                   <input
//                     type="text"
//                     id="title"
//                     name="title"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                     placeholder="Enter product title"
//                     required
//                   />
//                 </div>
//                 <div className="AddProduct__input-group">
//                   <label htmlFor="description">Description:</label>
//                   <textarea
//                     id="description"
//                     name="description"
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                     placeholder="Enter product description"
//                     required
//                   />
//                 </div>
//                 <div className="AddProduct__input-group">
//                   <label htmlFor="price">Price:</label>
//                   <input
//                     type="number"
//                     id="price"
//                     name="price"
//                     value={price}
//                     onChange={(e) => setPrice(e.target.value)}
//                     placeholder="Enter product price"
//                     required
//                   />
//                 </div>
//                 <div className="AddProduct__input-group">
//                   <label htmlFor="category">Category:</label>
//                   <input
//                     type="text"
//                     id="category"
//                     name="category"
//                     value={category}
//                     onChange={(e) => setCategory(e.target.value)}
//                     placeholder="Enter product category"
//                     required
//                   />
//                 </div>
//                 <div className="AddProduct__input-group">
//                   <label htmlFor="image">Product Image:</label>
//                   <input
//                     type="file"
//                     id="image"
//                     name="image"
//                     onChange={(e) => setImage(e.target.files[0])}
//                   />
//                 </div>
//                 <button type="submit" className="AddProduct__submit-btn">
//                   Add Product
//                 </button>
//                 {message && <p className="Product__message">{message}</p>}
//               </form>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }

// export default AddProduct;





import React, { useState, useRef } from 'react';
import axios from 'axios';
import './AddProduct.css';

function AddProduct() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const [popup, setPopup] = useState({ visible: false, message: '' });

  const fileInputRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate input fields
    if (!title || !price || !description || !category) {
      setMessage('Please fill all the fields');
      return;
    }

    // Create a FormData object to send text and file data
    const formData = new FormData();
    formData.append('title', title);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('category', category);
    if (image) {
      formData.append('image', image);
    }

    try {
      const response = await axios.post('http://localhost:8002/api/addProduct', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setPopup({
        visible: true,
        message: 'Product added successfully',
      });

      setTimeout(() => {
        setPopup({ visible: false, message: '' });
      }, 6000);

      // Clear form fields
      setTitle('');
      setCategory('');
      setDescription('');
      setPrice('');
      setImage(null);
      setMessage('Product added successfully');

      // Clear the file input field
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }

      setTimeout(() => {
        setMessage('');
      }, 1000);
    } catch (error) {
      console.log(error);
      setMessage('Error adding product');
    }
  };

  return (
    <>
      <header>
        <div className="Page__heading">
          <h1 className="Page__title">Add Product</h1>
        </div>
        <div className="Page__button">
          <button type="button" className="js-button-add">
            <span>Add Product</span>
          </button>
        </div>
      </header>
      <main>
        <div className="Tabs js-tabs">
          <div className="Tabs__item">
            <input type="radio" id="tab-1" name="tab" defaultChecked="" />
            <label htmlFor="tab-1" className="Tabs__label">
              Add Product
            </label>
            <div className="Tabs__content">
              <form className="AddProduct__form" onSubmit={handleSubmit}>
                <div className="AddProduct__input-group">
                  <label htmlFor="title">Title:</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter product title"
                    required
                  />
                </div>
                <div className="AddProduct__input-group">
                  <label htmlFor="description">Description:</label>
                  <textarea
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter product description"
                    required
                  />
                </div>
                <div className="AddProduct__input-group">
                  <label htmlFor="price">Price:</label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Enter product price"
                    required
                  />
                </div>
                <div className="AddProduct__input-group">
                  <label htmlFor="category">Category:</label>
                  <input
                    type="text"
                    id="category"
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Enter product category"
                    required
                  />
                </div>
                <div className="AddProduct__input-group">
                  <label htmlFor="image">Product Image:</label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    ref={fileInputRef}
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>
                <button type="submit" className="AddProduct__submit-btn">
                  Add Product
                </button>
                {message && <p className="Product__message">{message}</p>}
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default AddProduct;
