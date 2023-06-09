import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import storage from 'redux-persist/lib/storage' 
import { contactsReducer } from './contactsSlice'
import { filterReducer } from "./filterSlice";

const rootReducer = combineReducers({
        contacts: contactsReducer,
        filter: filterReducer
    },
)

const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['contacts'],
  }

const perstistedContactsReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: perstistedContactsReducer,
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
})

export const persistor = persistStore(store)