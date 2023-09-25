import { createSlice } from '@reduxjs/toolkit';

const ModalAppear = createSlice({
  name: 'show hide',
  initialState: {
    ClientTypeModal: false,
    AddClientModal: false,
    CreateJobModal: false,
  },
  reducers: {
    ClientTypes: (state) => {
      state.ClientTypeModal = !state.ClientTypeModal;
    },
    AddClientFun: (state) => {
      state.AddClientModal = !state.AddClientModal;
    },
    CreateJobFun: (state) => {
      state.CreateJobModal = !state.CreateJobModal;
    }
  },
});

export const { ClientTypes,AddClientFun,CreateJobFun } = ModalAppear.actions;

export default ModalAppear.reducer;
