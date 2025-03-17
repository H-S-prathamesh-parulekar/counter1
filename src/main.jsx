import "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/";
import Counter from "./Counter";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Counter />
  </Provider>
);
