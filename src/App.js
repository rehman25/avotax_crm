import Routing from "./Route/Routing";
import './assets/css/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux';
import store from './redux/Stores';

function App() {
  return (
   
    <>
        <Provider store={store}>
          <Routing />
        </Provider>
    </>
  );
}

export default App;
