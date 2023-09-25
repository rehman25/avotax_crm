import { createSlice } from '@reduxjs/toolkit';

const ModalAppear = createSlice({
  name: 'show hide',
  initialState: {
    ClientTypeModal: false,
    AddClientModal: false,
    CreateJobModal: false,
    CreateUserModal: false,
    CreateRoleModal: false,

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
    },
    CreateJobFun: (state) => {
      state.CreateJobModal = !state.CreateJobModal;
    },
    CreateRoleFun: (state) => {
      state.CreateRoleModal = !state.CreateRoleModal;
    }
  },
});

export const { ClientTypes, AddClientFun, CreateUserFun,CreateJobFun,CreateRoleFun } = ModalAppear.actions;

export default ModalAppear.reducer;
