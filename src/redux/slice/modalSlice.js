import { createSlice } from '@reduxjs/toolkit';

const ModalAppear = createSlice({
  name: 'show hide',
  initialState: {
    ClientTypeModal: false,
    AddClientModal: false
  },
  reducers: {
    ClientTypes: (state) => {
      state.ClientTypeModal = !state.ClientTypeModal;
    },
    AddClientFun: (state) => {
      state.AddClientModal = !state.AddClientModal;
    }
  },
});

export const { ClientTypes,AddClientFun } = ModalAppear.actions;

export default ModalAppear.reducer;
