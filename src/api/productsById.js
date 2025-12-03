import { useState } from "react";
import axiosClient from "../services/apiClient";


export const productsById = async (id) => {
  

  const response = await axiosClient.get(
    `https://fakestoreapi.com/products/${id}`
  );
  return response.data;
};
