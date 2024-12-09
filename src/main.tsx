import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <App />
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);