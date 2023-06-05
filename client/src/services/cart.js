import axios from 'axios'

const getCartItems = async () => {
  try {
    const response = await axios.get('/api/cart')
    return response.data;
  } catch (error) {
    console.log("Error:", error);
  }
}

const addToCart = async (productId) => {
  try {
    const response = await axios.post('/api/add-to-cart', { productId });
    return response.data;
  } catch (error) {
    console.log("Error:", error);
  }
}

const checkout = async () => {
  try {
    axios.post('/api/checkout');
  } catch (error) {
    console.log("Error:", error);
  }
}

export default {
  getCartItems,
  addToCart,
  checkout
}