import axiosClient from "../services/apiClient";

export const productService = async()=>{
    const response = await axiosClient.get("https://fakestoreapi.com/products")
    return response.data;
}