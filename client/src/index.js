import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Products from "./components/Products";
import productService from "./services/products";
import cartService from "./services/cart";
import "@fontsource-variable/space-grotesk";
const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);

  useEffect(() => {
    const getAllProducts = async () => {
      const products = await productService.getProducts();
      setProducts(products);
    };

    getAllProducts();
  }, []);

  useEffect(() => {
    const getCartItems = async () => {
      const cartItems = await cartService.getCartItems();
      setCartItems(cartItems);
    };

    getCartItems();
  }, []);

  const handleAddNewProduct = async (
    name,
    price,
    quantity,
    clearProductForm
  ) => {
    const newProduct = {
      title: name,
      price: parseInt(price, 10),
      quantity: parseInt(quantity, 10),
    };
    const returnedNewProduct = await productService.createProduct(newProduct);
    setProducts(products.concat(returnedNewProduct));
    clearProductForm();
  };

  const handleEditProduct = async (
    productId,
    newTitle,
    newPrice,
    newQuantity,
    callback
  ) => {
    const updatedProduct = {
      title: newTitle,
      price: newPrice,
      quantity: newQuantity,
    };

    setProducts(
      products.map((product) => {
        return product._id === productId
          ? {
              ...product,
              title: newTitle,
              quantity: newQuantity,
              price: newPrice,
            }
          : product;
      })
    );
    //need put cart endpoint: setCartItems(cartItems.map(item => item.productId === productId ? { ...item, title: newTitle, price: parseInt(newPrice, 10) } : item));
    productService.updateProduct(productId, updatedProduct);
    callback();
  };

  const handleDeleteProduct = async (productId) => {
    await productService.deleteProduct(productId);
    const updatedProducts = products.filter(
      (product) => product._id !== productId
    );
    setProducts(updatedProducts);
  };

  const handleAddProductToCart = async (productId) => {
    const data = await cartService.addToCart(productId);
    const itemExists = cartItems.find((item) => item.productId === productId);

    setProducts((products) =>
      products.map((product) => {
        return product._id === productId ? data.product : product;
      })
    );

    setCartItems((cartItems) => {
      if (itemExists) {
        return cartItems.map((cartItem) =>
          cartItem.productId === productId ? data.item : cartItem
        );
      } else {
        return cartItems.concat(data.item);
      }
    });
  };

  const handleCheckoutCart = async () => {
    cartService.checkout();
    setCartItems([]);
  };

  const handleDisplayNewProductForm = () => setIsAddFormVisible(true);
  const handleHideNewProductForm = () => setIsAddFormVisible(false);

  return (
    <div id="app" className="px-8 pb-8 pt-4 m-auto">
      <Header />
      <div className="flex gap-[50px]">
        <Products
          products={products}
          onDisplayNewProductForm={handleDisplayNewProductForm}
          isAddFormVisible={isAddFormVisible}
          // Does not need to be in app component
          onHideNewProductForm={handleHideNewProductForm}
          onEditProduct={handleEditProduct}
          onAddNewProduct={handleAddNewProduct}
          onDeleteProduct={handleDeleteProduct}
          onAddProductToCart={handleAddProductToCart}
        />
        {/* <Cart items={cartItems} onCheckoutCart={handleCheckoutCart} /> */}
      </div>
    </div>
  );
};

root.render(<App />);
