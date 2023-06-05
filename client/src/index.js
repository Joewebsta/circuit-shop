import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios'
import Cart from './components/Cart';
import Products from './components/Products';
const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  const [cartItems, setCartItems] = useState([]);
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

  useEffect(() => {
    const getCartItems = async () => {
      const response = await axios.get('/api/cart')
      const cartItems = await response.data;
      setCartItems(cartItems);
    }

    getCartItems();
  }, []);

  const handleAddNewProduct = async (name, price, quantity, clearProductForm) => {
    const obj = { title: name, price: parseInt(price, 10), quantity: parseInt(quantity, 10) };
    const response = await axios.post('/api/products', obj);
    const newProduct = await response.data;
    const updatedProducts = products.concat(newProduct);
    setProducts(updatedProducts);
    clearProductForm();
  }

  const handleEditProduct = async (productId, newTitle, newPrice, newQuantity, callback) => {
    const updatedProduct = {
      title: newTitle,
      price: newPrice,
      quantity: newQuantity
    }

    setProducts(products.map(product => {
      return product._id === productId ? { ...product, title: newTitle, quantity: newQuantity, price: newPrice } : product;
    }));
    //need put cart endpoint: setCartItems(cartItems.map(item => item.productId === productId ? { ...item, title: newTitle, price: parseInt(newPrice, 10) } : item));
    axios.put(`/api/products/${productId}`, updatedProduct);
    callback();
  }

  const handleDeleteProduct = async (productId) => {
    await axios.delete(`/api/products/${productId}`);
    const updatedProducts = products.filter(product => product._id !== productId);
    setProducts(updatedProducts);
  }

  const handleAddProductToCart = async (productId) => {
    const response = await axios.post('/api/add-to-cart', { productId });
    const itemExists = cartItems.find(item => item.productId === productId);

    setProducts(products => products.map(product => {
      return product._id === productId ? response.data.product : product;
    }));

    setCartItems(cartItems => {
      if (itemExists) {
        return cartItems.map(cartItem =>
          cartItem.productId === productId ? response.data.item : cartItem
        );
      } else {
        return cartItems.concat(response.data.item);
      }
    });
  }

  const handleCheckoutCart = async () => {
    axios.post('/api/checkout');
    setCartItems([]);
  }

  const handleDisplayNewProductForm = () => setIsAddFormVisible(true);
  const handleHideNewProductForm = () => setIsAddFormVisible(false);

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart items={cartItems} onCheckoutCart={handleCheckoutCart} />
      </header>
      <Products
        products={products}
        onDisplayNewProductForm={handleDisplayNewProductForm}
        isAddFormVisible={isAddFormVisible}
        onHideNewProductForm={handleHideNewProductForm}
        onEditProduct={handleEditProduct}
        onAddNewProduct={handleAddNewProduct}
        onDeleteProduct={handleDeleteProduct}
        onAddProductToCart={handleAddProductToCart}
      />
    </div>
  );
}

root.render(<App />);