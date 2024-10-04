// import logo from './logo.svg';
import "./App.css";
import { Provider } from "react-redux";
import store from "./root/store";
import MainDrawer from "./layout/sidebar";
import Dashboard from "./Dashboard";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainDrawer />
        {/* <Dashboard /> */}
      </div>
    </Provider>
  );
}

export default App;
