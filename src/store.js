import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./reducers/dataSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { combineReducers } from "@reduxjs/toolkit";
const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({ 
  data: dataSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  
  middleware: [thunk]
})

export const persistor = persistStore(store)