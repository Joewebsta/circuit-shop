import axios from "axios";

const BASE_URL = "/api/products";

export const getProducts = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.log("Error:", error);
  }
};

export const createProduct = async (newProduct) => {
  try {
    const response = await axios.post(BASE_URL, newProduct);
    return response.data;
  } catch (error) {
    console.log("Error:", error);
  }
};

export const updateProduct = async (productId, updatedProduct) => {
  try {
    axios.put(`${BASE_URL}/${productId}`, updatedProduct);
  } catch (error) {
    console.log("Error:", error);
  }
};

export const deleteProduct = async (productId) => {
  await axios.delete(`${BASE_URL}/${productId}`);
};
