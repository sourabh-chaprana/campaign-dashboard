import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './root/store';
import MainDrawer from './layout/sidebar';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <MainDrawer />
    </div>
    </Provider>
  );
}

export default App;
