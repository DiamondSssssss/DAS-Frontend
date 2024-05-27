import { RouterProvider } from "react-router-dom";

import React from "react";
import { route } from "routes";
import { useSelector } from "react-redux";

function App() {
  // @ts-ignore
  const user = useSelector((state) => state.user);
  console.log(user);

  return <RouterProvider router={route} />;
}

export default App;
