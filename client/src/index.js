import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios'
const root = ReactDOM.createRoot(document.getElementById('root'));

const Header = () => {
  return (
    <header>
      <h1>The Shop!</h1>
      <div className="cart">
        <h2>Your Cart</h2>
        <p>Your cart is empty</p>
        <p>Total: $0</p>
        <button className="checkout" disabled>Checkout</button>
      </div>
    </header>
  );
}

const Products = ({ products, onDisplayNewProductForm, onHideNewProductForm, isAddFormVisible, onAddNewProduct }) => {
  return (
    <main>
      <ProductListing products={products} />
      <AddForm onDisplayNewProductForm={onDisplayNewProductForm} isAddFormVisible={isAddFormVisible} onHideNewProductForm={onHideNewProductForm} onAddNewProduct={onAddNewProduct} />
    </main>
  )
}

const ProductListing = ({ products }) => {
  const productList = () => {
    return products.map((product) => {
      const { _id: id, title, quantity, price } = product;
      return <Product key={id} productName={title} price={price} quantityInStock={quantity} />
    })
  }

  return (
    <div className="product-listing">
      <h2>Products</h2>
      <ul className="product-details">
        {productList()}
      </ul>
    </div>
  )
}

const Product = ({ productName, price, quantityInStock }) => {
  return (
    <li className="product">
      <div className="product-details">
        <h3>{productName}</h3>
        <p className="price">{price}</p>
        <p className="quantity">{quantityInStock} left in stock</p>
        <Actions />
        <button className="delete-button"><span>X</span></button>
      </div>
    </li>
  )
}

const Actions = () => {
  return (
    <div className="actions product-actions">
      <button className="add-to-cart">Add to Cart</button>
      <button className="edit">Edit</button>
    </div>
  )
}

const AddForm = ({ onDisplayNewProductForm, onHideNewProductForm, isAddFormVisible, onAddNewProduct }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  }
  
  const handleProductPriceChange = (event) => {
    setProductPrice(event.target.value);
  }

  const handleProductQuantityChange = (event) => {
    setProductQuantity(event.target.value);
  }
  
  const submitForm = (event) => {
    event.preventDefault();
	onAddNewProduct(productName, productPrice, productQuantity);
	clearProductForm();
  } 
  
  const clearProductForm = (event) => {
    setProductName('');
	setProductPrice('');
	setProductQuantity('');
  }
  
  return (
    <div className={`add-form ${isAddFormVisible && "visible"}`}>
      <p><button className="add-product-button" onClick={onDisplayNewProductForm}>Add A Product</button></p>
      <h3>Add Product</h3>
      <form onSubmit = {submitForm} >
        <div className="input-group">
          <label htmlFor="product-name">Product Name:</label>
          <input
            type="text"
            id="product-name"
            name="product-name"
			value={productName}
			onChange={handleProductNameChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-price">Price:</label>
          <input
            type="number"
            id="product-price"
            name="product-price"
            min="0"
            step="0.01"
			value={productPrice}
			onChange={handleProductPriceChange}			
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="product-quantity">Quantity:</label>
          <input
            type="number"
            id="product-quantity"
            name="product-quantity"
            min="0"
			value={productQuantity}
			onChange={handleProductQuantityChange}
            required
          />
        </div>
        <div className="actions form-actions">
          <button type="submit">Add</button>
          <button type="button" onClick={onHideNewProductForm} >Cancel</button>
        </div>
      </form>
    </div>
  )
}

const App = () => {
  const [products, setProducts] = useState([]);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);

  useEffect(() => {
    const getAllProducts = async () => {
      const response = await axios.get('/api/products')
      const products = await response.data;
      setProducts(products);
    }

    getAllProducts();
  }, []);

  const handleAddNewProduct = async (name, price, quantity) => {
	const obj = {title: name, price: parseInt(price, 10), quantity: parseInt(quantity, 10) };
    const response = await axios.post('/api/products', obj);
	const newProduct = await response.data;
	const updatedProducts = products.concat(newProduct);
	setProducts(updatedProducts);
  }

  const handleDisplayNewProductForm = (e) => {
    setIsAddFormVisible(true);
  }

  const handleHideNewProductForm = (e) => {
	console.log("hiding");
    setIsAddFormVisible(false);
  }

  return (
    <div id="app">
      <Header />
      <Products
        products={products}
        onDisplayNewProductForm={handleDisplayNewProductForm}
        isAddFormVisible={isAddFormVisible}
		onHideNewProductForm = {handleHideNewProductForm}
		onAddNewProduct = {handleAddNewProduct}
      />
    </div>
  );
}

root.render(<App />);