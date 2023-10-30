import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.tsx';
import './index.css';
import store from './redux/index';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={ store }>
    <App />
  </Provider>,
);