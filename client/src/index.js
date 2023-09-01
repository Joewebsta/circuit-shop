// import "./styles/index.css";
// import "./styles/reset.css";
import "@fontsource-variable/space-grotesk";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Products from "./components/Products";
import Cart from "./components/Cart";
import AddForm from "./components/AddForm";
import Overlay from "./components/Overlay";
import {
  getProducts,
  deleteProduct,
  updateProduct,
  createProduct,
} from "./services/products";
import { getCartItems, addToCart, checkout } from "./services/cart";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        setProducts(await getProducts());
      } catch (err) {
        console.error(err);
      }
    };

    const getAllCartItems = async () => {
      try {
        setCartItems(await getCartItems());
      } catch (error) {
        console.error(error);
      }
    };

    getAllProducts();
    getAllCartItems();
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
    const returnedNewProduct = await createProduct(newProduct);
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

    await updateProduct(productId, updatedProduct);

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

    callback();
  };

  const handleDeleteProduct = async (productId) => {
    await deleteProduct(productId);
    const updatedProducts = products.filter(
      (product) => product._id !== productId
    );

    setProducts(updatedProducts);
  };

  const handleAddProductToCart = async (productId) => {
    const data = await addToCart(productId);
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
    checkout();
    setCartItems([]);
  };

  const handleDisplayNewProductForm = () => setIsAddFormVisible(true);

  const handleHideNewProductForm = () => setIsAddFormVisible(false);

  return (
    <div>
      <div className="w-[1280px] px-8 pb-8 pt-4 m-auto">
        <Header />
        <div className="flex gap-[50px]">
          <Products
            products={products}
            handleDisplayNewProductForm={handleDisplayNewProductForm}
            // isAddFormVisible={isAddFormVisible}
            // onHideNewProductForm={handleHideNewProductForm}
            onEditProduct={handleEditProduct}
            // onAddNewProduct={handleAddNewProduct}
            onDeleteProduct={handleDeleteProduct}
            onAddProductToCart={handleAddProductToCart}
          />
          {/* <Cart items={cartItems} onCheckoutCart={handleCheckoutCart} /> */}
        </div>
      </div>
      {isAddFormVisible && (
        <Overlay handleHideNewProductForm={handleHideNewProductForm}>
          <AddForm
            onDisplayNewProductForm={handleDisplayNewProductForm}
            handleHideNewProductForm={handleHideNewProductForm}
            onAddNewProduct={handleAddNewProduct}
            // isAddFormVisible={isAddFormVisible}
          />
        </Overlay>
      )}
    </div>
  );
};

root.render(<App />);
