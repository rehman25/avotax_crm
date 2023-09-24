import { createSlice } from '@reduxjs/toolkit';

const ModalAppear = createSlice({
  name: 'show hide',
  initialState: {
    ClientTypeModal: false,
    AddClientModal: false,
    CreateUserModal: false
  },
  reducers: {
    ClientTypes: (state) => {
      state.ClientTypeModal = !state.ClientTypeModal;
    },
    AddClientFun: (state) => {
      state.AddClientModal = !state.AddClientModal;
    },
    CreateUserFun: (state) => {
      state.CreateUserModal = !state.CreateUserModal
    }
  },
});

export const { ClientTypes, AddClientFun, CreateUserFun } = ModalAppear.actions;

export default ModalAppear.reducer;
