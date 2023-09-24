import { configureStore } from '@reduxjs/toolkit';
import Modals from './slice/modalSlice';


const Stores = configureStore({
  reducer: {
    ModalSlice: Modals
  },
});

export default Stores;