import { createSlice } from '@reduxjs/toolkit';

const ModalAppear = createSlice({
  name: 'show hide',
  initialState: {
    ClientTypeModal: false,
    AddClientModal: false,
    CreateJobModal: false,
    CreateUserModal: false,
    CreateRoleModal: false,
    SearchBarModal: false,
    SettingSubModal: false,

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
    },
    SearchBarSettingFun: (state) => {
      state.SearchBarModal = !state.SearchBarModal;
    },
    SearchSubFun: (state) => {
      state.SettingSubModal = !state.SettingSubModal;
    }
  },
});

export const { ClientTypes, AddClientFun, CreateUserFun,CreateJobFun,
  CreateRoleFun,SearchBarSettingFun,SearchSubFun } = 
  ModalAppear.actions;

export default ModalAppear.reducer;
