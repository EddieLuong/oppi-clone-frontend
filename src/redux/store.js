import { configureStore } from "@reduxjs/toolkit";
import polllistReducer from "../containers/Polllist/reducer";
import pollDetailReducer from "../containers/PollDetail/reducer";
import loginReducer from "../containers/Login/reducer";

const store = configureStore({
  reducer: {
    login: loginReducer,
    polllist: polllistReducer,
    polldetail: pollDetailReducer,
  },
});

export default store;
