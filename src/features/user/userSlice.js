import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  location:""
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
    setLocation(state,action){
      state.location=action.payload
    }
  },
});


export default userSlice.reducer;

export const {updateName,setLocation} = userSlice.actions;