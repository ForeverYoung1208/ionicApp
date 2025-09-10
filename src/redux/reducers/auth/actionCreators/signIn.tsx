import { createAsyncThunk } from "@reduxjs/toolkit";
import { getNameThunk } from "../helpers";


export const signIn = createAsyncThunk(
  getNameThunk('signIn'),
  async (credentials) => {
    const { email, password } = credentials;
    
  }
)