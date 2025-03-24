// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   isLoading: false,
//   productList: [],
// };

// export const addNewProduct = createAsyncThunk(
//   "/products/addnewproduct",
//   async (formData) => {
//     const result = await axios.post(
//       "http://localhost:5000/api/admin/products/add",
//       formData,
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     return result?.data;
//   }
// );

// export const fetchAllProducts = createAsyncThunk(
//   "/products/fetchAllProducts",
//   async () => {
//     const result = await axios.get(
//       "http://localhost:5000/api/admin/products/get"
//     );

//     return result?.data;
//   }
// );

// export const editProduct = createAsyncThunk(
//   "/products/editProduct",
//   async ({ id, formData }) => {
//     const result = await axios.put(
//       `http://localhost:5000/api/admin/products/edit/${id}`,
//       formData,
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     return result?.data;
//   }
// );

// export const deleteProduct = createAsyncThunk(
//   "/products/deleteProduct",
//   async (id) => {
//     const result = await axios.delete(
//       `http://localhost:5000/api/admin/products/delete/${id}`
//     );

//     return result?.data;
//   }
// );

// const AdminProductsSlice = createSlice({
//   name: "adminProducts",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchAllProducts.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(fetchAllProducts.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.productList = action.payload.data;
//       })
//       .addCase(fetchAllProducts.rejected, (state, action) => {
//         state.isLoading = false;
//         state.productList = [];
//       });
//   },
// });

// export default AdminProductsSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const initialState = {
  isLoading: false,
  productList: [],
};

export const addNewProduct = createAsyncThunk(
  "/products/addNewProduct",
  async (formData) => {
    const result = await axios.post(`${API_URL}/api/admin/products/add`, formData, {
      headers: { "Content-Type": "application/json" },
    });

    return result.data;
  }
);

export const fetchAllProducts = createAsyncThunk(
  "/products/fetchAllProducts",
  async () => {
    const result = await axios.get(`${API_URL}/api/admin/products/get`);
    return result.data;
  }
);

export const editProduct = createAsyncThunk(
  "/products/editProduct",
  async ({ id, formData }) => {
    const result = await axios.put(`${API_URL}/api/admin/products/edit/${id}`, formData, {
      headers: { "Content-Type": "application/json" },
    });

    return result.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "/products/deleteProduct",
  async (id) => {
    const result = await axios.delete(`${API_URL}/api/admin/products/delete/${id}`);
    return result.data;
  }
);

const adminProductsSlice = createSlice({
  name: "adminProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload.data;
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        state.isLoading = false;
        state.productList = [];
      });
  },
});

export default adminProductsSlice.reducer;


