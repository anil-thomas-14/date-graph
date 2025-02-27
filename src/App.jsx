import { Provider } from "react-redux";
import store from './redux/store';
import Calendar from './components/calendar';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Calendar />
  </Provider>
  )
}

export default App
