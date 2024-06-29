import { configureStore } from "@reduxjs/toolkit";
import { produce } from "immer";

const initialState = {
  email: "",
  phone: "",
  name: "",
};

const keyReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "SET_EMAIL":
        draft.email = action.payload;
        break;
      case "SET_PHONE":
        draft.phone = action.payload;
        break;
      case "SET_NAME":
        draft.name = action.payload;
        break;
    }
  });
};

const store = configureStore({ reducer: { key: keyReducer } });
export default store;