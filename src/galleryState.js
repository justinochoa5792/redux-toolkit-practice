import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPhotos = createAsyncThunk("photos/getPhotos", async () => {
  const response = await fetch("https://picsum.photos/v2/list?page=3&limit=9");
  const formatRes = await response.json();
  return formatRes;
});

export const getMorePhotos = createAsyncThunk(
  "photos/getMorePhotos",
  async () => {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=2&limit=9"
    );
    const formatRes = await response.json();
    return formatRes;
  }
);

export const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    photos: [],
    morePhotos: [],
    isLoading: false,
  },
  extraReducers: {
    [getPhotos.pending]: (state) => {
      state.isLoading = true;
    },
    [getPhotos.fulfilled]: (state, action) => {
      state.photos = action.payload;
      state.isLoading = false;
    },
    [getPhotos.rejected]: (state) => {
      state.isLoading = false;
    },
    [getMorePhotos.pending]: (state) => {
      state.isLoading = true;
    },
    [getMorePhotos.fulfilled]: (state, action) => {
      state.morePhotos = action.payload;
      state.isLoading = false;
    },
    [getMorePhotos.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default gallerySlice.reducer;
