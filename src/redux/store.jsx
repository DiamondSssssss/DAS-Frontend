import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userSlice from "./userSlice";
import appSlice from "./appSlice";
import classSlice from "./classSlice";
import classDetailSlice from "./classDetailSlice";
import manageSlice from "./manageSlice";
import examSlice from "./examSlice";
import examDetailSlice from "./examDetailSlice";
import usersSlice from "./usersSlice";
import subjectSlice from "./subjectSlice";
import manageDetailsSlice from "./manageDetailSlice";
import supermarketSlice from "./supermarketSlice";
import ExamBankSlice from "./ExamBankSlice";
import requestSlice from "./requestSlice";
import listPaySlice from "./listPaySlice";
import listBoughtSlice from "./listBoughtSlice";
import profileSlice from "./meSlice";
import schoolSlice from "./schoolSlice";
import schoolDetailSlice from "./schoolDetailSlice";
import transactionSlice from "./transactionSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: userSlice,
  users: usersSlice,
  class: classSlice,
  manage: manageSlice,
  superMarket: supermarketSlice,
  manageDetails: manageDetailsSlice,
  classDetail: classDetailSlice,
  subject: subjectSlice,
  request: requestSlice,
  listPay: listPaySlice,
  listBought: listBoughtSlice,
  exam: examSlice,
  examBank: ExamBankSlice,
  profile: profileSlice,
  school: schoolSlice,
  schoolDetail: schoolDetailSlice,
  examDetail: examDetailSlice,
  app: appSlice,
  transaction: transactionSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
