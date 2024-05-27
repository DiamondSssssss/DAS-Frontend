import React from "react";
import ReactDOM from "react-dom/client";
import "./dist/output.css";
import App from "./App";
import { Provider } from "react-redux";
import { persistor, store } from "redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot( document.getElementById( "root" ) ).render(
  <GoogleOAuthProvider clientId="748725350788-unpjo9trhb7gg6qjp3jc0ul174egfrn8.apps.googleusercontent.com">
    <Provider store={ store }>
      <PersistGate loading={ null } persistor={ persistor }>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </PersistGate>
    </Provider>
  </GoogleOAuthProvider>
);
